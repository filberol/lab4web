import React, {useState} from "react";
import XCheck from "./xCheck/xCheck";
import YCheck from "./yCheck/yCheck";
import RCheck from "./rCheck/rCheck";
import "../styles/inputform.css"

function validateProps(states, setMessage) {
    if (states.x != null && states.y != null && states.r != null) {
        return true
    }
    else {
        setMessage("Введите все данные")
        return false
    }
}

function InputForm(props) {
    const [errorMessage, setErrorMessage] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (validateProps(props.states, setErrorMessage)) {
            props.submitter()
        }
    }

    const handleDelete = async (e) => {
        e.preventDefault()
        if (validateProps(props.states, setErrorMessage)) {
            props.deleter()
        }
    }

    return (
        <div className="target glass">
            <form className="form">
                <fieldset>
                    <legend className="content-text bordered">Выбор значений</legend>
                    <XCheck state={{x: props.states.x, setX: props.setters.setX}}/>
                    <YCheck state={{y: props.states.y, setY: props.setters.setY}} setError={setErrorMessage}/>
                    <RCheck state={{r: props.states.r, setR: props.setters.setR}}/>
                </fieldset>
                <div className="hor-buttons">
                    <button onClick={handleSubmit} className="content-text bordered">Отправить</button>
                    <button onClick={handleDelete} className="content-text bordered">Сбросить</button>
                </div>
                <div>{errorMessage}</div>
            </form>
        </div>
    )
}

export default InputForm