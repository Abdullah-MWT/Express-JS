const express = require('express')
const app = express()
const port = 3000

// setting Engine to ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let siteName = 'sastaShop';
    let searchContent = 'Search Here'
  res.render('index', {siteName: siteName, searchContent: searchContent})
})

// Now using ejs for rendering JS into HTML files
app.get('/blog/:slug', (req, res) => {
    let blogTitle = 'Writing Blogs';
    let blogContent = 'You should write bloPost every day or week or at least every month, and this will improve your creativity.'
    res.render('blog', {blogTitle: blogTitle, blogContent: blogContent})
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})