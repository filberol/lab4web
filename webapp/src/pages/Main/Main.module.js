import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export function useRedirectNotKnown() {
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem("token") == null) {
            navigate("/")
        }
    })
}

export function requestHitResult(login, token, coords, method, onSuccess) {
    if (!(coords == null)) {
        for (let i in coords[0]) {
            let data = { username: login, token: token,
                cordX: coords[0][i],
                cordY: coords[1],
                cordR: coords[2]
            }
            requestServerHitAction(login, token, method, data, onSuccess)
        }
    } else {
        let data = {
            username: login, token: token, cordX: null, cordY: null, cordR: null
        }
        requestServerHitAction(login, token, method, data, onSuccess)
    }

}

function requestServerHitAction(login, token, method, data, onSuccess) {
    console.log(data)
    fetch("http://localhost:29950/hit-api", {
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
                onSuccess(result)
            },
            (error) => {
                console.log("Server did not respond properly")
                console.log(error)
            }
        )
}
