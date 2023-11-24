import express from "express";
import mongoose from "mongoose";
import cors from 'cors';

import GetDetails from "./routes/get-details.js";
import AddDetails from "./routes/add-details.js";

const app = express();
app.use(express.json());

// app.get();
app.use(cors());
app.use(GetDetails);
app.use(AddDetails);



// username = writetomailhimanshu
// password = eXstgW1kyk7f13hB
const mongoDBUrl = "mongodb+srv://writetomailhimanshu:eXstgW1kyk7f13hB@cluster0.hqevywi.mongodb.net/"



mongoose.connect(mongoDBUrl)
.then(()=>{
    app.listen(1000, ()=>{
        console.log("server has activated");
    });
})
.catch(error => {
    console.log(error);
    console.log("unable to connect mongoDB server")
});





