import React from "react";
import Checkbox from "./Checkbox/Checkbox";

function xCheck(props) {
    const xValues = [-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2]

    function renewValues() {
        const values = Array.from(document.querySelectorAll("input[type='checkbox']:checked")).map((e) => {
            return parseFloat(e.value)
        })
        props.state.setX(values)
    }

    return (
        <div className="x-check">
            <label className="content-text">X</label>
            {xValues.map((xVal) =>
                <Checkbox val={xVal} key={xVal} onClick={renewValues}/>
            )}
        </div>
    )
}

export default xCheck