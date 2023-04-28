import React from "react";

function Menu() {

    const handleClick = (event) => {
        const target = event.target;
        const activeClass = 'active';
        const activeLinks = document.getElementsByClassName(activeClass);
        while (activeLinks.length) {
          activeLinks[0].classList.remove(activeClass);
        }
        target.classList.add(activeClass);        
    }

    return(
        <div className="menu" onClick={handleClick}>
            <div><a href="#home">HOME</a></div>
            <div><a href="#about">ABOUT US</a></div>
            <div><a href="#skill">SERVICE</a></div>
            <div><a href="#port">PORTFOILO</a></div>
            <div><a href="#contact">CONTACT</a></div>
        </div>

    )
}

export default Menu;