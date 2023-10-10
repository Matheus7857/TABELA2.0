document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Simples validação de usuário e senha (substitua com sua lógica real)
        if (username === "admin" && password === "admin") {
            alert("Login bem-sucedido!");
            // Redirecionar para outra página ou executar ações após o login
        } else {
            alert("Usuário ou senha incorretos. Tente novamente.");
        }
    });
});
