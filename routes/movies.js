const express = require('express');
//const { redirect } = require("express/lib/response");
const router = express.Router();
const Movie = require('../models/Movie.model')

router.get('/movies',(req,res)=>{
    Movie.find().then((movies)=>{
        res.render('movies',{movies})
    })
})

router.get('/movies/:id',(req,res)=>{
    const id = req.params.id;
    Movie.findById(id)
    .then((movie)=>{
        res.render('movie-selected',movie)
    })
})

module.exports = router;
