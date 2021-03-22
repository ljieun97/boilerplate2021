import React from "react";
import {
    Link
  } from "react-router-dom";
import KakaoLoginButton from "./KakaoLoginButton";

import "./Navbar.css"

function Navbar() {
    return (
        <div>
            <ul className="navbar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/menu1">menu1</Link></li>
                <li><Link to="/menu2">menu2</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><button>sign in/sign up</button>
                <ul>
                        <li><KakaoLoginButton /></li>
                        <li><button>Kakao</button></li>
                    </ul></li>
            </ul>
        </div>
    );
}

export default Navbar;