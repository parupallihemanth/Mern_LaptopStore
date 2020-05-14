import React from 'react';
import Navbar from './Navbar';
import '../styles.css';

const Base = ({
    title = "My title",
    className = "  row justify-content-center p-4",
    children
}) =>{

    return(
        <div>
                <Navbar />
        {/* Title  */}
        <div>
        <h1 className="text-center mt-3 ">{title}</h1>

        </div>

        {/* Children */}
       <div className={className}>{children}</div>

        {/* Footer */}
        <footer className="footer footer-styling mt-auto">
            <div className="container-fluid ">
            
            <div className="row"> 
            
            <div className= "col-4 ">
                <h5 className="text-white">Follow us on</h5>
            <ul className="list-group">
            <li className="text-white list-item ml-4">Facebook</li>
            <li className="text-white list-item ml-4">Twitter</li>
            <li className="text-white list-item ml-4">Instagram</li>
            </ul>
            </div>

            <div className="col-8 ">
            <h5 className="text-white text-center">For any questions, feel free to reach out!<span><h6>+1 7828821288</h6></span></h5>
            
            

           
            </div>

            </div>
            
            </div>

        </footer>


        </div>
        
    )

}


export default Base