const path = require('path')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'))

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const strPad = str => {
  return '000'.slice(str.toString().length) + str
}

const randomImageUrl = () => {
  const baseUrl = 'https://ozgrozer.github.io/100k-faces/'
  const firstFolder = '0'
  const secondFolder = randomInt(0, 9)
  const randomFile = strPad(randomInt(0, 999))
  const filename = `00${secondFolder}${randomFile}`
  const fullUrl = `${baseUrl}${firstFolder}/${secondFolder}/${filename}.jpg`
  const result = {
    url: fullUrl
  }
  return result
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/random-image', (req, res) => {
  const result = randomImageUrl()
  res.redirect(result.url)
})

app.get('/random-image-url', (req, res) => {
  const result = randomImageUrl()
  res.json(result)
})

const listener = app.listen(port, () => {
  console.log('Your app is listening on port http://localhost:' + listener.address().port)
})
