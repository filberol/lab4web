import React from "react";
import ClockWatch from "../components/ClockWatch/ClockWatch";
import LoginForm from "../components/LoginForm/LoginForm";
import ContentContainer from "../components/ContentContainer/ContentContainer";
import "../components/styles/content-frame.css"

function Login() {
    return (
        <ContentContainer classes="target-container">
            <ClockWatch />
            <LoginForm />
        </ContentContainer>
    )
}

export default Login