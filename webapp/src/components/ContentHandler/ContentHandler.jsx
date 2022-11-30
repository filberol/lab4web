import React from "react";
import "../styles/content.css"

function ContentHandler(props) {
    return(
        <div className="content">
            {props.children}
        </div>
    )
}

export default ContentHandler