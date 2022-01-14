const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const hbs = require("hbs");
const router = require("./router/auth");
const app = express();

dotenv.config({path:"./config.env"});
require ("./db/conn");
app.use(express.json());

const port = process.env.PORT || 8000;

const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');

app.use(express.urlencoded({extended:false}));

app.use(express.static(staticPath));
app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialPath);
app.use(router);

app.listen(port, ()=>{
    console.log(`Server running at port no ${port}`);
});