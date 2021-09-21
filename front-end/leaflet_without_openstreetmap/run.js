
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/h', (req, res) => {
  res.send('Yo World!\nok')
})

const path = require('path')
app.use('/public', express.static(path.join(__dirname, 'static')))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

