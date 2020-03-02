const express = require('express')
const router = express.Router()
const Customer = require('../models/customer')

//All Customers Route
router.get('/', async (req, res) => {

    let searchOptions = {}

 if (req.query.name != null && req.query.name !== ''){
    searchOptions.name = new RegExp(req.query.name, 'i')
 }

    try {

        const customers = await Customer.find(searchOptions)
        res.render('customers/index', {customers,
            searchOptions: req.query})
        } 
        catch (err) {
    
        res.redirect('/')

        }

    

})

//New Customers Route
router.get('/new', (req, res) => {

    res.render('customers/new', {customer: new Customer() })

})


//Create Customers Route
router.post('/', async (req, res) => {
    const customer =  new Customer({
        name: req.body.name
    })
  
    try {
        const newCustomer = await customer.save()
        //res.redirect(`customers/${newCustomer.id}`)
        res.redirect('customers')
    } catch (err){ 
        res.render('customers/new', {
            customer,
            errorMessage:'Error creating Customer!'
        })
      
    }
})

module.exports = router;