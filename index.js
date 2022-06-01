const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8000
app.use(cors())


const url = 'https://www.theguardian.com/uk'

app.get('/', function (req, res) {
    res.json('Welcome to the webpage, friend')
})


app.get('/results', (req, res) => {
    axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []

       
        $('.fc-item__title', html).each(function() {
            const title = $(this).text()
            const url = $(this).find('a').attr('href')
            if (articles.includes(title) == false){
                    articles.push({
                        title,
                        url
                })
            }
        })
        res.json(articles)
    })
       
})









app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))


