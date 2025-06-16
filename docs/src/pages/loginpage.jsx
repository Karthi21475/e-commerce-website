import React,{ useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import '../styles/login.css';
function Login() {
  const [show,setshow]=useState(false);
    return (
        <>
          <div className="form-container">
              <form onSubmit={
                async(e)=>{
                  e.preventDefault();
                  const username = e.target.username.value;
                const password =e.target.password.value;
                const formData = {username,password};
                const res=await axios.post('api/user/login',formData,{
                  headers:{
                    'Content-Type':'application/json'
                  }
                })
                if (res.data.message==="Login Success"){
                  console.log(res.message);
                  window.location.href="/";
                }else{
                  alert(res.data.message);
                }
              }}>
                <h1>Login</h1>
                <div className="input-cont">
                  <input type="text" id="username" name="username" placeholder=" " required/>
                  <label htmlFor="username" >Username</label>
                </div>
                <div className="input-cont">
                  <input type={show ? "text":"password"} name="password" id="password" placeholder=" " required/>
                  <label htmlFor='password'>Password</label>
                  <p onClick={()=>{setshow(!show)}} htmlFor='password' >{!show?'Show':"Hide"}</p>
                </div>
                <button className="btn1">Login</button>
                <p>Dont have an account yet?<Link to="/signup" className="navigateLink">Sign up?</Link></p>
              </form>
          </div>
        </>
    )
}

export default Login