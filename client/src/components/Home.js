import React from 'react';
import { Link } from 'react-router-dom';
import shopping from "../images/undraw_empty_cart_co35.svg"
export default function Home() {
    return (
     <section className="bg-dark  text-light">
            <div className="row p-5">
            <div className='col d-md-flex justify-content-center text-start'>
            <div className='p-3  text-md-center '>
            <p className='fs-1 h1'>Become a <span className="text-warning">Olx Member</span></p>
                    <p className="fs-6 lead">OLX is the perfect online marketplace to buy and sell locally! No need to visit the flea market to find the best deals on pre-owned items! Here you’ll find a wide selection of like new products, from vintage clothes, antique furniture, used books, and retro games, to electronics, pre-owned cars and studios for rent!</p>
                    
                    <Link to="/login"><button className="shadow btn text-dark bg-light btn-lg rounded"> Sign in</button></Link>
            </div>  
                </div>
                <div className='col d-none d-sm-block px-5'>
            
                    <div className="container w-lg-50 w-sm-100 w-md-100">

                    <img src={shopping} alt="Image" className="img-fluid  w-md-10 w-sm-10 w-lg-10 w-xl-10"/>
                    </div>
                </div>
            </div>
        
     </section>
        
    )
}
