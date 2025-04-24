const header = document.getElementById("heading");
const button = document.getElementById("bton");

button.addEventListener("click",function () {
    header.textContent = "successfully changed";
})