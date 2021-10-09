import React,{useState} from 'react'
import {useHistory,Link} from 'react-router-dom';
import "./Signup.css"


const Signup = () => {
 const histroy=useHistory()
const [user,setUser] = useState({
  user_name: "",
  email: "",
  password: "",
  confirm_password: "",
});

const {user_name,email,password,confirm_password} = user;

const handle=(e)=>{
 
setUser({...user,[e.target.name]:e.target.value})
}

  const submit=async (e)=>{
     e.preventDefault();
  const { user_name, email, password, confirm_password} = user;

console.log("user",user)
  const res = await fetch("/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body:JSON.stringify({
      user_name,
      email,
      password,
      confirm_password,
    }),
  });
  const data=res.json()
  if(data.status===422||!data){
    alert("invalid data")
  }
  else{
    alert("Success")
   histroy.push("/login")
  }
  
  }  


    return (
      <div className="container">
        <h1 style={{ color: "#e2e8ec" }}>.</h1>
        <div className="form">
          <h2>Sign up</h2>
          <form method="POST">
            <label>Username*</label> <br />
            <input
              type="text"
              name="user_name"
              placeholder="Enter your name"
              value={user_name}
              onChange={handle}
            />
            <br />
            <label>
              Only numbers, letters and underscores allowed. No spaces.
            </label>
            <br />
            <label>E-mail address*</label> <br />
            <input
              type="text"
              name="email"
              placeholder="Enter your Email"
              value={email}
              onChange={handle}
            />
            <br />
            <br />
            <label>Password*</label> <br />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={handle}
            />
            <br />
            <br />
            <label>Confirm password*</label> <br />
            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm your password"
              value={confirm_password}
              onChange={handle}
            />
            <br />
            <br />
            <label>Submit*</label> <br />
            <button type="submit" onClick={submit}>
              submit
            </button>
            <hr style={{ "margin-top": "30px" }} />
            <label>
              <Link to="/login">Login</Link>{" "}
            </label>
          </form>
        </div>
      </div>
    );

}
export default Signup
