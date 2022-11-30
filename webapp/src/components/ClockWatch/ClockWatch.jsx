import {useEffect} from "react";
import "./ClockWatch.module"
import "../styles/style.css"

import {initValues, renderWatch} from "./ClockWatch.module.js";

function ClockWatch() {
    useEffect(() => {
        initValues()
        renderWatch()
        setInterval(() => {renderWatch()}, 1000)
    }, [])
  return (
      <div className="target glass canvas">
          <canvas id="graph" width="300" height="300"/>
      </div>
  )
}

export default ClockWatch;
