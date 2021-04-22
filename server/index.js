//서버
const express = require("express")
const app = express()
const port = 5000

//디비
const config = require('./config/dev')
const mongoose = require("mongoose")
mongoose
.connect(config.mongoURI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true, 
    useFindAndModify: false
    })
.then(()=>console.log('MongoDB Connected...'))
.catch(err=>console.log(err))

//홈
app.get('/', (req, res) => res.send('Hello World!눈누난나'))

//회원가입
const { User } = require("./models/User")
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.post('/api/users/register', (req, res) => {
    const user = new User(req.body);
    user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err })
        return res.status(200).json({ success: true })
    })
})

//로그인
const cookieParser = require('cookie-parser')
app.use(cookieParser())
app.post('/api/users/login', (req, res) => {
    //요청된 이메일을 데이터베이스에서 찾고 
    User.findOne({ email: req.body.email }, (err, user) => {
        if(!user) {
            return res.json({
                loginSuccess: false, 
                message: "요청된 이메일에 해당하는 유저가 없습니다."
            })
        }
        //비밀번호가 맞는지 확인 후 
        user.comparePassword(req.body.password, (err, isMatch) => {
            if(!isMatch)
                return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다"})
            //생성된 토큰을 쿠키에 저장
            user.generateToken((err, user) => {
                if(err) return res.status(400).send(err);
                res.cookie("x_auth", user.token)
                    .status(200)
                    .json({ loginSuccess: true, useId: user._id })
            })
        })
    }) 
})

//인증
const { auth } = require("./auth")
app.get('/api/users/auth', auth, (req, res) => {
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 1,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        image: req.user.image
    })
})

//로그아웃
app.get('/api/users/logout', auth, (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id },
        { token: "" }
        , (err, user) => {
            if (err) return res.json({ success: false, err });
            return res.status(200).send({ 
                success: true 
            })
        })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))