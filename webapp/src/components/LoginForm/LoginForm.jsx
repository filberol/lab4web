import React, {useState} from "react";
import "../styles/loginform.css"
import {requestServerUserAction, showPass, validateLength} from "./LoginForm.module";
import {useNavigate} from "react-router-dom";

function LoginForm() {
    const navigate = useNavigate()
    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")
    const [message, setMessage] = useState("");

    const handleRegistration = async (e) => {
        e.preventDefault()
        if (!validateLength(username, password, setMessage)) return
        requestServerUserAction(username, password, setMessage, "PUT", () => {
            setMessage("Регистрация успешна")
        })
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        if (!validateLength(username, password, setMessage)) return
        requestServerUserAction(username, password, setMessage, "POST", (result) => {
            localStorage.setItem("token", result.token)
            localStorage.setItem("login", username)
            navigate("/main")
        })
    }

    return (
        <div className="login-form">
            <div>{message}</div>
            <input
                id="login-f"
                type="text"
                placeholder="Логин"
                maxLength="30"
                className="header-block"
                onChange={e => setUsername(e.target.value)}
            />
            <input
                id="pass-f"
                type="password"
                placeholder="Пароль"
                maxLength="30"
                className="header-block"
                onChange={e => setPassword(e.target.value)}
            />
            <div>
                <input
                    id="show-c"
                    type="checkbox"
                    onClick={showPass}
                />
                <label htmlFor="show-c">Показать пароль</label>
            </div>
            <button className="header-block" onClick={handleLogin}>Войти</button>
            <button className="header-block" onClick={handleRegistration}>Зарегистрироваться</button>
        </div>
    )
}

export default LoginForm