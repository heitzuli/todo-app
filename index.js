const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.json(['Get some milk', 'Wash the dog'])
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
