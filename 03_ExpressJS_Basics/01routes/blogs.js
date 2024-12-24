const express = require('express');
const router = express.Router();

// Blog home page routing
router.get('/', (req, res) => {
   res.send('Blog Home Page is Here1')
})

 // Blog about page routing
 router.get('/about', (req, res) => {
    res.send('Blog About Page is Here2')
 })

 // Blog contact page routing
 router.get('/contact', (req, res) =>  {
    res.send('Blog contact Page is Here')
 })

 // Blog Dynamic/Custom page routing
 router.get('/blogpost/:slug', (req, res) =>{
     res.send(`Blog ${req.params.slug} Post is Here`)
 })

 module.exports = router