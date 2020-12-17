const express = require('express')
const drawData = require('../data/draw.json')
const firebase = require('firebase/app')
require("firebase/database")    

const app = express()

app.use(express.json())

const router = express.Router()

const database = firebase.database()

//routes
router.get('/',(req,res)=>{
    database.ref('/orders').once('value').then(data =>{
        const list = data.val()
        res.send(list)
    })
})

//draw
router.get('/draw',(req,res)=>{
    res.send(drawData)
})

//authentication
//set ENV variables
router.get('/auth/:id/:pass',(req,res)=>{
    database.ref('/admin').once('value').then(data =>{
    req.params.id === data.val().user && req.params.pass === data.val().password?
    res.status(200).send('valid user')
    :res.status(401).send('Invalid!')
    })
})


module.exports = router