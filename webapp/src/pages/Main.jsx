import React, {useEffect} from "react";
import Header from "../components/Header/Header";
import Description from "../components/Description/Description";
import ContentHandler from "../components/ContentHandler/ContentHandler";
import ContentContainer from "../components/ContentContainer/ContentContainer";
import "../components/styles/content-frame.css"
import {Link, useNavigate} from "react-router-dom";

function useRedirectNotKnown() {
    const navigate = useNavigate()
    useEffect(() => {
        navigate("/")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}

function Login() {
    useRedirectNotKnown()
    return (
        <div className="content-frame">
            <Header />
            <Description />
            <ContentHandler>
                <ContentContainer classes="target-container">
                    {/*Canvas*/}
                    {/*InputForm*/}
                </ContentContainer>
                <ContentContainer classes="table-container">
                    {/*Table*/}
                </ContentContainer>
            </ContentHandler>
            <Link to="/">На главную</Link>
        </div>
    )
}

export default Login