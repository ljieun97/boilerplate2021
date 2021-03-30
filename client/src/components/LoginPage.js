import React, {useState} from 'react'
import "./LoginPage.css"

function LoginPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState(); 
  
  const onChange = (event) => {
    const {target: {name, value}} =event;
    if (name === "email") {
        setEmail(value);
    } else if (name === "password"){
        setPassword(value);
    }
  }

  const onSubmit = (event) => {
    event.preventDefault();
  }

  return (
      <div class="loginpage">
        <form>
            <div><input name="email" type="email" placeholder="이메일" value={email} onChange={onChange} class="loginpage__input"/></div>
            <div><input name="password" type="password" placeholder="비밀번호" value={password} onChange={onChange} class="loginpage__input"/></div>
            <div><button type="submit" onSubmit={onSubmit} class="loginpage__button">로그인</button></div>
        </form>
      </div>
    );
  }

export default LoginPage;