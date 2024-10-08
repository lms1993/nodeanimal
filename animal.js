const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')

app.use(cors())

app.get('/sound/:name', (req, res) => {
    const { name } = req.params
    console.log(name)

    if (name == "dog") {
        res.json({ 'sound': 'mongmong' })
    } else if (name == "cat") {
        res.json({ "sound": "miaong" })
    } else if (name == "pig") {
        res.json({ "sound": "gulgul" })

    } else {
        res.json({ "sound": "donknow" })
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})