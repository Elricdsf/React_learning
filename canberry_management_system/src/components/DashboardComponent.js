import { useEffect } from "react";
import {customFetchGet,customFetchPost} from '../resources/data';
const Dashboard = () =>{

    useEffect(()=>{
        // const config = {
        //     headers:{
        //         'x-access-token': sessionStorage.getItem('token'),
        //     }
        // };
        fetchData();
    });
    const fetchData = async ()=>{
        const res = await fetch('http://localhost:3000/api/user/record?pagename=testpage9',{
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            // mode: 'cors', // no-cors, *cors, same-origin
            // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'x-access-token': sessionStorage.getItem('token')
            },
            // redirect: 'follow', // manual, *follow, error
            // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            // body: JSON.stringify(data) // body data type must match "Content-Type" header
          });
          console.log(res);
    };

    return(
       
        <h1>Dashboard</h1>
      
    );
}
export default Dashboard;