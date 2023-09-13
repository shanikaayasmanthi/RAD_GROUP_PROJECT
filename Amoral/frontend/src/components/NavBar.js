import {Component} from "react";
import "./NavBar.css";
import logo from "../Assets/logo.JPG";
import SignIn from "./SignIn";

class Navbar extends Component {
    state = {clicked:false};

    handleClick=()=>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){

        return (
            <>
                <nav className= 'nav'>
                    <img className="logo" src={logo} alt="This is a logo" />
                    <div>
                        <ul id="navbar"  className={this.state.clicked ? "#navbar active": "#navbar"}>
                            <li> <a className="active" href="index.html">HOME</a></li>
                            <li> <a href="index.html">SHOP LATEST</a></li>
                            <li> <a href="index.html">WOMEN'S</a></li>
                            <li> <a href="index.html">MENS</a></li>
                            <li> <a href="index.html">ABOUT US</a></li>
                        </ul>
                    </div>
                    
                     <div>
                        <ul id="navbarIcon">
                            <li><a href={SignIn} alt="Profile"><i id="profile" className="far fa-user-circle"></i></a></li>
                            <li><a href="index.html" alt="Add cart"><i id="cart" className="fa regular fa-cart-shopping"></i></a></li>
                        </ul>
                    </div>

                    <div id="mobile" onClick={this.handleClick}>
                        <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                </nav>
               

            </>
    
        );
    }
 
}

export default Navbar