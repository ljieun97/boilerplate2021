import React, {useHistory} from 'react'
import KakaoLogin from "react-kakao-login";
const {Kakao} = window;

function KakaoLoginButton() {
    const history = useHistory()
    const kakaoLoginClickHandler = () => {
        Kakao.Auth.login({
            success: function (authObj) {
                fetch(`${API_URL_LOGIN}`, {
                method: "POST",
                body: JSON.stringify({
                    access_token: authObj.access_token,
                }),
            })
                .then(res => res.json())
                .then(res => {
                    localStorage.setItem("Kakao_token", res.access_token);
                    if (res.access_token) {
                        alert("환영합니다")
                        history.push("/")
                    }
                })
            },
            fail: function (err) {
                alert(JSON.stringify(err))
            },
        })
    }

    
    return (
        <div>
        <button onClick={kakaoLoginClickHandler}>카카오 로그인</button>
        </div>
    );
}

export default KakaoLoginButton;