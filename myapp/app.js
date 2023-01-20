const express = require('express')
const app = express()
const port = 8080;

const list = [
    {
        id: 1,
        speed: 25,
        ready: true,
    },
    {
        id: 2,
        speed: 14,
        ready: false,
    },
    {
        id: 3,
        speed: 5,
        ready: true,
    },
]

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/test', (req, res)  => {
    res.send(list)
})
app.post('/test', (req, res) => {
    console.log(req.body)
    list.push(req.body)
    res.send(201)
})
app.put('/test', (req, res) => {
    list.pop(req.body)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
