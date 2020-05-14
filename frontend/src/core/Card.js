import React from 'react';
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../auth/helper/index'


const Card = ({product}) =>{
    
    const cardTitle = product ? product.name : 'Laptop'
    const cardDescrption = product ? product.description : 'Best lapotop ever'
    const cardPrice = product ? product.price : '$500'


    // showAddToCart = () =>{

    // }
    return(
        // <div className= " card text-dark bg-white border border-info">
        //     <div className= " card-header lead ">{cardTitle}</div>
        //     <div className="card-body">

        //         {/* Image */}
        //         <p className="lead bg-success font-weight-normal text-wrap">
        //   {cardDescrption}
        // </p>
        // <p >$ {cardPrice}</p>
        //     </div>
        //     <div className="row">
        //   <div className="btn btn-block btn-outline-success mt-2 mb-2">Add to cart</div>
          
        // </div>

        // </div>
        <div>
            <div className="card" >
  {/* <img src="..." class="card-img-top" alt="..."> */}
  <div className="card-body">
    <h5 className="card-title">{cardTitle}</h5>
    <p className="card-text">{cardDescrption}</p>
    <h5>CAD<span class="badge badge-info">${cardPrice}</span></h5>
    
    
    <div className="btn btn-primary" >
        <Link to='/cart' className="text-white">Add to cart</Link>
        </div>
    
    
  </div>

</div>
        </div>

        

        
    )
}

export default Card;