//packages
const express = require('express');



//express setup settings
const app=express();

//variables and arrays
const PORT = process.env.PORT || 5000;
const BACKEND_URL = process.env.BACKEND_URL || "http://127.0.0.1:5000";

//middleware
app.use(express.json());  //to use req.body etc

//listen port
app.listen(PORT, () => {
    console.log(`Server is running on ${BACKEND_URL}`);
});