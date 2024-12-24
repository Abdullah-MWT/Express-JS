const express = require('express')
const app = express()

port = 3000

app.use(express.static('public'))q

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    
})