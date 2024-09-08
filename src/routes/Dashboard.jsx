import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import UsersIcon from '../assets/users.png'
import "../css/routes/Dashboard.css"
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import dayjs from 'dayjs';
import Table from '../components/Table';



const Dashboard = () =>{

    const [date, setDate] = React.useState()
    const [startDate, setStartDate] = React.useState()
    const jsonData = [
        { "name": "John", "age": 30, "city": "New York" },
        { "name": "Jane", "age": 25, "city": "Los Angeles" },
        { "name": "Mike", "age": 35, "city": "Chicago" }
      ];
    return(
        <div className="da-m-contain">
            <div className="da-h-con">
                <div className="das-us-info">
                    <div className="da-us-img">
                        <img src={UsersIcon} alt='usersInfo' className='da-u-img'/>
                    </div>
                    <ol className="das-us-data">
                        <li className="das-u-li">UserName</li>
                        <li className="das-u-li">Email</li>
                        <li className="das-u-li">Plan</li>
                        <li className="das-u-li">Valid</li>
                        <li className="das-u-li">Last Subscription</li>
                        <li className="das-u-li">Short link limit</li>
                    </ol>
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
                                    <button>Submit</button>
                                </div>
                            </LocalizationProvider>
                        </div>
                    </div>
                    <div className="das-lnk-grp">
                        <LineChart
                            xAxis={[{ data: [1, 2, 3, 5, 8, 10,20] }]}
                            series={[
                                {
                                data: [0, 0, 0, 1, 1.5,5,20 ],
                                },
                            ]}
                            width={500}
                            height={300}
                        />
                    </div>
                    <div className="s-li-lst-tb">
                        <Table data={jsonData}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;