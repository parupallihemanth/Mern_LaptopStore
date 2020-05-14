import { API } from '../../backend';

// http://localhost:5001/api

// User signup
export const signUp = user => {
    // console.log(API)
    return fetch('http://localhost:5001/api/signup',{
        method : "POST",
        headers : {
            Accept : "application/json",
            "Content-Type" : "application/json"
        },

        body : JSON.stringify(user)
    })

    .then( response => {
        return response.json()
    })
    .catch( err => console.log(err))
}


// User signin

export const signIn = user => {

    return fetch('http://localhost:5001/api/signin', {
        method : 'POST',
        headers : {
            Accept : 'application/json',
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(user)
    })

    .then( response => {
        return response.json()
    })
    .catch( err => console.log(err))



}

// It is associated with signin, if user successfully signed we should the token

export const authenticate = ( data, next) =>{
    if( typeof window !== "undefined"){
        localStorage.setItem("jwt", JSON.stringify(data))
        next();
    }
}

// user Signout
export const signout = next =>{
    if(typeof window !== "undefined"){
        localStorage.removeItem("jwt");
        next(); 
    }

    fetch('http://localhost:5001/api/signout', {
        method : "GET"
    })
    .then( response => {
        return response.json()
    })
    .catch( err => console.log(err))
}

// everytime we should authenticate the user

export const isAuthenticated = () =>{
    if( typeof window == "undefined"){
        return false
    }
    if( localStorage.getItem("jwt")){
        return JSON.stringify(localStorage.getItem("jwt"))
    }
    else{
        return false
    }
}


 