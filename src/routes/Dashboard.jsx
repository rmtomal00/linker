import * as React from 'react';
import UsersIcon from '../assets/users.png'
import "../css/routes/Dashboard.css"
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import Table from '../components/Table';
import BarChart from '../components/BarChart';
import Footer from '../components/Footer'
import Cookies from 'js-cookie';
import {format, addDays, subDays} from 'date-fns'
import { ToastContainer, toast } from 'react-toastify';
import { da } from 'date-fns/locale';



const Dashboard = () =>{

    const [date, setDate] = React.useState()
    const [tableData, setTableData] = React.useState()
    const [startDate, setStartDate] = React.useState()
    const [profile, setProfile] = React.useState({"plan": "free","username": "demo","email": "demo@gmail.com","valid": null,"lastUpdate": "2024-10-22T01:08:40.000Z","count": 0})
    const st = format(addDays(new Date(), 1), "yyyy-MM-dd")
    const ed = format(subDays(new Date(), 8), "yyyy-MM-dd")
    const [totalData, setTotalData] = React.useState({})

    const baseUrl = 'http://192.168.2.106:2056'

    const token = Cookies.get("team71.link")

    const errorToast = (msg)=> toast.error(msg);

    const options = {
        chart: {
          type: 'date',
        },
        xaxis: {
          categories: ["date", "date", "date", "date", "date", "date", "date", "date", "date", "date", "date", "date", "date"],
        },
    };
    const series = [
    {
        name: 'click',
        data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 5, 4, 100,700],
    },
    ];
    var jsonData = [
        { "name": "Demo", "age": 30, "city": "New York" },
        { "name": "Demo", "age": 25, "city": "Los Angeles" },
        { "name": "Demo", "age": 35, "city": "Chicago" }
      ];

    
      
      const getuserData =(std,end)=>{

        
        
    }

    //Profile
    React.useEffect(() => {
        if (token) {
            fetch(`${baseUrl}/api/v1/users/user-profile`, {
                method: 'POST',
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                
                if (!result.err) {
                    const profileRes = {
                        username: result.data.userData.username,
                        email: result.data.userData.email,
                        plan: result.data.userSubscribtion.plan,
                        valid: result.data.userSubscribtion.valid,
                        lastUpdate: result.data.userSubscribtion.lastUpdate,
                        count: result.data.totalShortLinkMonth.count
                    };
                    setProfile(profileRes);
                } else {
                    console.log("Error occurred:", result.message);
                    errorToast(result.message);
                }
            })
            .catch((err) => {
                console.error("Fetch error:", err);
                errorToast("Failed to fetch user profile.");
            });
        } else {
            console.log("token null");
            errorToast("Token not found");
        }
        fetch(`${baseUrl}/api/v1/users/get-link-history`, {
            method: 'POST',
            headers:{
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                startDate: ed,
                endDate: st
            })
        }).then((response)=> response.json())
        .then((result)=>{
            if(!result.err){
                //console.log(result.data);
                const dta = result.data
                setTableData(dta.data)
                setTotalData(dta.click)
                
            }else{
                errorToast("User Some data can't load")
            }
        }).catch((error)=>console.log(error))
    }, [token, st, ed]);


    const takeData = ()=>{
        console.log(`Start Data: ${startDate}, End Date: ${date}`);
        
    }
    return(
        <div className="da-m-contain">
            <div className="da-h-con">
                
                <div className="das-us-info">
                    <ToastContainer/>
                    <div className="da-us-img">
                        <img src={UsersIcon} alt='usersInfo' className='da-u-img'/>
                    </div>
                    <ol className="das-us-data">
                        <li className="das-u-li">{`Username: ${profile.username}`}</li>
                        <li className="das-u-li">{`Email: ${profile.email}`}</li>
                        <li className="das-u-li">{`Plan: ${profile.plan}`}</li>
                        <li className="das-u-li">{`Valid: ${!profile.valid ? "No Subscription" : format(profile.valid, "dd.mm.yyyy") }`}</li>
                        <li className="das-u-li">{`Last Subscription: ${format(profile.lastUpdate, 'dd.mm.yyyy')}`}</li>
                        <li className="das-u-li">{`Total ShortLink: ${profile.count}/month`}</li>
                    </ol>
                    <div className="sub-btn-section">
                        <p className='banner-dash-sub'>To get extra analysis and official support click on Subscribe Now button.
                             Your short link limit will be increased and You will able to see the clicked date and IPs of your traffic.
                              To see the extra analysis click on <i className='i-p-banner-das'>More</i> of table.</p>
                        <button className='sub-btn-dash'>Subscribe Now</button>
                    </div>
                </div>
                <div className="users-analy-data">
                    <div className="da-date-pkr">
                        <div className="d-pkr">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DateField', 'DateField']}>
                                    <DateField
                                    label="Start Date"
                                    value={startDate}
                                    onChange={(newValue) => setStartDate(newValue)}
                                    />
                                    <DateField
                                    label="End Date"
                                    value={date}
                                    onChange={(newValue) => setDate(newValue)}
                                    />
                                </DemoContainer>
                                <div className="d-btn-das">
                                    <button className='d-sub-bit' onClick={takeData}>Submit</button>
                                </div>
                            </LocalizationProvider>
                        </div>
                    </div>
                    <div className="das-lnk-grp">
                        <BarChart options={options} series={series}/>
                    </div>
                    <div className="das-total-analysis">
                        <div className="das-gard">
                            <p className="title">
                                Total Clicks
                            </p>
                            <p className="count">{!totalData.totalClick ? "demo": totalData.totalClick}</p>
                        </div>
                        <div className="das-gard">
                            <p className="title">
                                Total Link
                            </p>
                            <p className="count">{!totalData.totallink ? "demo": totalData.totallink}</p>
                        </div>
                        <div className="das-gard">
                            <p className="title-unique">
                                Unique Clicks
                            </p>
                            <p className="count">{!totalData.unique_click ? "demo": totalData.unique_click}</p>
                        </div>
                    </div>
                    <div className="s-li-lst-tb">
                        <Table data={!tableData ? jsonData: tableData}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Dashboard;