import mongoose from "mongoose";
const date = new Date();
const month = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
const DateNow = `${date.getDate()}-${month[date.getMonth()]}-${date.getFullYear()}`
const TweetSchema = mongoose.Schema({
    tweet:{
        type:String
    },
    postedBy:{
        type:String,
    },
    email:{
        type:String,
    },
    createAt:{
        type:String,
        default:DateNow
    }
});

export default mongoose.model("TweetSchema", TweetSchema);