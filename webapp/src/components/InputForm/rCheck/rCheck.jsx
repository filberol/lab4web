import React from "react";
import RadioButton from "./RadioButton/RadioButton";

function rCheck(props) {
    const rValues = [0.5, 1, 1.5, 2]

    function renewValues() {
        const radio = document.querySelector("input[type='radio']:checked").value
        props.state.setR(parseFloat(radio))
    }

    return (
        <div className="r-check">
            <label className="content-text">R</label>
            {rValues.map((rVal) =>
                <RadioButton val={rVal} key={rVal} onClick={renewValues}/>
            )}
        </div>
    )
}

export default rCheck