// --- user auth ---

//order POST
router.post('/order',(req,res)=>{
    //Validation
      const schema = Joi.object({
        customer: Joi.string().min(3).required(),
        data: Joi.string().min(3).required(),
        status: Joi.string().min(3).required(),
        id: Joi.string().min(3).required(),
        amount: Joi.number().required(),
      })
      const { error, value } = schema.validate(req.body)
      if(error){
      res.status(400).send(error.details[0].message)
      return;
      }
      //Database
      const ordersRef = database.ref('orders/')
      const order = ordersRef.push()
      order.set({
        customer: req.body.customer,
        data: req.body.data,
        amount: req.body.amount,
        id: order.key,
        status: false
      })
      res.send('Order Placed')
})


//order GET


// --- admin auth ---

//orders GET
router.get('/',(req,res)=>{
  database.ref('/orders').once('value').then(data =>{
      const list = data.val()
      res.send(list)
  })
})