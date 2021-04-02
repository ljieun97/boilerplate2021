const express = require("express")
const app = express()

const mongoose = require("mongoose")
const config = require('./config/dev')
mongoose
.connect(config.mongoURI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true, 
    useFindAndModify: false
    })
.then(()=>console.log('MongoDB Connected...'))
.catch(err=>console.log(err))

app.get('/', (req, res) => res.send('Hello World!눈누난나'))

const port = 5000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))