import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Form.module.css";

const CreateStudent = () => {
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

  const handlechange = (e) => {
    // e.preventDefault()
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const onsubmit = async (e) => {
    e.preventDefault();
    var res = await axios.post("http://localhost:8000/custumer", details);
    console.log("post=", res);
  };

  return (
      <div  className={styles.container}>
<div  className={styles.leftside}>
  

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
        <div style={{display:"flex",width:"400px",marginLeft:"150px"}}>

        <input style={{ border:"1px solid black",marginTop:"15px"}} class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
       <p style={{width:"500px",fontSize:"12px"}}>I hereby appoint conquerors as my authorised 
         representative to receive my credit information from Cibil </p>
       
       </div>
 <br />
        <br />{" "}
        <button
          style={{
            
           
          }}
        >
          Get your credit score
        </button>
      </form>
   </div>
      <div>
            
            </div>
    </div>

  );
};

export default CreateStudent;
