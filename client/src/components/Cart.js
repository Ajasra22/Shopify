import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import nodata from "../images/undraw_No_data_re_kwbl.png"
import Cartcard from './Cartcard'
export default function Cart() {
    let cartposts={}
    let count=0,auth;
    const reducer_name= useSelector(state=> state);
    cartposts=reducer_name.fetchcart;
    auth=reducer_name.Authenticated;
    cartposts.map((post)=>{
        if(post.creator===auth.userName) {count=count+1;}
    })
    
    useEffect(() => {
        console.log("Use Selector cart",cartposts);
        console.log("Auth: ", auth,"count:", count)
    }, [])
    return (
        !count?<div className='container text-center p-3'>
        <div className='shadow border'><h1 className='text-center text-primary m-3'>No item to show</h1></div>
        <div className="h-30 w-30">
        <img className='img-fluid my-3'  src={nodata} alt="No posts" />
        </div>
        
    </div>:
    <div className="container">
        <div className="row py-4 g-3">
            {cartposts.map((post) => 
                     (post.creator!==auth.userName?null:<Cartcard id={post._id} title={post.title}
                        price={post.price} category={post.category}
                        image={post.selectedFile} creator={post.creator} />)
                   
            )}
           
            
        </div>
    </div>
    )
}
