import React from "react";
import {
    Link
  } from "react-router-dom";

import "./Navigation.css"

function Navigation() {
    return (
        <div class="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/menu1">menu1</Link></li>
                <li><Link to="/menu2">menu2</Link></li>
                <li><Link to="/profile">Profile</Link>
                    <ul>
                        <li><button>logout</button></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;