import React, {useState, useEffect} from 'react';

import Base from './Base';
import Card from './Card'
import { getProducts} from '../core/helper/productapicalls'

const Home = () =>{

    const [ products, setProducts ] = useState([]);
    const [ error, setError] = useState(false)

    

    const loadAllProducts = () =>{
        getProducts()
        .then( data =>{
            if( data.err){
                setError(data.error)
            }
            else{
                setProducts(data)
            }
        })
        .catch(err => console.log("No products found"))
    }

    useEffect(() => {
        loadAllProducts();
      }, []);

return(
    <div>
    <Base title=" Our products"/>
    <div className="row">
        
        {products.map( (product, index) =>(
            <div key={index} className="col-4 md-2">
            <Card product={product}/>
            </div>
        ) )}
        
        

    </div>
    </div>
)

}

export default Home