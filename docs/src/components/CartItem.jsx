import React, { useState } from 'react'
import '../styles/cartitem.css'
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { useEffect } from 'react';
function CartItem({cartDetails}) {
    const [item,setitem]=useState([]);
    const {_id,productid,productname,price,image}=cartDetails;
    const {cartItems,DeletecartItem,UpdatecartItem}=useContext(CartContext);

    const handleDec=()=>{
        if (item.quantity===1){
            DeletecartItem(_id);
        }else{
            UpdatecartItem(_id,item.quantity-1);
        }
    }
    const handleInc=()=>{
        UpdatecartItem(_id,item.quantity+1)
    }

    useEffect(()=>{
        setitem(cartItems.find(item=>item.productid===productid));
    },[cartItems]);
    return (
        <>
            <div className='cartitem-cont'>
                <div className='cartitem-details'>
                    <img src={image} />
                    <div>
                        <h1>{productname}</h1>
                        <p>₹{price}</p>
                    </div>
                </div>
                <div className="quant-wrapper">
                    <button className="btn1" onClick={()=>handleDec()}>-</button>
                    <span>{item.quantity}</span>
                    <button className="btn1" onClick={()=>handleInc()}>+</button>
                </div>
            </div>
        </>
    )
}

export default CartItem