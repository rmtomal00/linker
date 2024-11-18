import { useState, useEffect } from "react"
import Table from "../components/Table2";
import Footer from "../components/Footer"
import '../css/routes/History.css'
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";

const History = () =>{

    const [inputValue, setInputValue] = useState('')
    const [linkIds, setLinkIdes] = useState('')
    const location = useLocation()
    const [token, setUserToken] = useState("");
    const [skip, setSkip] = useState(0)
    const [linkHistory, setLinkHistory] = useState([])
    const [linkClick, setLinkClick] = useState({})

    const tokenData = Cookies.get("team71.link")
    
    
    

    const errorToast = (msg)=> toast.error(msg);
    const successToast = (msg)=> toast.success(msg);

    const handleClick = () =>{
        if(!inputValue || !tokenData){
            errorToast("Link ID is empty or Token is empty")
            return;
        }

        setLinkIdes(inputValue)
        
        // if (token && linkIds) {
        //     fetch("http://localhost:2056/api/v1/users//get-data-history-page", {
        //         headers: {
        //             "Content-Type":"application/json",
        //             "Authorization": `Bearer ${token}`
        //         },
        //         method: 'POST',
        //         body: JSON.stringify({
        //             "linkId": linkIds,
        //             "skip": skip
        //         })
        //     }).then(response => response.json())
        //     .then((result)=>{
        //         if(!result.error){
        //             setLinkHistory(result.data.linkData);
        //             setLinkClick(result.data.clickData)
        //             console.log(result.data);
                    
        //         }else{
        //             errorToast(result.message)
        //         }
                
        //     }).catch((err)=>{
        //         console.log(err);
        //     })
        // }
        
    }
    
    
    useEffect(() => {
        if(!tokenData){
            errorToast("Link ID is empty or Token is empty")
            return;
        }

        setUserToken(tokenData);
        
        if (token && linkIds) {
            fetch("http://localhost:2056/api/v1/users//get-data-history-page", {
                headers: {
                    "Content-Type":"application/json",
                    "Authorization": `Bearer ${token}`
                },
                method: 'POST',
                body: JSON.stringify({
                    "linkId": linkIds,
                    "skip": skip
                })
            }).then(response => response.json())
            .then((result)=>{
                if(!result.error){
                    setLinkHistory(result.data.linkData);
                    setLinkClick(result.data.clickData)
                    console.log(result.data);
                    
                }else{
                    errorToast(result.message)
                }
                
            }).catch((err)=>{
                console.log(err);
            })
        }
        
    },[linkIds, skip, token, tokenData]);

    const data = location.state;
    useEffect(()=>{
        setLinkIdes(data["SHORT ID"])
    },[data])

    const plusSkip =()=>{
        const newSkip = skip + 100;
        if(linkHistory.length <= 0 ){
            errorToast("No more data");
            return;
        }else{
            setSkip(newSkip)
        }
    }

    const minusSkip =()=>{
        const newSkip = skip - 100;

        if(newSkip < 0 ){
            if(newSkip > -98){
                setSkip(0)
            }else{
                errorToast("You can't back");
                return;
            }
        }else{
            setSkip(newSkip)
        }
    }

    return(
        <div className="ma-con-hi">
            <div className="content-con-hi">
                <div className="se-bar-con">
                    <input type="text" 
                    onChange={(e)=>{setInputValue(e.target.value)}} 
                    placeholder="Enter the link id, SyPS1A"
                    className="sea-input"/>
                    <button type="submit" onClick={handleClick} className="se-sub-hi">Saerch</button>
                </div>
                <ToastContainer/>
                <div className="his-total-analysis">
                        <div className="his-data-click">
                            <p className="title">
                                Count Clicks
                            </p>
                            <p className="count">{!linkClick.totalClick ? "No Data": linkClick.totalClick}</p>
                        </div>
                        <div className="his-data-click">
                            <p className="title-unique">
                                Unique Clicks
                            </p>
                            <p className="count">{!String(linkClick.unique_click) ? "No Data": linkClick.unique_click}</p>
                        </div>
                </div>
                <div className="h-li-lst-tb">
                    { linkHistory.length <= 0 ? <h3>No history found</h3> : <Table data={linkHistory}/>}
                </div>
                <div className="nxt-btn-in-his">
                    <div className="sty-nxt-his">
                        <button type="button" className="next-btn-his" onClick={minusSkip}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg></button>
                        <button type="button" className="next-btn-his" onClick={plusSkip}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg></button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default History