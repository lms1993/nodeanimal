const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/user/:id', (req, res) => {
    const p = req.params
    const q = req.query
    console.log(p)
    console.log(p.id)
    console.log (q)
    console.log (q.q)


    res.send({"userid" : q.q})

})

app.get('/dog', (req, res) => {
    res.send({sound : 'mongmong'})
})
app.get('/cat', (req, res) => {
    res.send({sound : 'miaong'})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})