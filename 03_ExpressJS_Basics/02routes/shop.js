const express = require('express');
const { route } = require('../01routes/blogs');
const router = express.Router();

// Defininig the Shop default page
router.get('/', (req, res) => {
   res.send('Shop Home Page is Here!')
})


// Defining the shop Add-to-Cart Page
router.get('/cart', (req, res) => {
  res.send('Shop Add-to-Cart Page is Here!')
})


// Definig the Shop Product Page
router.get('/product/:slug', (req, res) => {
    res.send(`Your Searched Product ${req.params.slug} is Here!`)
})

module.exports = router;