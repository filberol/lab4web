import React from "react";
import RadioButton from "./RadioButton/RadioButton";

function rCheck(props) {
    const rValues = [0.5, 1, 1.5, 2]
    return (
        <div className="r-check">
            <label className="content-text">R</label>
            {rValues.map((rVal) =>
                <RadioButton val={rVal} key={rVal} />
            )}
        </div>
    )
}

export default rCheck