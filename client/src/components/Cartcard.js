import React from 'react'

export default function Cartcard(post) {
    return (
        <div className="d-flex justify-content-center col-6 col-xs-12 col-md-6 col-lg-3 py-2" style={{ "height": "25rem"}} key={post.id}>
        <div className="card h-70 rounded shadow border-2 " key={post.id} style={{"width": "28rem"}}>
                <img src={post.image}  className="card-img-top card-header card-image " style={{"height": "18rem", "maxHeight": "16rem"}} alt="File" />
                <div className="card-body" style={{ "height": "8rem"}}>
                    <h3 className="text-start"><span className='text-start'>
                    &#8377; {post.price}
                    </span> <br /><span className='fs-6 lead'>{post.title}</span> <br />
                    <span className='fs-6'>{post.category}</span>
                    <br />
                    </h3>
                </div>
              
        
                </div>
        </div>
    )
}


