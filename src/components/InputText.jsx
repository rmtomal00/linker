import { useState } from "react"
import '../css/components/InputText.css'

const InputText = ({onInputHandel, placeholder})=>{
    const [value, setValue] = useState("")
     const handleChange = (event)=>{
        setValue(...value+String(event))
     } 
    return(
        <input 
        type="text" 
        onChange={e => {handleChange(e.target.value); onInputHandel(e.target.value)}}
        placeholder={placeholder}/>
    )
}

export default InputText