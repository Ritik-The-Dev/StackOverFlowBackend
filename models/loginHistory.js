import mongoose from "mongoose";
const date = new Date();
const month = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
const DateNow = `${date.getDate()}-${month[date.getMonth()]}-${date.getFullYear()}`
const loginHistorySchema = mongoose.Schema({
    email:{
        type:String
    },
    SystemInfo:{
        type:String
    },
    IPAdress:{
        type:String
    },
    loginAt:{
        type:String,
        default:DateNow
    }
});

export default mongoose.model("loginHistorySchema", loginHistorySchema);