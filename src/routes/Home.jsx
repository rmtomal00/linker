import { useState } from 'react';
import InputText from '../components/InputText';
import '../css/routes/Home.css'
import '../css/components/Button.css'
import Card from '../components/Card';
import analysis_Img from '../assets/analysis.png'
import api_image from '../assets/api.png'
import CardConst from '../constant/cardheading';
import Footer from '../components/Footer';
const Home = () =>{
    const [inputValue, setInputValue] = useState('')
    const onGetText = (value)=>{
        setInputValue(value)
    }
    const sendData = () =>{
        console.log(inputValue);
    }
    return(
        <div className="maincontainer">
            <div className="header">
                <h1>Create a Short URLs</h1>
                <p><span>Team 71</span> is the best <i>link shorter</i> for free.</p>
                <p>You will get advence <b>analysis</b> system at lowest cost for <b>One month</b>.</p>
            </div>
            <div className="body">
                <InputText onInputHandel={onGetText} placeholder={"Enter URL with http:// or https://"}/>
                <button onClick={sendData} className='button'>Submit</button>
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