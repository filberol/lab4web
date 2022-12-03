import React from "react";

function Checkbox(props, key) {
    const id = "checkX-" + props.val
    return (
        <div key={key}>
            <input type="checkbox" id={id} name="checkbox" value={props.val}/>
            <label htmlFor={id}>{props.val}</label>
        </div>
    )
}

export default Checkbox