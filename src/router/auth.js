const express = require("express");
const router = express.Router();

const User = require("../models/usermessage");


router.get('/', (req, res)=>{
    res.status(200).render('index');
});
router.get('/services', (req, res)=>{
    res.status(200).render('services');
});
router.get('/about', (req, res)=>{
    res.status(200).render('about');
});
router.get('/contact', (req, res)=>{
    res.status(200).render('contact');
});

router.post("/contact", (req, res)=>{
    const userData = new User(req.body);
    userData.save().then(()=>{
        res.status(201).render("success");
    }).catch((error)=>{
        res.status(400).render("error");
        console.log(error)
    });
});
router.get('*', (req, res)=>{
    res.render('')
});

module.exports = router;