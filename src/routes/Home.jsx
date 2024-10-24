import { useState } from 'react';
import InputText from '../components/InputText';
import '../css/routes/Home.css'
import '../css/components/Button.css'
import Card from '../components/Card';
import analysis_Img from '../assets/analysis.png'
import api_image from '../assets/api.png'
import CardConst from '../constant/cardheading';
import Footer from '../components/Footer';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import CopyToClipboard from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Home = () =>{
    const [inputValue, setInputValue] = useState('')
    const [showurlcontainer, setShowUrlContainer] = useState('invisible-short-url')
    const [url, setUrl] = useState('');

    const onGetText = (value)=>{
        setInputValue(value)
    }
    const notifySuccess = () => toast.success("Copped!");
    const notifyError = (msg) => toast.error(msg);
    const sendData = () =>{
        if (!inputValue) {
            notifyError("Url can't be empty")
            setShowUrlContainer("invisible-short-url")
            return;
        }
        if (!inputValue.trim().toLowerCase().startsWith("http://") && !inputValue.trim().toLowerCase().startsWith("https://")) {
            notifyError("URL must contain https:// or http://");
            setShowUrlContainer("invisible-short-url")
            return;
        }
        const token = Cookies.get("team71.link")
        if (token) {
            fetch("http://192.168.2.106:2056/api/v1/users/short-link",{
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token.trim()}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "userlink": inputValue.trim().toLowerCase()
                })
            }).then((response)=>response.json())
            .then((result)=>{
                console.log(result);
                if(result.err){
                    notifyError(result.message)
                    setShowUrlContainer("invisible-short-url")
                }else{
                    setShowUrlContainer("show-short-url");
                    setUrl(result.data.shortLink)
                }
            }).catch((error)=>console.log(error))
        }else{
            notifyError("You need to login for create a short link");
        }
    }
    return(
        <div className="maincontainer">
            <ToastContainer/>
            <div className="header">
                <h1>Create a Short URLs</h1>
                <p><span>Team 71</span> is the best <i>link shorter</i> for free.</p>
                <p>You will get advence <b>analysis</b> system at lowest cost for <b>One month</b>.</p>
            </div>
            <div className="body">
                <InputText onInputHandel={onGetText} placeholder={"Enter URL with http:// or https://"}/>
                <button onClick={sendData} className='button'>Submit</button>
                <div className={showurlcontainer}>
                    <p className="url-link-short">{url}</p>
                    <div className="copy-button">
                        <CopyToClipboard text={url}>
                            <button className="cpy-button" onClick={notifySuccess}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
                                </svg>
                            </button>
                        </CopyToClipboard>
                    </div>
                </div>
                <div className="cards">
                    <Card/>
                    <Card heading='Tracking System' image={analysis_Img} text={CardConst().tracking}/>
                    <Card heading='API Service' image={api_image} text={CardConst().api}/>
                </div>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}
export default Home;