import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./aproved.css"
const Aproved = () => {
  const[civil,setCivil]=useState(0)

    const getdata=async(e)=>{
      var res = await axios.get("http://localhost:8000/cibilscore");
      console.log("get=", res);
      setCivil(Math.floor(res.data.x))
      
    }
    useEffect(() => { 
      getdata()
    }, [])
   
    return (
      <>
      <div className="conta">
        <div class="card text-center">
          <div class="card-header">Status</div>
          <div class="card-body">
            <h5 class="card-title">Congratulation</h5>
            <p class="card-text">You are eligible</p>
           {civil>0?<p class="card-text"> Your Score is:{civil}</p>:""} 


            <div class="d-grid gap-2 col-6 mx-auto">
         <Link to="/dashboard">
             <button style={{color:"black"}} class="btn btn-info" type="button">
                Go to dashboard
              </button>
              </Link> 
            </div>
          </div>
          <div class="card-footer text-muted"></div>
        </div>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="red" fill-opacity="1" d="M0,32L60,80C120,128,240,224,360,250.7C480,277,600,235,720,197.3C840,160,960,128,1080,122.7C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      </div>
      </>
    );
}

export default Aproved
