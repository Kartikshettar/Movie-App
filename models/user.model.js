const mongoose = require('mongoose');
const {v4 : uuidv4} = require('uuid');
const uuid = uuidv4()
var Userschema = new mongoose.Schema({
    first_name : {
        type : String,
        required: true
    },
    last_name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    contact: {
        type: String,
        unique: true,
        trim: true,
        validate(value) {
          if (!validator.isMobilePhone(value)) {
            throw new Error('Phone is invalid');
          }
        },
      },
    gender : String,
    status : String,

    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
      },

    password: {
        type: String,
        trim: true,
        minlength: 7,
        validate(value) {
          if (value.toLowerCase().includes('password')) {
            throw new Error('Password should not contain word: password');
          }
        },
      },

      role: {
        type: String,
        default: 'guest',
        enum: ['guest', 'admin', 'superadmin'],
      },

      isLoggedIn : {type:Boolean}, 
      uuid:{type: String,
        format: uuid}, 

      accesstoken :{
        type:String,
        kid: "key_id_of_used_private_key"
      },
        
      coupens : [{  
        id:{type : Number , discountValve:Number}
      }],

      bookingRequests :[{
               reference_number :{type : Number},
               coupon_code :{type:Number},show_id: {type : Number},tickets:{type : Number},
           }]
  
})
module.exports = Userschema;