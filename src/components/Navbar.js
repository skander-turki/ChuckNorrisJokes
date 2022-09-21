import React from "react";
import "./Navbar.css";


function Navbar() {
    return(
        <div>
            <div class="bg-img">
                <div class="container_navbar">
                    <div class="topnav">
                        
                        <a href="#home">SO FUNKTIONIERT'S</a>
                        <a href="#news">SONDERANGEBOTE</a>
                        <div class="dropdown">
                            <button class="dropbtn"><img src="../assets/img/shape.png"  /> MEIN BEREICH
                            <img src="../assets/img2/path.png"  />
                            </button>
                            <div class="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                            </div>
                        </div>   
                    </div>     
                </div>
            </div>
        </div>  
    )
}
export default Navbar;
