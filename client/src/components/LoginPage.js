import React, {useState} from 'react'
import {withRouter} from 'react-router-dom'
import {Link} from "react-router-dom";
import {useDispatch} from 'react-redux'
import {loginUser} from '../_actions/user_action'
import "./LoginRegister.css"

function LoginPage(props) {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
}

  const onSubmit = (event) => {
    event.preventDefault();

    let body = {
      email: email,
      password: password
    }

    dispatch(loginUser(body))
      .then(response => {
          if(response.payload.loginSuccess) {
              props.history.push('/home')
          } else {
              alert('Error')
          }
      })
  }

  return (
      <div className="loginregister">
        <form onSubmit={onSubmit}>
            <div><input type="email" placeholder="이메일" value={email} onChange={onEmailHandler} className="loginregister__input"/></div>
            <div><input type="password" placeholder="비밀번호" value={password} onChange={onPasswordHandler} className="loginregister__input"/></div>
            <div><button type="submit" className="loginregister__button">로그인</button></div>
            <div><Link to="/sign_up"><button className="register__button">계정이 없으신가요?</button></Link></div>
        </form>
      </div>
    );
  }

export default withRouter(LoginPage)