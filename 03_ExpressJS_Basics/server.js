const express = require('express')
const app = express()
const port = 3000

// import router for blog and shop page
const blogs = require('./01routes/blogs');
const shop = require('./02routes/shop')

app.use(express.static('public'))
app.use('/blog', blogs)
app.use('/shop', shop)

app.get('/', (req, res) => {
    console.log('Hey! This is a get request');
  res.send('Hello World! And there we go')
})

app.post('/post', (req, res) => {
    console.log('Hey! This is a POST request');
  res.send('Hello World! And there we go with Post request')
})

// The same way you can test put and Delete requets
// app.put('/', (req, res) => {
//     console.log('Hey! This is a PUT request');
//   res.send('Hello World! And there we go with PUT request')
// })


// We can serve the HTML Files this way in Express JS
app.get('/index', (req, res) => {
    console.log('Our HTML File Served through Express-JS');
    res.sendFile('./templates/page.html', {root: __dirname})
    
})

// Now to aviod spreading all the pages/posts routing here we use Express-Routing in separate files and then connect it like: see on line 6-9

// Now the same way connecting the shop page in above lines

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})