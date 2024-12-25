const express = require('express')
const app = express()

const blogs = require('./routes/blog')

port = 3000

app.use('/blog', blogs)

// This is also on of the Middlewares
// app.use(express.static('public'))

// let's make our own Middleware
app.use((req, res, next) => {
    console.log('This is Middleware 1');
    next()       // Writing next is must if you want that it should listen to the remainnig Middlewares as well
})

// One more
app.use((req, res, next) => {
    console.log('This is Middleware 2');
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    
})