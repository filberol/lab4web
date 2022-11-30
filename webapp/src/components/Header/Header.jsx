import React from "react";
import "../styles/style.css"
import "../styles/header.css"
import "../styles/night.css"

function Header() {
    return (
        <div className="header">
            <div className="nickname header-block">
                <img className="avatar"
                     src="https://sun9-43.userapi.com/s/v1/ig2/OvRRgO1KU9OwBb2mTRp5ywllEQ2peh8jbEOlAmgUqqDWyr3xaVRmu6v8sHpu3rdIg0m8MzluNQzpsXdFIOQn2le-.jpg?size=200x200&amp;quality=95&amp;crop=351,0,1816,1818&amp;ava=1"
                     alt="Avatar"/>
                <a href="https://t.me/filberol">
                    <p>@filberol</p>
                </a>
                <p>Vadim Mikhu</p>
            </div>
            <div className="buttons">
                <ul>
                    <li className="header-block">P32301</li>
                    <li className="header-block">#4578</li>
                </ul>
                <button className="menu-button header-block">
                    <img className="menu-button" src="/resources/img/menu-button.svg" alt="Menu"/>
                </button>
            </div>
        </div>
    )
}

export default Header