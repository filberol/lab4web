import React from "react";

function ContentContainer({classes, ...props}) {
    return(
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default ContentContainer