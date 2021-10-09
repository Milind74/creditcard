import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Form.module.css";
import { Carousel } from "./Carousel";
import { Link } from "react-router-dom";
const FormData = () => {
  const [details, setDetails] = useState({

    firstname: "",
    lastname: "",
    age: "",
    gender: "",
    pan:"",
    pincode:"",
    email:"",
    mobile:"",
    city: "",

  });

  const { firstname, lastname, age, gender,pan,pincode,email,mobile,city } = details;

  const Civilscore=(max,min)=>{
    return Math.floor(Math.random()*(max-min+1)+min)

  }
  console.log(Civilscore(1000,300))


  const handlechange = (e) => {
    // e.preventDefault()
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const onsubmit = async (e) => {
    e.preventDefault();
    var res = await axios.post("http://localhost:8000/customer", details);
    console.log("post=", res);
    window.alert("sucess")
  };

  return (
      <div  className={styles.container}>
<div  className={styles.leftside}>
  <div className={styles.leftchilddiv1} >
    <h3>Creditloan </h3>
     <img className={styles.img1} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTZbOdnCOD_7x9LFVcAtSKpUkCYQhpEtAyJA&usqp=CAU" alt="" />
     <h4>#Paiso sae <br /> badh kr kaun</h4>
  </div>
  <div  className={styles.leftchilddiv2}>
    <div >
    <h3> Your credit health matters…</h3>
    </div>
    
    <p>
   
    Your credit score is more than just a <br /> number.
        A better score can help unlock the things you
    want most</p>
    <p>
    —like a new credit card or the best
    loan rates in the market.
    </p>
  </div>
  <div>
    <Carousel/>
  </div>


</div>
    <div className={styles.rightside}>
      <h1>Free Credit Score</h1>
      <p>Track your credit report and score. Free, forever</p>
       
      <form onSubmit={(e) => onsubmit(e)}>
        <input
          style={{

            
          }}
          type="text"
          name="firstname"
          value={firstname}
          onChange={handlechange}
          placeholder="FIRSTNAME"
        />
        <br /> <br />{" "}
        <input
          style={{
            
          }}
          type="text"
          name="lastname"
          value={lastname}
          onChange={handlechange}
          placeholder="LASTNAME"
        />
        <br /> <br />{" "}
        <input
          style={{
            
          }}
          type="text"
          name="age"
          value={age}
          onChange={handlechange}
          placeholder="AGE"
        />
        <br /> <br />{" "}
        <input
          style={{
            
          }}
          type="text"
          name="gender"
          value={gender}
          onChange={handlechange}
          placeholder="GENDER"
        />
        <br /> <br />{" "}
        <input
          style={{
            
          }}
          type="text"
          name="pan"
          value={pan}
          onChange={handlechange}
          placeholder="PAN CARD"
        />
        <br />
        <br />{" "}
        <input
          style={{
            
          }}
          type="text"
          name="pincode"
          value={pincode}
          onChange={handlechange}
          placeholder="PINCODE"
        />
        <br />
        <br />{" "}
        <input
          style={{
            
          }}
          type="text"
          name="mobile"
          value={mobile}
          onChange={handlechange}
          placeholder="MOBILE"
        />
        <br />
        <br />{" "}
        <input
          style={{
            
          }}
          type="text"
          name="email"
          value={email}
          onChange={handlechange}
          placeholder="EMAIL"
        />
        <br />
        <br />{" "}

        <input
          style={{
            
          }}
          type="text"
          name="city"
          value={city}
          onChange={handlechange}
          placeholder="CITY"
        />
        <br />
        <br />{" "}
        <div style={{display:"flex",width:"400px",marginLeft:"0px"}}>

        <input style={{ border:"1px solid black",marginTop:"15px"}} class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
       <p style={{width:"500px",fontSize:"12px",}}>I hereby appoint conquerors as my authorised 
         representative to <br />
         receive my credit information from Cibil </p>
       
       </div>
 <br />
        <br />{" "}
        <Link to="/dashboard">
              <button
             style={{
            
           
               }}
        >
          Get your credit score
        </button>
        </Link>
      </form>
   </div>
      <div>
      

            
            </div>
    </div>

  );
};

export default FormData;
