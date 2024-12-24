import express from 'express'
const app = express()
const port = 3000

// Static Files
app.use(express.static('public'))

// By default, Express fires the get method on the root route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello AboutUs Page!')
  })

  app.get('/contact', (req, res) => {
    res.send('Hello ContactUs page!')
  })

  app.get('/blog', (req, res) => {
    res.send('Hello Blogs page!')
  })

  // Blog# 1
  app.get('/blog/intro-to-js', (req, res) => {
    res.send('Hello Blogs page!')
  })


  // Blog# 2
  app.get('/blog/intro-to-js', (req, res) => {
    res.send('Hello Blogs page!')
  })


  // Now if you want to write around 50,100 blogs then will you ctreate the same thing again and again! No, use :slug to do it!
  app.get('/blog/:slug', (req, res) => {
    res.send(`Hello ${req.params.slug} Blog`)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
