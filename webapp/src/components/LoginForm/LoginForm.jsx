import React, {useState} from "react";

function LoginForm() {
    let [username, setUsername] = useState()
    let [password, setPassword] = useState()
    return (
        <div>
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
            <input
                id="show-c"
                type="checkbox"
                onClick={showPass}
            />
        </div>
    )
}

function showPass() {
    console.log("clicked")
    const x = document.querySelector("#pass-f");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}


export default LoginForm