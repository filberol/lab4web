import React from "react";
import ClockWatch from "../components/ClockWatch/ClockWatch";
import Header from "../components/Header/Header";
import Description from "../components/Description/Description";
import ContentHandler from "../components/ContentHandler/ContentHandler";
import LoginForm from "../components/LoginForm/LoginForm";
import ContentContainer from "../components/ContentContainer/ContentContainer";
import "../components/styles/content-frame.css"

function Login() {
    return (
        <div className="content-frame">
            <Header />
            <Description />
            <ContentHandler>
                <ContentContainer classes="target-container">
                    <ClockWatch />
                    <LoginForm />
                </ContentContainer>
            </ContentHandler>
        </div>
    )
}

export default Login