import mongoose from "mongoose";
const date = new Date();
const month = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
const DateNow = `${date.getDate()}-${month[date.getMonth()]}-${date.getFullYear()}`
const VideoSchema = mongoose.Schema({
    videoUrl:{
        type:String
    },
    videoCaption:{
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

export default mongoose.model("VideoSchema", VideoSchema);