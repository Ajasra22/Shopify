import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
import { useNavigate  } from 'react-router-dom';
import { setAuthTrue ,fetchPosts ,fetchCartPosts } from '../actions/userActions';
export default function Login() {
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    async function loginUser(e){
        e.preventDefault();
        
       
        const response =await fetch('http://localhost:5000/login',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            }),
        })
        const data= await response.json();
        if(data.token){
            alert('Login Successful');
            // localStorage.setItem('userinfo',data.userName);
            // localStorage.setItem('isAuth',true);
            // const isAuth=localStorage.getItem('userinfo');
            //  console.log("isAuth" ,isAuth)
            dispatch(setAuthTrue(data.userName,true));
            dispatch(fetchPosts(data.userName));
            dispatch(fetchCartPosts(data.userName));
            navigate("/Sell",{replace: true});
            
        }
        else{
            alert('Please check username and password');
        }
        console.log(data);
        
    }
    return (
        <div className='container p-5 w-5'>
        <div className="text-center">
            <h1>Login</h1>
        </div>
        <form onSubmit={loginUser}>
            <div className="mb-3">
            <label for="email1" className="form-label">Email address</label>
            <input type="email" className="shadow bg-white rounded form-control" value={email} id="email1" placeholder="name@example.com" onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            
            <div className="mb-4">
            <label for="password1" className="form-label">Password</label>
            <input type="password" className="shadow bg-white rounded form-control" value={password} id="pasword1" onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <div className="text-center">
            <button type='submit' className="shadow rounded btn-lg btn-primary large mb-3">SUBMIT</button>
            </div>
            </form>
        </div>
    
)
}
