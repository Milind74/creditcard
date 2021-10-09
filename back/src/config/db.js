const mongoose = require('mongoose');

const connect=()=>{
    return mongoose.connect("mongodb+srv://dig30786:Not5zQyeElDWuYBg@cluster0.mcj6r.mongodb.net/credit-card-db?retryWrites=true&w=majority");
}

module.exports=connect;