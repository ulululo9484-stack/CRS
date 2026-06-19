const input = document.getElementById("password");
const button = document.getElementById("accept");

button.addEventListener("click", () => {

    if (password.value.length < 4) {
        
        alert("Пароль должен состоять больше 4 символов!");

        return;

    }

    console.log("accept")
    alert("Пароль зарегистрирован")

})