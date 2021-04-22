import axios from 'axios';
import React, {useState} from 'react';
import {withRouter} from 'react-router-dom'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import "./Navbar.css"

const Navbar = (props) => {
    const user = useSelector(state => state.user)

    const onClickLogout = () => {
        axios.get('/api/users/logout')
        .then(response => {
            if(response.data.success) {
                props.history.push("/sign_in")
                } else {
                    alert("Failed to logout")
                }
            })
    }

    if (user.userData && !user.userData.isAuth) {
        return (
            <div>
                <nav>
                    <ul className="navbar">
                        <li><Link to="/">LOGO</Link></li>
                        <li><Link to="/sign_in"><button>로그인</button></Link></li>
                    </ul>
                </nav>
            </div>
        )
    } else {
        return (
            <div>
                <nav>
                    <ul className="navbar">
                        <li><Link to="/home">LOGO</Link></li>
                        <li><button onClick={onClickLogout}>로그아웃</button></li>
                    </ul>
                </nav>
            </div>
            
            )
        }
    };

export default withRouter(Navbar)