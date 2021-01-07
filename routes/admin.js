const express = require('express')
const firebase = require('firebase/app')
require("firebase/database")    

const app = express()
app.use(express.json())
const router = express.Router()
const database = firebase.database()


//login POST
router.get('/login',(req,res)=>{
    database.ref('/admin').once('value').then(data =>{
    req.query.id === data.val().user && req.query.pass === data.val().password?
    res.status(200).send('valid user')
    :res.status(401).send('Invalid!')
    })
})

//delieverd PUT


module.exports = router