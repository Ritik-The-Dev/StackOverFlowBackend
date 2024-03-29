import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/users.js";
import questionRoutes from "./routes/Questions.js";
import answerRoutes from "./routes/Answers.js";
import connectDB from "./connectMongoDb.js";
import {cloudinaryConnect} from "./ConnectCloudinary.js"
import fileUpload from "express-fileupload";
import useragent from 'express-useragent';
import requestIp from 'request-ip';
dotenv.config();
connectDB();
const app = express();
app.use(cookieParser());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(useragent.express());
app.use(requestIp.mw());

// app.use('/',(req, res) => {
//     res.send("This is a stack overflow clone API")
// })


//  fileUploadAllow
app.use(fileUpload({
		useTempFiles:true,
		tempFileDir:"/tmp",
	})
)

app.use("/user", userRoutes);
app.use("/questions", questionRoutes);
app.use("/answer", answerRoutes);

const PORT = process.env.PORT || 5000;

//connect to cloudinary
cloudinaryConnect();

app.listen(PORT,'0.0.0.0',() => {
  console.log(`server running on port ${PORT}`);
});
app.get("/",(req,res)=>{
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Api Routes</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    margin-top: 50px;
                }
                a {
                    display: inline-block;
                    padding: 10px 20px;
                    background-color: #007bff;
                    color: #fff;
                    text-decoration: none;
                    border-radius: 5px;
                }
                a:hover {
                    background-color: #0056b3;
                }
            </style>
        </head>
        <body>
            <a href="https://mern-stack-overflow-clone.netlify.app/">Click Me</a>
        </body>
        </html>
    `);
});
