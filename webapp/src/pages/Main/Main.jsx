import React, {useState} from "react";
import ContentContainer from "../../components/ContentContainer/ContentContainer";
import "../../components/styles/content-frame.css"
import "../../components/styles/logout.css"
import {Link} from "react-router-dom";
import ContentHandler from "../../components/ContentHandler/ContentHandler";
import Canvas from "../../components/Canvas/Canvas";
import InputForm from "../../components/InputForm/InputForm";
import {requestHitResult, useRedirectNotKnown} from "./Main.module";



function Login() {
    const login = localStorage.getItem("login")
    const token = localStorage.getItem("token")

    useRedirectNotKnown()

    const [hitArray, setHits] = useState([])
    const [currX, setX] = useState()
    const [currY, setY] = useState()
    const [currR, setR] = useState()

    sendGetAll()

    const deleteAuth = async () => {
        localStorage.setItem("token", null)
        localStorage.setItem("login", null)
    }

    function sendGetAll() {
        requestHitResult(login, token, null, "POST", (result) => {
            setHits(result)
        })
    }

    function sendRequest() {
        requestHitResult(login, token, [currX, currY, currR], "PATCH", (result) => {
            setHits(result)
        })
    }

    function sendDelete() {
        requestHitResult(login, token, null, "DELETE", (result) => {
            setHits(result)
        })
    }

    return (
        <ContentHandler>
            <ContentContainer classes="target-container">
                <Canvas
                    points={hitArray}
                    currRadio={currR}
                    submitter={sendRequest}
                />
                <InputForm
                    states={{x: currX, y: currY, r: currR}}
                    setters={{setX: setX, setY: setY, setR: setR}}
                    submitter={sendRequest}
                    deleter={sendDelete}
                />
            </ContentContainer>
            <ContentContainer classes="table-container">
                {/*Table*/}
            </ContentContainer>
            <Link to="/" onClick={deleteAuth} className="content-text">На главную</Link>
        </ContentHandler>
    )
}

export default Login