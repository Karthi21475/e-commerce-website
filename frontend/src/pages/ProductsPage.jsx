import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductItem from '../components/ProductItem';
import '../styles/productspage.css'
function ProductsPage() {

    const [products,setprods]=useState([]);
    
    const [arr,setarr]=useState([]);
    useEffect(()=>{
        const getproducts=async()=>{
            const res=await axios.get('http://localhost:3000/api/products');
            setarr(res.data);
            setprods(res.data);
        }
        getproducts();
    },[]);

    const handleOnChange=(e)=>{
        const value=e.target.value;
        const result=arr.filter(item=> item.productname.toLowerCase().includes(value.toLowerCase()))
        setprods(result);
    }

    return (
        <>
            <div>
                <input type="text" placeholder="Search" name="search" id="search" onChange={handleOnChange}/>
            </div>
            <div className="products-container">
                {products.map(item=>
                    <ProductItem productDetails={item} key={item._id} />
                )
                }
            </div>
        </>
    )
}

export default ProductsPage