import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { fetchPosts,deletePost ,addtoCart, fetchCartPosts } from '../actions/userActions';
import "./cardstyle.css";
export default function Cards(post) {
    const dispatch = useDispatch();
    const navigate= useNavigate();
    const {userName} = useSelector(state=> state.Authenticated)
    const buyProduct=()=>{
        post.setChange("Sell");
        dispatch(addtoCart(post,userName));
        
        dispatch(deletePost(post.id));
        dispatch(fetchPosts(post.creator));
        dispatch(fetchCartPosts(post.creator));
        navigate("/buy",{replace: true})
        
    }

    return (
        <div className="d-flex justify-content-center col-6 col-xs-12 col-md-6 col-lg-3 py-2" style={{ "height": "27rem"}} key={post.id}>
        <div className="card h-70 rounded shadow border-2 " key={post.id} style={{"width": "28rem"}}>
                <img src={post.image}  className="card-img-top card-header card-image " style={{"height": "18rem"}} alt="File" />
                <div className="card-body" style={{ "height": "8rem"}}>
                    <h3 className="text-start"><span className='text-start'>
                    &#8377; {post.price}
                    </span> <br /><span className='fs-6 lead'>{post.title}</span> <br />
                    <div className="row">
                        <div className="col-6"> <span className='fs-6'>{post.category}</span></div>
                        <div className="col-6 text-end"><button className="btn btn-dark" onClick={buyProduct}>Buy</button></div>
                    </div>
                    </h3>
                    
                </div>
              

                </div>
        </div>
    )
}
