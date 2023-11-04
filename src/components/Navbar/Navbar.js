
import { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
function Navbar(){
    const [clicked,setClicked]=useState(false);
    const Toggle=()=>{
        setClicked((prevInstance)=>!prevInstance);
    }
    return(
        <nav>
            
            
            <img src="assets/icons/logo.png" width="50px"/>
            <div>
                <ul id="Navbar-Menu-Container" className={clicked?"Navbar-Menu-Container active":"Navbar-Menu-Container"}>
                    <li><a href="/" className="active">Home</a></li>
                    <li><a href="/flip" className="active">Flip</a></li>
                    <li><a href="/check" className="active">Check</a></li>
                    <li><a href="/subscription" className="active">Subscription</a></li>
                   
                    {/* <li><a href="/deploy" className="active">Deploy</a></li>
                    <li><a href="/verify" className="active">Verify</a></li>
                    <li className="Login"><a href="#" className="active">Cruxer 🔐</a></li> */}
                </ul>
            </div>
            <div className="Navbar-Mobile-Menu-Container" onClick={Toggle}>
                <img className="Navbar-Mobile-Menu" src={clicked?"assets/icons/hamburger.png":"assets/icons/hamburger.png"}/>
            </div>
        </nav>
    )
}
export default Navbar;