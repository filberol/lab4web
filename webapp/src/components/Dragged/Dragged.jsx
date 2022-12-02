import React, {useEffect} from "react";
import "../styles/dragged.css"
import "./Dragged.module"
import {changeMode, loadMode, switchMode} from "./Dragged.module";

function Dragged() {
    useEffect(() => {
        loadMode()
        document.querySelector("#night-mode").addEventListener("click", () => {
            switchMode()
            changeMode()
        })
    }, [])
    return (
        <div id="night-mode" className="header-block">
            <div id="dragged"></div>
        </div>
    )
}

export default Dragged