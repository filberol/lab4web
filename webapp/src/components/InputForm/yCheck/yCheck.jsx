import React from "react";

const validateNumber = async (e, setter) => {

}

function yCheck(props) {
    return (
        <div className="y-check">
            <label className="content-text">Y</label>
            <input type="text"  maxLength="10" onChange={validateNumber} placeholder="Число от -5 до 5"/>
        </div>
    )
}

export default yCheck