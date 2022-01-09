const express = require("express");
const mongoose = require("mongoose");
const path = require("path")
// require ("./db/conn"); 
const User = require("./models/usermessage");
const hbs = require("hbs");
const dotenv = require("dotenv");
const { nextTick } = require("process");

dotenv.config({path:"./config.env"});

const app = express();
const port = process.env.PORT || 8000;




const DB = process.env.DATABASE;
console.log(DB)

// creating database
mongoose.connect(DB || "mongodb://localhost:27017/constructionssssss",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection successful");
}).catch((error)=>{
    console.log(error);
    console.log("No Connection");
});


const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');


app.use(express.urlencoded({extended:false}))
app.use(express.json());
// app.set('views', path.join(__dirname, '../views')) // Set the views directory
app.use(express.static(staticPath));
app.set('view engine', 'hbs'); // Set the template engine as hbs
app.set('views', templatePath); // Set the template engine as hbs
hbs.registerPartials(partialPath);


app.get('/', (req, res)=>{
    res.status(200).render('index');
});
app.get('/services', (req, res)=>{
    res.status(200).render('services');
});
app.get('/about', (req, res)=>{
    res.status(200).render('about');
});
app.get('/contact', (req, res)=>{
    res.status(200).render('contact');

});

app.post("/contact", (req, res)=>{
    const userData = new User(req.body);
    userData.save().then(()=>{
        res.status(201).render("index");
    }).catch((error)=>{
        res.status(400).send(error);
        console.log(error)
    });
});
app.get('*', (req, res)=>{
    res.render('')
});

app.listen(port, ()=>{
    console.log(`Server running at port no ${port}`)
});