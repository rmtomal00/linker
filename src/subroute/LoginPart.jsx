import { useContext, useState } from "react"
import '../css/subroutes/LoginPart.css'
import DialogComponent from "../components/Dialog";
import cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";
import ProgressDialog from "../components/Loading";
import { AuthContext } from "../Context/AuthContext";
const Login =()=>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(false)
    const [progresonpen, setProgessOpen] = useState(true)
    const [error, setError] = useState("disable-content-error");
    const [errorMsg, setErrorMsg] = useState("");
    const [progressCompontnt, setProgressCompontnt] = useState(false)
    const navigator  = useNavigate();
    const [errMagCon, setErrMsgCon] = useState("error-msg")
    const { setLoginEnable } = useContext(AuthContext);
    const [isResetPassword, setIsResetPassword] = useState(true)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const getToken = cookies.get("team71.link");
    console.log(getToken);
    
    if(getToken){
        navigator("/home")
    }

    
    const handleClose = () => {
        setIsResetPassword(true)
        setOpen(false);
    };

    const handleClickForResendEmail = () => {
        setIsResetPassword(false)
        setOpen(true);
    };

    const resetPassword = (dataFrom) =>{
        const email = dataFrom.email
        if(dataFrom.forgetpass){
            setProgressCompontnt(true);
            fetch("http://192.168.2.106:2056/api/v1/auth/forget-password",{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    'email': email
                })
            }).then(resonse=> resonse.json())
            .then(result =>{
                console.log(result);
                
                if(result.err){
                    console.log(result.message);
                    setError("enable-content-error")
                    setErrMsgCon("error-msg")
                    setErrorMsg(result.message)
                }else{
                    console.log(result.message);
                    setError("enable-content-error")
                    setErrMsgCon("success-msg")
                    setErrorMsg(result.message)
                }
                setProgressCompontnt(false)
            }).catch(error=> {console.log(error)})
        }else{
            setProgressCompontnt(true);
            fetch(`http://192.168.2.106:2056/api/v1/auth/resend-email-verification?email=${email}`,{
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                },
            }).then(resonse=> resonse.json())
            .then(result =>{
                console.log(result);
                
                if(result.err){
                    console.log(result.message);
                    setError("enable-content-error")
                    setErrMsgCon("error-msg")
                    setErrorMsg(result.message)
                }else{
                    console.log(result.message);
                    setError("enable-content-error")
                    setErrMsgCon("success-msg")
                    setErrorMsg(result.message)
                }
                setProgressCompontnt(false)
            }).catch(error=> {console.log(error)})
        }
        
    }

    const loginUser =()=>{
        setProgressCompontnt(true)
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "email": email,
            "password": password
        });

        const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
        };
        fetch("http://192.168.2.106:2056/api/v1/auth/login", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            if(result){
                if(!result.err){
                    const res = result.data;
                    cookies.set("team71.link", res.token,{expires: 1});
                    setProgressCompontnt(false)
                    setLoginEnable()
                }else{
                    setError("enable-content-error")
                    setErrorMsg(result.message)
                    setProgressCompontnt(false)

                }
            }
        })
        .catch((error) => console.error(error));
    }
    
    return(
        <div className="loginmaincontainer">
            <div className="submaincontainerlogin">
                <div className="loginheader">
                    <p className="logintext">                   
                        Login
                    </p>
                </div>
                <ProgressDialog open={progressCompontnt}/>
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
                        <button className="forget-sector" onClick={handleClickOpen}>
                            Forget Password
                        </button>
                        <button className="vri-email-sector" onClick={handleClickForResendEmail}>
                            Resend Verification Email
                        </button>
                        <DialogComponent open={open} handleClose={handleClose} setProgessOpen={setProgessOpen} dataFunction={resetPassword} bool={isResetPassword}/>
                    </div>
                    <div className={error}>
                        <p className={errMagCon}>
                            {errorMsg}
                        </p>
                    </div>
                </div>
                <div className="loginsubmit">
                    <button className="loginsubmitbutton" onClick={loginUser}>Submit</button>
                </div>
            </div>
            
        </div>
    )
}

export default Login