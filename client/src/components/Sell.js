import React, { useState } from 'react'
import FileBase from "react-file-base64";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../actions/userActions';
export default function Sell() {
    const [postData,setData]= useState({
        creator: "", title: "",category: "",price: "",selectedFile: ""
    });
   const navigate = useNavigate();
    const dispatch = useDispatch();
    function cleardetails(){
        setData({
            creator: "", title: "",category: "",price: "",selectedFile: ""
        })
    }
    async function SellItem(e){
        e.preventDefault();
        let userinfo=localStorage.getItem('userinfo');
        postData.creator=userinfo;
        console.log("userinfo -",userinfo);
        dispatch(addProduct(postData));
        cleardetails()
        navigate("/sell",{replace: true})
        // console.log(postData);
        
        
    }
    return (
        <div className='container p-5 w-5'>
        <div className="text-center">
            <h1>Add a Product to sell</h1>
        </div>
        <form onSubmit={SellItem}>
            <div className="mb-3">
            <label for="title" className="form-label">Name of Commodity</label>
            <input type="text" className="shadow bg-white rounded form-control" value={postData.title} id="title" placeholder="title" onChange={(e)=>{setData({...postData,title: e.target.value})}}/>
            </div>
            <div className="mb-3">
            <label for="category" className="form-label">Category</label>
            <input type="text" className="shadow bg-white rounded form-control" value={postData.category} id="category" placeholder="add a category" onChange={(e)=>{setData({...postData,category: e.target.value})}}/>
            </div>
            
            <div className="mb-4">
            <label for="price" className="form-label">Price</label>
            <input type="text" className="shadow bg-white rounded form-control" value={postData.price} id="price" placeholder='Price you want to Sell' onChange={(e)=>{setData({...postData,price: e.target.value})}}/>
            </div>
           <div className="mt-4">
           {/* <input
          type="file"
          accept=".png, .jpg, .jpeg"
          name="photo"
          onChange={(e) => setData({...postData,selectedFile: e.target.files[0]})}
        /> */}
           <FileBase  type="file"
                    multiple={false}
                    onDone={(e)=>{
                        console.log("Events file",e)
                        setData({...postData,selectedFile: e.base64})
                        e=null
                        console.log("Events file after",e)}
                        }
                        />
           </div>
          
                         <div className="text-center">
            <button type='submit' className="shadow rounded btn-lg btn-primary large m-3">SUBMIT</button>
            </div>
            </form>
        </div>

    )
}
