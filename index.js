// require ("dotenv").config({path:"./.env"});
import Dotenv from "dotenv";
import connectDB from "./src/db/index.js";
import { app } from "./src/app.js";

Dotenv.config({ path: "./.env" });




connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is Running at http://localhost:${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("Mongodb connection failed",err);
})