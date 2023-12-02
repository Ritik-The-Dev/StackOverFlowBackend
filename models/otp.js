import mongoose from "mongoose";
const expireTime = ()=>{
    return new Date(Date.now() + 5 * 60 * 60 *1000);
}
// let expireTime = 
const otpSchema = mongoose.Schema({
    otp:{type:String},
    expire:{type:Date,
    default:Date.now(),
    expires:expireTime(),}
});

export default mongoose.model("otpSchema", otpSchema);