const mongoose = require("mongoose");

//post model
const studentSchema = new mongoose.Schema(
  {
    _id:{
      type:mongoose.Schema.Types.ObjectId,
      required:false,
      default:'616258688e4fba79fb7781f5'
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    pan: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    card_limit:{ 
      type: String,
      required: false,
      default:""
    },
    card_number:{ 
      type: String,
      required: false,
      default:""
    },
    expiry_date:{ 
      type: String,
      required: false,
      default:""
    },
    cvv:{ 
      type: String,
      required: false,
      default:""
    },
    status:{type:Number,required:false,default:0},
    card_apply:[{type:mongoose.Schema.Types.ObjectId,ref:"card",required:false}]
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Student = mongoose.model("student", studentSchema);

module.exports = Student;
