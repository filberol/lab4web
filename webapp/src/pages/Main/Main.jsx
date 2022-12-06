import React, {useEffect, useState} from "react";
import ContentContainer from "../../components/ContentContainer/ContentContainer";
import "../../components/styles/content-frame.css"
import "../../components/styles/logout.css"
import "../../components/styles/media.css"
import {Link} from "react-router-dom";
import ContentHandler from "../../components/ContentHandler/ContentHandler";
import Canvas from "../../components/Canvas/Canvas";
import InputForm from "../../components/InputForm/InputForm";
import {requestHitResult, useRedirectNotKnown} from "./Main.module";
import Table from "../../components/Table/Table";

function Main() {
    const login = localStorage.getItem("login")
    const token = localStorage.getItem("token")

    useRedirectNotKnown()

    const [hitArray, setHits] = useState([])
    const [currX, setX] = useState()
    const [currY, setY] = useState()
    const [currR, setR] = useState()

    useEffect(() => { sendGetAll() }, [])

    const deleteAuth = async () => {
        localStorage.removeItem("token")
        localStorage.removeItem("login")
    }

    function sendGetAll() {
        requestHitResult(login, token, null, "POST", (result) => {
            setHits(result.hits)
        })
    }

    function sendRequest() {
        requestHitResult(login, token, [currX, currY, currR], "PATCH", (result) => {
            setHits(result.hits)
        })
    }

    function sendDelete() {
        requestHitResult(login, token, null, "DELETE", (result) => {
            setHits(result.hits)
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
                <Table hits={hitArray} />
            </ContentContainer>
            <Link to="/" onClick={deleteAuth} className="content-text">На главную</Link>
        </ContentHandler>
    )
}

export default Main