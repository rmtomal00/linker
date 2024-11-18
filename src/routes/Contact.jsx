import { useState } from "react";
import ProgressDialog from "../components/Loading";
import DialogResponse from "../components/DialogResponse";


const Contact = () =>{

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true);
    // Simulate a process
  };
  const hideDia =()=>{
    setOpen(false)
  }

  
    return (
      <div>
          <div>
            <h1>My App</h1>
            <button onClick={handleOpen}>test</button>
            <input type="date" name="" id="" />
            <DialogResponse open={open} onCloseDialog={hideDia} title={"Successfull"} content={"Email not found"}/>
          </div>
      </div>
    );
  }
export default Contact;