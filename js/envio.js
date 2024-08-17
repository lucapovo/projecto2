const FORM = document.querySelectorAll("form");

FORM.addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementsByClassName("input1").value;
    let poli = document.getElementById("politicas").checked;
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,6}$/;
    if (email.trim() === '') {
        alert('Per favor, introdueixi el seu e-mail.');
        email.style.borderColor = red;
        return;
    }
    if (!emailRegex.test(email)) {
        alert('Per favor, introdueixi un e-mail vàlid.');
        event.preventDefault();
    }
    if (!poli) {
        alert('Es necessari que accepti les polítiques de privacitat.')
        event.preventDefault();
    }
});