const User = require('../modals/user')
const jwt = require('jsonwebtoken')


// Signup

exports.signUp = ( req, res) => {

    const user = new User(req.body)
    user.save((err, user) =>{
        if(err ){
            return res.status(400).json({
                err : err
            })
        }

        return res.status(200).json({
            user : user.name,
            email : user.email,
            id : user._id

        })
    })


}


// Signin

exports.signIn = (req, res) =>{
    const {email, password} = req.body
    // console.log(email)
    // console.log(password)
    const user =  User.findOne({ email} ,(err, user) =>{
        if(!user){
            return res.status(400).json({
                err : "User not found"
            })
        }
        
        if(!user.authenticate(password)){
            
            return res.status(401).json({
                err : "Please check your password"
            })
        }

        
        
        // token creation
        const token =  jwt.sign({ _id : this._id}, process.env.SECRET)

        // keeping token into a cookie
        res.cookie('token', token, { expire: new Date() + 9999})

        // send response to frontend
        const { _id, name, email } = user;
        return res.json({ token, user: {_id, name, email}})
        

    })
}


// Signout

exports.signOut = (req, res) =>{
    res.clearCookie("token")
    res.json({
        msg : "user signout"
    });
};
