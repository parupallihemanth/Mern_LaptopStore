const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const { v1 } = require('uuid')

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        maxlength : 64
    },

    email : {
        type : String,
        unique : true,
        required :  true
    },

    encry_password : {
        type : String,
        required : true
    },
    salt: String,

    purchases : {
        type : Array,
        default : []
    }
},
{
    timestamps : true
}
)

userSchema.virtual("password")
          .set(function(password){
              this._password = password
              this.salt = v1();
              this.encry_password = this.securePassword(password);
          })
          .get(function(){
              return this._password;
          })

userSchema.methods = {

    authenticate : function(plainPassword){
        return this.securePassword(plainPassword) === this.encry_password
    },

    securePassword : function(plainPassword){
        if(!plainPassword) return "";
        try{
            return crypto.createHmac('sha256', this.salt)
            .update(plainPassword)
            .digest('hex');
        }
        catch(err){
            return ""
        }
    }
}
module.exports = mongoose.model('User', userSchema)


