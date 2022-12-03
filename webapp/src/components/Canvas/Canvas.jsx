import React, {useEffect} from "react";
import {draw, drawHit} from "./Canvas.module";

function Canvas(props) {
    useEffect(() => {
        draw(1)
        props.points.forEach((point) => {
             if (point.r === props.currRadio) {
                 drawHit(point.x, point.y, point.r, true)
             }
        })
    }, [props.points])
    return (
        <div className="target glass canvas">
            <canvas id="graph" width="300" height="300"/>
        </div>
    )
}

export default Canvas