import React, { useState } from 'react';
import Base from '../core/Base'
import { Link } from 'react-router-dom';
import {  signUp } from '../auth/helper/index'

const Signup = () =>{
    
    const [ values, setValues ] = useState({
       name : '',
       email : '',
       password : '',
       error : '',
       success : false
   })

   const { name, email, password, error, success } = values;
   const handleChange = name => event => {
       setValues({...values, error : false, [name] : event.target.value})
   }

   const onSubmitChange = event => {
       event.preventDefault()       
       setValues({...values, error: false})
       signUp({ name, email, password})
       .then( data =>{
           
           if(data.error){
               setValues({...values, error: data.error, success: false})
           }
           else{
               setValues({
                   ...values,
                   name : '',
                   email : '',
                   password : '',
                   error : '',
                   success : true
               })
           }
       })
       .catch(err => console.log('Error in signup'))
   }

   const successMessage = () =>{
       return(
           
               <div className="row">
                   <div className="col-md-6 offset-sm-3 text-left">
                   <div className="alert alert-success"
            
            style={{ display : success ? "" : "none" }}
            >
            Registration success. Please <Link to="/signin">login here</Link>
            </div> 

            </div>
               
               </div>
               )
   }

   const errorMessage = () =>{

    return(
           
        <div className="row">
            <div className="col-md-6 offset-md-3 text-left"> 
            <div className="alert alert-danger"
     
     style={{ display : error ? "" : "none" }}
     >
     {error}
     </div> 

     </div> 
        
        </div>
        )
}

   

    

    const signupForm = () =>{
        return(

            <form className = "col-md-6 offset-sm-3 text-left" >
                <div className="from-group">
                    <label>Enter your name</label>
                    <input 
                    type="text"
                    className="form-control"
                    onChange = {handleChange('name')}
                    value = {name}
                    />
                </div>

                <div className="form-group">
                    <label>Enter your Email</label>
                    <input 
                    type="text"
                    className="form-control"
                    onChange = {handleChange('email')}
                    value = {email}
                    />
                </div>

                <div className="from-group">
                    <label>Enter your password</label>
                    <input type="password"
                    className = "form-control"
                    onChange = {handleChange('password')}
                    value = {password}
                    />

                </div>
                <br />
                <Link to='/signin'>Already a member!</Link>
                <button 
                className="btn btn-outline-success ml-5"
                  onClick = {onSubmitChange}
                >Register</button>

            </form>
        )
    }
        

    
    return(
        <div>
          <Base title="Please register here">  
          {successMessage()}
          {errorMessage()}
          {signupForm()}
          
          </Base>
        </div>
    )
}

export default Signup;