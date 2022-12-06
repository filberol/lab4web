import React, {useEffect} from "react";
import {draw, drawHit} from "./Canvas.module";

function Canvas(props) {
    useEffect(() => {
        draw(props.currRadio)
        try {
            Array.from(props.points).forEach((point) => {
                if (point.coords[2] === props.currRadio) {
                    drawHit(point.coords[0], point.coords[1], point.coords[2], true)
                }
            })
        } catch (e) {}
    }, [props.currRadio, props.points])
    return (
        <div className="target glass canvas">
            <canvas id="graph" width="300" height="300"/>
        </div>
    )
}

export default Canvas