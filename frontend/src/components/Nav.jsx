import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import '../styles/Nav.css';
function Nav() {
    const [token,settoken]=useState("");
    useEffect(()=>{
        settoken(Cookies.get('token'));
        console.log(token);
    },[]);

    return (
    <>
        <nav className="nav-container">
            <h1 className="logo">VLN</h1>
            <ul className="nav-links">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/products'>Products</Link></li>
            </ul>
            {token?null:(<Link to='/login' className="btn1">Login</Link>)}
        </nav>
    </>
    )
}

export default Nav