import React from "react";

function RadioButton(props, key) {
    const id = "checkR-" + props.val
    return (
        <div key={key}>
            <input type="radio" id={id} name="radio" value={props.val} onClick={props.onClick}/>
            <label htmlFor={id}>{props.val}</label>
        </div>
    )
}

export default RadioButton