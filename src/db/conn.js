const mongoose = require("mongoose");

const DB = process.env.DATABASE;

// creating database
mongoose.connect(DB).then(()=>{
    console.log("connection successful");
}).catch((error)=>{
    console.log(error);
    console.log("No Connection");
});
