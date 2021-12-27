import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [name,setName] =useState("");
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
    const navigate= useNavigate();
    const cleardata=()=>{
        setEmail("");
        setName("");
        setPassword("");
    }
    async function checkRegister(){
        const response =await fetch('http://localhost:5000/checkregister',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password
            }),
        })
        const data= await response.json();
        console.log("Check register",data);
    }
    async function registerUser(e){
        e.preventDefault();
        // checkRegister();
        const response =await fetch('http://localhost:5000/register',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password
            }),
        })
        const data= await response.json();
        console.log("Post data:",data);
        
        if(data.status==='ok'){
            alert("Registered Successfully");
            navigate("/login",{replace: true}); 
        }
        else{
            alert("Registration failed , Your email/ userName should be unique");
        }
        cleardata();
    }
    return (
        <div className='container p-5 w-5'>
        <div className="text-center">
            <h1>Register</h1>
        </div>
        <form onSubmit={registerUser}>
            <div className="mb-3">
            <label for="name1" className="form-label">Name</label>
            <input type="text" className="shadow bg-white rounded form-control" value={name} id="name1" placeholder="xyz" onChange={(e)=>{setName(e.target.value)}}/>
            </div>
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
