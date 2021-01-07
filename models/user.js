const firebase = require('firebase/app')
require("firebase/database")    

const database = firebase.database()

function validateSchema(user) {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().min(3).required(),
        password: Joi.string().min(3).required(),
        id: Joi.string().min(3).required(),
        address: Joi.string().min(3).required(),
        phone: Joi.number().required(),
        pincode: Joi.number().required(),
        orders: Joi.string(),
      })
      return schema.validate(user)    
}

function uniqueUser(params) {
    
}

function addUser(params) {
    const userRef = database.ref('user/')
      const user = userRef.push()
      user.set({
        email: req.body.email,
        name: req.body.data,
        password: req.body.password,
        address: req.body.address,
        phone: req.body.phone,
        id: user.key,
        orders: null
      })
}

exports.validate = validateSchema;
exports.unique = uniqueUser;
exports.register = addUser;