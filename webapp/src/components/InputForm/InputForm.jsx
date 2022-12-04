import React from "react";
import XCheck from "./xCheck/xCheck";
import YCheck from "./yCheck/yCheck";
import RCheck from "./rCheck/rCheck";
import "../styles/inputform.css"

function InputForm(props) {

    const handleSubmit = async (e) => {
        e.preventDefault()
        props.submitter()
    }

    const handleDelete = async (e) => {
        e.preventDefault()
        props.deleter()
    }

    return (
        <div className="target glass">
            <form className="form">
                <fieldset>
                    <legend className="content-text bordered">Выбор значений</legend>
                    <XCheck state={{x: props.states.x, setX: props.setters.setX}}/>
                    <YCheck state={{y: props.states.y, setY: props.setters.setY}}/>
                    <RCheck state={{r: props.states.r, setR: props.setters.setR}}/>
                </fieldset>
                <button onClick={handleSubmit} className="content-text bordered">Отправить</button>
                <button onClick={handleDelete} className="content-text bordered">Сбросить</button>
            </form>
        </div>
    )
}

export default InputForm