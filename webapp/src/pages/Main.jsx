import React, {useEffect, useState} from "react";
import ContentContainer from "../components/ContentContainer/ContentContainer";
import "../components/styles/content-frame.css"
import "../components/styles/logout.css"
import {Link, useNavigate} from "react-router-dom";
import ContentHandler from "../components/ContentHandler/ContentHandler";
import Canvas from "../components/Canvas/Canvas";
import InputForm from "../components/InputForm/InputForm";

function useRedirectNotKnown() {
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem("token") == null) {
            navigate("/")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}

const deleteAuth = async () => {
    localStorage.setItem("token", null)
}

function Login() {
    useRedirectNotKnown()
    const [hitArray, setHits] = useState(["nothing"])

    const [currX, setX] = useState([0])
    const [currY, setY] = useState(0)
    const [currR, setR] = useState(1)

    return (
        <ContentHandler>
            <ContentContainer classes="target-container">
                <Canvas points={hitArray} currRadio={currR} setters={{setX: setX, setY: setY}}/>
                <InputForm states={{x: currX, y: currY, r: currR}} setters={{setX: setX, setY: setY, setR: setR}}/>
            </ContentContainer>
            <ContentContainer classes="table-container">
                {/*Table*/}
            </ContentContainer>
            <Link to="/" onClick={deleteAuth} className="content-text">На главную</Link>
        </ContentHandler>
    )
}

export default Login