import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import '../styles/Nav.css';
function Nav() {
    const [token,settoken]=useState(false);
    useEffect(()=>{
        const authchecker=async()=>{
            const res=await axios.post('/api/user/auth',{headers:{'Content-Type':'application/json'}})

            if(res.data.message==="User Authenticated"){
                settoken(true);
            }else{
                settoken(false);
            }
        }
        authchecker();
        console.log(token);
    },[token]);
    const handleClick=async()=>{
        const res=await axios.post('/api/user/logout');
        if (res.data.message==="User Logged Out"){
            settoken(false);
        }
    }

    return (
    <>
        <nav className="nav-container">
            <h1 className="logo">VLN</h1>
            <ul className="nav-links">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/products'>Products</Link></li>
            </ul>
            {token?<button className="btn1" onClick={()=>handleClick()}>Logout</button>:(<Link to='/login' className="btn1">Login</Link>)}
        </nav>
    </>
    )
}

export default Nav