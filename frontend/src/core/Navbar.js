import React, { Fragment } from 'react';
import '../styles.css';
import { Link, withRouter } from 'react-router-dom';
import { signout, isAuthenticated } from '../auth/helper/index'

const currentTab = ( history, path) =>{
    if( history.location.pathname === path){
        return { color: "#EEC213" };
    }
    else{
        return { color: "#FFFFFF" }; 
    }
}



const Navbar = ({ history}) => {

    return(

<nav className="navbar navbar-expand-lg navbar-color ">
   
        <li className="navbar-brand">
              <Link to='/' className=" text-white">Home</Link>

        </li>
  
    <ul className="navbar-nav ml-auto ">

      

      <li className="nav-item pr-2">
              <Link to="/cart" 
              className="nav-link text-white"
              
              >Cart</Link>

      </li>

      

      {
          !isAuthenticated() && (
              <Fragment>
                     <li className="nav-item pr-2">
              <Link to="/signup" 
              className="nav-link text-white"
              style={ currentTab(history,'/signup')}
              >Signup</Link>

      </li>

      <li className="nav-item pr-2">
              <Link to="/signin" 
              className="nav-link text-white"
              style={ currentTab(history,'/signup')}
              
              >Signin</Link>

      </li> 
              </Fragment>
          )
      }

      

      {
          isAuthenticated() &&  (

        <li className="nav-item pr-2">
              <span
              className="nav-link text-white"
              onClick={() =>{
                  signout( () =>{
                      history.push('/')
                  })
              }

              } 
              >
              Signout
              </span>
              
              
              

      </li> 

          )
      }
    </ul>
  
</nav>
    )

}


export default withRouter(Navbar);