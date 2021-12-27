import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { setAuthTrue } from '../actions/userActions';
export default function User() {
    const {isAuth,userName} = useSelector(state=> state.Authenticated);
    const navigate= useNavigate();
    const dispatch = useDispatch();
    useEffect(()=>{
        console.log("Authenication -", userName);
    },[isAuth])
    return (
        <div className='container w-50 text-center p-3'>
            <h5>{userName.toUpperCase()}</h5>
            <button className="btn btn-dark btn-lg shadow rounded" onClick={()=>{ dispatch(setAuthTrue(null,false)); navigate('/home',{replace: true})}}>Logout</button>
        </div>
    )
}
