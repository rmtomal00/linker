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



const Dashboard = () =>{

    const [date, setDate] = React.useState()
    const [startDate, setStartDate] = React.useState()

    const options = {
        chart: {
          type: 'date',
        },
        xaxis: {
          categories: ["20-01-24", "20-01-24", "20-01-24", "20-01-24", "20-01-24", "20-01-24", "20-01-24", "20-01-24", "20-01-24", "20-01-24", "20-01-24", "20-01-24", "20-01-24"],
        },
      };
    
      const series = [
        {
          name: 'click',
          data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 5, 4, 100,700],
        },
      ];
    const jsonData = [
        { "name": "John", "age": 30, "city": "New York" },
        { "name": "Jane", "age": 25, "city": "Los Angeles" },
        { "name": "Mike", "age": 35, "city": "Chicago" }
      ];

    const takeData = ()=>{
        console.log(`Start Data: ${startDate}, End Date: ${date}`);
        
    }
    return(
        <div className="da-m-contain">
            <div className="da-h-con">
                <div className="das-us-info">
                    <div className="da-us-img">
                        <img src={UsersIcon} alt='usersInfo' className='da-u-img'/>
                    </div>
                    <ol className="das-us-data">
                        <li className="das-u-li">User Name: Tomal</li>
                        <li className="das-u-li">Email: rmtomal10@gmail.com</li>
                        <li className="das-u-li">Plan: free</li>
                        <li className="das-u-li">Valid: null</li>
                        <li className="das-u-li">Last Subscription: no date</li>
                        <li className="das-u-li">Short link limit: 10/50</li>
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
                            <p className="count">100</p>
                        </div>
                        <div className="das-gard">
                            <p className="title">
                                Total Link
                            </p>
                            <p className="count">100</p>
                        </div>
                        <div className="das-gard">
                            <p className="title-unique">
                                Unique Clicks
                            </p>
                            <p className="count">100</p>
                        </div>
                    </div>
                    <div className="s-li-lst-tb">
                        <Table data={jsonData}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Dashboard;