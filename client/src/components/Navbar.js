import React from "react";
import {
    Link
  } from "react-router-dom";

import "./Navbar.css"

function Navbar() {
    return (
        <div>
            <ul class="navbar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/menu1">menu1</Link></li>
                <li><Link to="/menu2">menu2</Link></li>
                <li><button>more</button>
                    <ul>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><button>logout</button></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;