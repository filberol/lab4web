import React, {useEffect} from "react";
import ContentContainer from "../components/ContentContainer/ContentContainer";
import "../components/styles/content-frame.css"
import {Link, useNavigate} from "react-router-dom";

function useRedirectNotKnown() {
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem("token") == null) {
            navigate("/")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}

function Login() {
    useRedirectNotKnown()
    return (
        <div>
            <ContentContainer classes="target-container">
                {/*Canvas*/}
                {/*InputForm*/}
            </ContentContainer>
            <ContentContainer classes="table-container">
                {/*Table*/}
            </ContentContainer>
            <Link to="/">На главную</Link>
        </div>
    )
}

export default Login