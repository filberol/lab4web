export function showPass() {
    const x = document.querySelector("#pass-f");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

export function requestReqistaration(login, password) {

}