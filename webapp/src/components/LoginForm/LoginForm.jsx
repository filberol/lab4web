import React, {useState} from "react";
import "../styles/loginform.css"
import {showPass} from "./LoginForm.module";

function LoginForm() {
    let [username, setUsername] = useState()
    let [password, setPassword] = useState()
    return (
        <div className="login-form">
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
            <button className="header-block">Войти</button>
            <button className="header-block">Зарегистрироваться</button>
        </div>
    )
}

export default LoginForm