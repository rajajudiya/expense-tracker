const mongoose =  require("mongoose");

const userSchema = mongoose.Schema({
    type: {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    amount : {
        type : Number,
        required : true
    },
    description :  String,
    date : {
        type: Date, 
        default: Date.now
    }

})

const tracker = mongoose.model("tracker", userSchema);

module.exports = tracker;