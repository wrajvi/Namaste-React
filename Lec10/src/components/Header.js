import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";

export const Title = () => (
    <img  className="logo" alt="logo" src="https://i.pinimg.com/474x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg"/>
    );
    
    const Header=() => {
        const [isloggedin,setIsloggedin]=useState(false);
        const isOnline=useOnline();
        return (
            <div className="header"> 
               
                <Title/>
                <div className="header-home">
                <ul>
                    <Link to="/">
                    <li>Home</li>
                    </Link>
                    <Link to="/about">
                    <li>About</li>
                    </Link>
                    <Link to="/contact">
                    <li>Contact</li>
                    </Link>
                    <Link to="/instamart">
                    <li>Instamart</li>
                    </Link>
                    
                    <li>Cart</li>
                </ul>
                </div>
               <h1>{isOnline?"☑️":"⭕"}</h1>;
               { isloggedin?<button onClick={()=> setIsloggedin(false)}>Logout</button>
               :<button onClick={()=>{setIsloggedin(true)}}>Login</button>}
            </div>
        );
    }

export default Header;