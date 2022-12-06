import React from "react";

function yCheck(props) {
    function validateText() {
        const field = document.querySelector("input[type='text']")
        const text = parseFloat(field.value)
        if (isNaN(text) || text < -5 || text > 5) {
            field.style.background = "red"
            props.setError("-5 <= y <= 5")
        } else {
            field.style.background = "green"
            props.state.setY(text)
            props.setError("")
        }
    }

    return (
        <div className="y-check">
            <label className="content-text">Y</label>
            <input type="text"  maxLength="10" onChange={validateText} placeholder="Число от -5 до 5"/>
        </div>
    )
}

export default yCheck