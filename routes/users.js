const express = require('express')
const {validate, register} = require('../models/user')

const app = express()
app.use(express.json())
const router = express.Router()

//user POST
router.post('/users', async(req,res)=>{

    //Schema Validation  
    const { error, value } = await validate(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    //Unique Validation
    let unique = unique(req.body)
    if(unique) return res.status(400).send('Already Registered!')
          
    //Database
    await register(req.body).then(res.send('User Registered!'))
})


//login POST

  
//user orders GET


module.exports = router