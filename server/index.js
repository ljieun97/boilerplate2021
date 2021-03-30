const port = 5000
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require('body-parser');
var passport = require('passport');

const app = express()
const config = require('./config/dev')
const users = require('./api/users');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

mongoose
.connect(config.mongoURI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true, 
    useFindAndModify: false
    })
.then(()=>console.log('MongoDB Connected...'))
.catch(err=>console.log(err))

require('./config/passport')(passport);

app.use('/api/users', users);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))