const express = require('express')
const {validate, register} = require('../models/product')

const app = express()
app.use(express.json())
const router = express.Router()

//product GET
router.get('/products',(req,res)=>{
    database.ref('/products').once('value').then(data =>{
        const list = data.val()
        res.send(list)
    })
})


// ---- admin auth ----

//product POST

//product PUT
router.put('/draw',(req,res)=>{
    const edit = req.body
    database.ref('draw/').set(edit)
    res.send('Drawer updated!')
})


//product DELETE