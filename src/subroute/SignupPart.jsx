import { useState } from "react"
import '../css/subroutes/LoginPart.css'
import DialogComponent from "../components/Dialog";
const Signup =()=>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(false)
    const [forgetpasswords, setForgetPasswords] = useState(true)
    const [progresonpen, setProgessOpen] = useState(true)

    const handleClickOpen = () => {
        setOpen(true);
    };


    const loadingClose =()=>{
        setTimeout(setProgessOpen(false), 5000)
      }
    
    const handleClose = () => {
        setForgetPasswords(true)
        setOpen(false);
    };

    const handleClickForResendEmail = () => {
        setForgetPasswords(false)
        setOpen(true);
    };

    const loginUser =()=>{
        console.log(`useremail: ${email}, password: ${password}`);
    }
    
    return(
        <div className="loginmaincontainer">
            <div className="submaincontainerlogin">
                <div className="loginheader">
                    <p className="logintext">                   
                        Sign Up
                    </p>
                </div>
                <div className="loginuserdetails">
                    <p className="logininputboxtitle">
                        User Name
                    </p>
                    <input type="text" className="loginemail" onChange={e => setEmail(e.target.value)} placeholder="Enter a Username"/>
                </div>
                <div className="loginuserdetails">
                    <p className="logininputboxtitle">
                        Email
                    </p>
                    <input type="text" className="loginemail" onChange={e => setEmail(e.target.value)} placeholder="Enter your Email"/>
                </div>
                <div className="loginuserdetails">
                    <p className="logininputboxtitle">
                        Password
                    </p>
                    <input type="password" className="loginpassword" onChange={e => setPassword(e.target.value)} placeholder="Enter your Password"/>
                    <div className="login-es-sector">
                        <DialogComponent open={open} handleClose={handleClose} forgetpassword={forgetpasswords} setProgessOpen={setProgessOpen}/>
                    </div>
                </div>
                <div className="loginsubmit">
                    <button className="loginsubmitbutton" onClick={loginUser}>Submit</button>
                </div>
            </div>
            
        </div>
    )
}

export default Signup