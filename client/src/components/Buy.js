import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import nodata from "../images/undraw_No_data_re_kwbl.png"
import Cards from './Cards';
import { fetchCartPosts,fetchPosts } from '../actions/userActions';
export default function Buy() {
    let posts={};
    let auth;
    let count=0;
    const dispatch= useDispatch();
    const reducer_name = useSelector(state=> state);
    posts=reducer_name.fetch;
    auth=reducer_name.Authenticated;
    posts.map((post)=>{
        if(post.creator!==auth.userName) count=count+1;
    })
    
    useEffect(()=>{
        dispatch(fetchPosts('admin'));
        dispatch(fetchCartPosts('admin'));
        console.log("Use Selector",posts);
        console.log("Buy userName",auth);
    },[])
    return (
        !count?<div className='container text-center p-3'>
            <div className='shadow border'><h1 className='text-center text-primary m-3'>No products to show</h1></div>
            <div className="h-30 w-30">
            <img className='img-fluid my-3'  src={nodata} alt="No posts" />
            </div>
            
        </div>:
        <div className="container">
            <div className="row py-4 g-3">
                {posts.map((post) => 
                         (post.creator===auth.userName?null:<Cards id={post._id} title={post.title}
                            price={post.price} category={post.category}
                            image={post.selectedFile} creator={post.creator} />)
                       
                )}
               
                
            </div>
        </div>
    )
}

