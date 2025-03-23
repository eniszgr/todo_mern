//packages
const express = require('express');
const {join} = require('path');
const dbs = require(join(__dirname, 'dbs.js'));

//db connect
dbs();

//express setup settings
const app=express();

//variables and arrays
const PORT = process.env.PORT || 5000;
const BACKEND_URL = process.env.BACKEND_URL || "http://127.0.0.1:5000";

//middleware
app.use(express.json());  //to use req.body etc


//include routers
const mainRouter = require(join(__dirname, 'routers', 'mainRouter.js'));
const addRouter = require(join(__dirname, 'routers', 'addRouter.js'));
const deleteRouter = require(join(__dirname, 'routers', 'deleteRouter.js'));
const editRouter = require(join(__dirname, 'routers', 'editRouter.js'));


//use of routers
app.use('/', mainRouter);
app.use('/add', addRouter);
app.use('/delete', deleteRouter);
app.use('/edit', editRouter);




//listen port
app.listen(PORT, () => {
    console.log(`Server is running on ${BACKEND_URL}`);
});