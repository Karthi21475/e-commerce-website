import React from 'react'
import axios from 'axios';
import { useState } from 'react';
function Signin() {
  const [show,setshow]=useState(false);
  return (
    <>
      <div className="form-container">
      <form onSubmit={
        async(e)=>{
        e.preventDefault();
        const username = e.target.username.value;
        const password =e.target.password.value;
        const confirm_password =e.target.confirm_password.value;
        const email =e.target.email.value;
        if (password!==confirm_password){
          return alert("Password Does Not Match");
        }
        if (password.length>15 || password.length<6){
          return alert("password must consist of 6 to 15 characters only");
        }
        const formData = {username,password,email};
        const res=await axios.post('api/user/signup',formData,{
          headers:{
            'Content-Type':'application/json'
          }
        });
        console.log(res);
        if(res.data.message==="User Created"){
          console.log(res.data.message,formData);
          window.location.href='/login';
        }else{
          alert(res.data.message);
        }
      }}>
        <h1>Sign Up</h1>
        <div className="input-cont">
                  <input type="text" id="username" name="username" placeholder=" " required/>
                  <label htmlFor="username" >Username</label>
                </div>
        <div className="input-cont">
                  <input type="text" id="email" name="email" placeholder=" " required/>
                  <label htmlFor="email" >Email</label>
                </div>
        <div className="input-cont">
                  <input type={show ? "text":"password"} name="password" id="password" placeholder=" " required/>
                  <label htmlFor='password'>Password</label>
                  <p onClick={()=>{setshow(!show)}} htmlFor='password' >{!show?'Show':"Hide"}</p>
                </div>
        <div className="input-cont">
                  <input type={show ? "text":"password"} name="confirm_password" id="confirm_password" placeholder=" " required/>
                  <label htmlFor='confirm_password'>Password</label>
                </div>
        <button type='submit' className="btn1">Sign Up</button>
      </form>
        </div>
    </>
  )
}

export default Signin