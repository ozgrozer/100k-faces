const random = (req, res) => {
  const result = {
    url: 'https://asd.com'
  }

  res.status(200).json(result)
}

module.exports = random
