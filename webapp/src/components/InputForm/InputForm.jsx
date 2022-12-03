import React from "react";
import XCheck from "./xCheck/xCheck";
import YCheck from "./yCheck/yCheck";
import RCheck from "./rCheck/rCheck";
import "../styles/inputform.css"

function InputForm(props) {
    return (
        <div className="target glass">
            <form className="form">
                <fieldset>
                    <legend className="content-text bordered">Выбор значений</legend>
                    <XCheck state={{x: props.states.x, setX: props.setters.setX}}/>
                    <YCheck state={{y: props.states.y, setY: props.setters.setY}}/>
                    <RCheck state={{r: props.states.r, setR: props.setters.setR}}/>
                </fieldset>
            </form>
        </div>
    )
}

export default InputForm