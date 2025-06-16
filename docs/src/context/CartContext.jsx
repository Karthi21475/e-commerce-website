import { createContext,useEffect,useState } from 'react'
import axios from 'axios';

export const CartContext=createContext();

export const CartProvider=({children})=>{
    
    const [cartItems,setarr]=useState([]);

    const getCartItems=async()=>{
        const res=await axios.get('http://localhost:3000/api/cart');
        setarr(res.data);
        console.log("fetched it brooo")
    }

    const AddcartItem=async(productDetails)=>{
        console.log(productDetails)
        const res=await axios.post('/api/cart',productDetails,{headers:{'Content-Type':'application/json'}});
        getCartItems();
        
        if (res.data.message==="Item Added to Cart"){
            console.log("added it to the cart");
        }
    }
    const UpdatecartItem=async(id,quantity)=>{
        
        const Data={quantity}
        
        const res=await axios.put(`/api/cart/${id}`,Data,{headers:{'Content-Type':'application/json'}});
        getCartItems();
        
        if (res.data.message==="Item Updated in Cart"){
            console.log("Updated item in the cart");
        }
    }
    const DeletecartItem=async(id)=>{
        await axios.delete(`/api/cart/${id}`);
        getCartItems();
    }

    useEffect(()=>{
        getCartItems();
    },[])

    return(
        <CartContext.Provider value={{cartItems,AddcartItem,UpdatecartItem,DeletecartItem,getCartItems}}>
            {children}
        </CartContext.Provider>
    )
}
