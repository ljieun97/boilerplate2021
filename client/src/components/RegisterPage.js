import React, {useState} from 'react'
import {withRouter} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {registerUser} from '../_actions/user_action'
import "./LoginRegister.css"

function RegisterPage(props) {
  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const onNameHandler = (event) => {
    setName(event.currentTarget.value)
  }
  const onEmailHandler = (event) => {
      setEmail(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
      setPassword(event.currentTarget.value)
  }

  const onConfirmPasswordHandler = (event) => {
      setConfirmPassword(event.currentTarget.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if(password !== confirmPassword) {
      return alert('비밀번호와 비밀번호확인은 같아야 합니다.')
    }

    let body = {
      email: email,
      name: name,
      password: password
    }

    dispatch(registerUser(body))
      .then(response => {
        if(response.payload.success) {
            props.history.push("/sign_in")
        } else {
            alert("Failed to sign up")
      }
    })
  }

  return (
    <div className="loginregister">
      <form onSubmit={onSubmit}>
          <div><input name="name" type="text" placeholder="이름" value={name} onChange={onNameHandler} className="loginregister__input"/></div>
          <div><input name="email" type="email" placeholder="이메일" value={email} onChange={onEmailHandler} className="loginregister__input"/></div>
          <div><input name="password" type="password" placeholder="비밀번호" value={password} onChange={onPasswordHandler} className="loginregister__input"/></div>
          <div><input name="confirmPassword" type="password" placeholder="비밀번호 확인" value={confirmPassword} onChange={onConfirmPasswordHandler} className="loginregister__input"/></div>
          <div><button type="submit" className="loginregister__button">계정 생성하기</button></div>
      </form>
    </div>
  );
}
export default withRouter(RegisterPage)