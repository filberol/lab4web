import React from "react";
import ClockWatch from "../../components/ClockWatch/ClockWatch";
import LoginForm from "../../components/LoginForm/LoginForm";
import ContentContainer from "../../components/ContentContainer/ContentContainer";
import "../../components/styles/content-frame.css"
import ContentHandler from "../../components/ContentHandler/ContentHandler";

function Login() {
    return (
        <ContentHandler>
            <ContentContainer classes="target-container">
                <ClockWatch />
                <LoginForm />
            </ContentContainer>
        </ContentHandler>
    )
}

export default Login