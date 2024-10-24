import { useState } from "react"
import '../css/subroutes/LoginPart.css'
import ProgressDialog from "../components/Loading";


const Signup =()=>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('')
    const [confirmpass, setConfirmPass] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const [errorContainer, setErrorContainer] = useState('disable-content-error')
    const [open, setOpen] = useState(false)
    const [isError, setIsError] = useState(false)

    const baseUrl = "http://192.168.2.106:2056"
    

    const loginUser =()=>{
        if (!email || !password || !confirmpass || !username) {
            setIsError(true)
            setErrorMsg("Any input field can't be empty")
            setErrorContainer('enable-content-error')
            return;
        }

        if (password !== confirmpass) {
            setIsError(true)
            setErrorMsg("Confirm Password and Password not match")
            setErrorContainer('enable-content-error')
            return;
        }
        console.log("Ok");
        setOpen(true)
        fetch(`${baseUrl}/api/v1/auth/register`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "username": username,
                    "email": email,
                    "password": password
                })
            }
        ).then(response => response.json())
        .then(result =>{
            if(result.err){
                setIsError(true)
                setErrorMsg(result.message)
                setErrorContainer('enable-content-error')
            }else{
                setIsError(false)
                setErrorMsg("Account is created, Please check you email and verify the email using the link")
                setErrorContainer('enable-content-error')
            }
            setOpen(false)
        })
        .catch(err=>{
            console.log(err);
        })
    }
    
    return(
        <div className="loginmaincontainer">
            <div className="submaincontainerlogin">
                <ProgressDialog open={open}/>
                <div className="loginheader">
                    <p className="logintext">                   
                        Sign Up
                    </p>
                </div>
                <div className="loginuserdetails">
                    <p className="logininputboxtitle">
                        User Name
                    </p>
                    <input type="text" className="loginemail" onChange={e => setUserName(e.target.value)} placeholder="Enter a Username"/>
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
                </div>

                <div className="loginuserdetails">
                    <p className="logininputboxtitle">
                        Confirm Password
                    </p>
                    <input type="password" className="loginpassword" onChange={e => setConfirmPass(e.target.value)} placeholder="Enter your Password"/>
                </div>
                <div className={errorContainer}>
                    <p className={isError ? "error-msg" : "success-msg"}>
                        {errorMsg}
                    </p>
                </div>
                <div className="signup-submit">
                    <button className="loginsubmitbutton" onClick={loginUser}>Submit</button>
                </div>
            </div>
            
        </div>
    )
}

export default Signup