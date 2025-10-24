// require ("dotenv").config({path:"./.env"});
import Dotenv from "dotenv";
import connectDB from "./src/db/index.js";

Dotenv.config({ path: "./.env" });




connectDB()