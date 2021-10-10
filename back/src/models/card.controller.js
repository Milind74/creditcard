const mongoose = require("mongoose");

//post model
const cardSchema = new mongoose.Schema(
  {
     card_name:{type:String,required:true},
     card_fee:{type:String,required:true},
     card_score:{type:String,required:true},
     card_img:{type:String,required:true}
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const card = mongoose.model("card", cardSchema);

module.exports = card;
