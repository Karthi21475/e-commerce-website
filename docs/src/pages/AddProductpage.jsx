import React from 'react';
import axios from 'axios';
function AddProductpage() {
    return (
    <>
        <div className="form-container">
            <form onSubmit={
                async(e)=>{
                e.preventDefault();
                const productname=e.target.productName.value;
                const productid=e.target.productId.value;
                const price=e.target.price.value;
                const imageUrl=e.target.ImageUrl.value;
                const formData ={productid,productname,price,imageUrl};
                const res=await axios.post('/api/product',formData,{headers:{'Content-Type':'application/json'}})
                if (res.data.message!=="Product Added") return alert(res.data.message)
            }}>
                <h1>Add Product</h1>
                <div className="input-cont">
                    <input type="text" name="productName" placeholder="Product Name"></input>
                </div>
                <div className="input-cont">
                    <input type="Number" name="productId" placeholder="Product Id"></input>
                </div>
                <div className="input-cont">
                    <input type="Number" name="price" placeholder="Price"></input>
                </div>
                <div className="input-cont">
                    <input type="text" name="ImageUrl" placeholder="ImageUrl"></input>
                </div>
                <button type="submit" className="btn1">Add Product</button>
            </form>
        </div>
    </>
    )
}

export default AddProductpage