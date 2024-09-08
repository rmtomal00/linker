import { useState } from "react";
import LoginPart from '../subroute/LoginPart';
import "../css/routes/Login.css"
import ArrowRightSide from "../assets/icons/ArrowRight";
import Signup from "../subroute/SignupPart";
import Footer from "../components/Footer"


const Login = () =>{
    const [showlogin, setShowLogin] = useState(true)
    const [buttonText, setButtonText] = useState("Sign Up")
    const onClickLoginButton =()=>{
        if (!showlogin) {
            setButtonText("Sign Up")
        }else{
            setButtonText("Login")
        }
        setShowLogin((prev)=>!prev)
    }
    return(
        <>
            <div className="loginroutecontainer">
                <div className="loginrouterendercontainer">
                    {showlogin ? <LoginPart/> : <Signup/>}
                </div>
                <div className="lgin-bu-con">
                    <button className="loginroutelogin" onClick={onClickLoginButton}>{buttonText}</button>
                    <ArrowRightSide/>
                </div>
            </div>
            <div className="l-r-footer">
                <Footer/>
            </div>
        </>
    )
}
export default Login;