const mongoose =  require("mongoose");

const userSchema = mongoose.Schema({
    fullName: {
        type : String,
        required : true
    },
    userName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phoneno : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }

})

const tracker = mongoose.model("tracker", userSchema);

module.exports = tracker;