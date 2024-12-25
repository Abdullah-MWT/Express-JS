const express = require('express');
const router = express.Router();

// Definig the Blog Home Page
router.get('/', (req, res) => {
    res.send('Welcome to the Blog Home Page')
})


// Definig the Blog About Page
router.get('/about', (req, res) => {
    res.send('Welcome to the Blog About Page')
})

// Defining the Blog Dynamic Page
router.get('/:slug', (req, res) => {
    res.send(`Welcome to the Blog ${req.params.slug}`)
})

module.exports = router