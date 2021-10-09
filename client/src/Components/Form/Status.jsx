import React,{useEffect} from 'react'
import axios from 'axios';

const Status = () => {
    const getStatus = async () => {
        const response = await axios.get("http://localhost:8000/student");
    
        console.log("response=", response.data.student);
      };
      useEffect(() => {
        getStatus();
      }, []);
    
    return (
        <div>
            

        </div>
    )
}

export default Status
