import React from "react";
import {Link} from 'react-router-dom';

function Navbar(){
    return (
        <div class="navbar">
            <Link to="/" class="navbar__home">Home</Link>
            <Link to="/heart" class="navbar__heart">Heart</Link>
            <Link to="/profile" class="navbar__profile">Profile</Link>
        </div>
    );
}

export default Navbar;