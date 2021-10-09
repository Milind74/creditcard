import React,{useContext} from 'react'
import "./Signup.css"
import {useHistory,Link} from 'react-router-dom';
import { userContext } from '../App';
const Login = () => {
  const {state,dispatch} = useContext(userContext)
  const history=useHistory();
    const [user, setuser] = React.useState({
        email:"",
        password:""
    })
    const{email,password}=user;
    const handle=(e)=>{
      setuser({...user,[e.target.name]:e.target.value})
      
    }
    const Login=async(e)=>{
        e.preventDefault();
        const res=await fetch("/login",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            email,
            password
          })
      })
      const data=res.json()
      if(res.status===400 ||!data){
          window.alert("Please enter your correct email and password")
      }
      else{
        dispatch({type:"USER",payload:true})
        // window.alert("Login success")
        history.push("/landing");
      }
    }
    return (
      <div className="container">
        <h1 style={{ color: "#e2e8ec" }}>.</h1>
        <div className="form">
          <h2>Log in</h2>
          <form method="POST">
            <label>Email*</label> <br />
            <input type="email" name="email" value={email} onChange={handle} />
            <br />
            <br />
            <label>Password*</label> <br />
            <input
              type="password"
              name="password"
              value={password}
              onChange={handle}
            />
            <br />
            <br />
            <button onClick={Login}>Login</button>
            <br />
            <hr style={{ marginTop: "30px" }} />
            <label style={{ textAlign: "center" }}>
              {" "}
              <Link to="/profile">Signup</Link>
            </label>
          </form>
        </div>
      </div>
    );
}

export default Login
