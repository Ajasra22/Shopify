import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
export default function Navbar() {
  const {isAuth, userName} = useSelector(state=> state.Authenticated);
  console.log("UserName-", userName);
  const changeDisplay=()=>{
    return (
      isAuth?<div>
        <ul className="navbar-nav px-sm-1 me-auto mb-2 mb-lg-0">
           <li className="nav-item">
             <Link className='nav-link h6' to="/buy">Buy</Link>
           </li>
           <li className="nav-item">
             <Link className='nav-link h6' to="/sell">Sell</Link>
           </li>
           <li className="nav-item">
             <Link className='nav-link h6 ' to="/cart">Cart</Link>
           </li>
           <li>
           <Link className='h6 nav-link text-warning' to="/user">{userName.toUpperCase()}</Link>
           </li>
           </ul>
      </div>
       :<ul className="navbar-nav px-sm-3 me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className='nav-link h6' to="/">Home</Link>
        </li>
        <li>
        <Link className='nav-link h6' to="/login">Login</Link>
        </li>
        <li className="nav-item">
        <Link className='nav-link h6' to="/register">Register</Link>
        </li></ul>
     
    )
  }
    return (
        
            <nav className=" navbar navbar-expand-sm navbar-dark text-light bg-dark">
  <div className="container-fluid">
  <h2 className="h2">Shopify</h2>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav1" aria-controls="nav1" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  <div className=" collapse navbar-collapse" id="nav1">
      <div className='container d-flex justify-content-sm-end'>

  {changeDisplay()} 
      </div>
    </div>
   
    
  </div>
</nav>

    )
}
{/* <div className="container d-flex justify-content-end align-self-center navbar-nav me-auto mb-2 mb-lg-1"></div> */}