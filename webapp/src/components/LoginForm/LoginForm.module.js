export function showPass() {
    const x = document.querySelector("#pass-f");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

export function requestServerAction(login, password, setErrorMessage, method, onSuccess) {
    let data = { username: login, password: password }
    fetch("http://localhost:29950/user-api", {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
                if (result.result === "error") {
                    setErrorMessage(result.errorMessage)
                    return false
                }
                if (result.result === "ok") {
                    onSuccess(result)
                    return true
                }
            },
            (error) => {
                console.log("Server did not respond properly")
                console.log(error)
                return false
            }
        )
    return false
}
