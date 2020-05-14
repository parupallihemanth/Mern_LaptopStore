import React, {useState} from 'react';
import Base from '../core/Base';
import {Link, Redirect} from 'react-router-dom'
import { signIn, isAuthenticated, authenticate } from '../auth/helper/index'
// import Navbar from '../core/Navbar'



const Singnin = () =>{
    
    const [ values, setValues ] = useState({
        email : '',
        password : '',
        error : '',
        loading: false,
    didRedirect: false
    })

    const {email, password, error, loading, didRedirect} = values;
    // const {user} = isAuthenticated()

    const handleChange = name => event => {
        setValues({ ...values, error:false, [name] : event.target.value})
    }

    const onSubmit = event =>{
        event.preventDefault();
        setValues({...values, error: false, loading: true})
        
        signIn( {email, password})
        .then( data =>{
            if(data.error){
                setValues({...values, error: data.error, success: false})
            }
            else{ authenticate( data, () => {
                setValues({
                    ...values,
                    email : '',
                    password : '',
                    didRedirect:true})

            })
            }
        })
        .catch(err => console.log('login failed'))

    }



    const performRedirect = () => {
        if(isAuthenticated()){
            return <Redirect to= '/' />
        }
    }



    const signinForm = () =>{
        return(

            <form className = "col-lg-6 offset-lg-3" >
                
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
                    onChange = {handleChange("password")}
                    value = {password}
                    />

                </div>
                <br />
                <Link to='/signup'>New member!</Link>
                <button className="btn btn-outline-success ml-5"
                onClick = {onSubmit}
                >Login</button>

            </form>
        )
    }

    return(
        <div>
            <Base title="Please login here">
            { signinForm()}
            {performRedirect()}
            </Base>
            
        </div>
    )

}

export default Singnin
