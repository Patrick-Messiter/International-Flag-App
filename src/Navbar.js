import React from 'react';


function Navbar (props) {

    function togglingMode() {
        props.setToggleDarkMode(!props.toggleDarkMode)
    }

    return (
        <nav className={props.toggleDarkMode ? "DarkMinor Navbar" : "LightMinor Navbar"}>
            <div className='Navbar-inner'>
                <h1>Where in the world?</h1>
                {props.toggleDarkMode ? <h4 onClick={() => togglingMode()}><span>&#127774;</span> Light Mode</h4> :
                <h4 onClick={() => togglingMode()}><span>&#127769;</span> Dark Mode</h4>}
            </div>
        </nav>
    )
}

export {Navbar}