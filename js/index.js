window.addEventListener("load", function(e) {

    // Минус на плюс и наоборот
    document.querySelectorAll(".accordion button").forEach(function(btn) {
        btn.addEventListener("click", function(e) {
            var fa = btn.querySelector(".fa");
            if (fa.classList.contains("fa-plus-circle")) {
                fa.classList.remove("fa-plus-circle");
                fa.classList.add("fa-minus-circle");
            } else {
                fa.classList.remove("fa-minus-circle");
                fa.classList.add("fa-plus-circle");
            }
        });
    });

    // Галки у полей ввода
    function checkInput(e) {
        var fa = e.target.parentElement.getElementsByClassName("fa")[0];
        fa.style.display = (e.target.value.trim().length > 0)? "inline" : "none";
    }
    var name  = document.getElementById("name");
    var email = document.getElementById("email");
    name.addEventListener("keyup", checkInput);
    email.addEventListener("keyup", checkInput);
});
