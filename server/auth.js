const {User} = require('./models/User')

//인증 처리
let auth = (req, res, next) => {
    //1 클라이언트에서 토큰을 가져옴
    let token = req.cookies.x_auth

    //2 토큰을 복호화하고 유저를 찾음
    User.findByToken(token, (err, user) => {
        if(err) throw err
        if(!user) return res.json({ isAuth: false, error: true })
        req.token = token
        req.user = user
        next()
    })

//3 유저가 있으면 인증, 없으면 인증안함
}

module.exports = { auth };