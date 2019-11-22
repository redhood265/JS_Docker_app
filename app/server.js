const app =  require('express').express()

app.get('/', (req, res) => res.send('Hello World!👏'))
app.listen(3000, () => console.log('Example app listening on port 3000!'))

