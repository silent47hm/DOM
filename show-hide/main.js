const toggleTxt = document.getElementById("toggle-text");
const toggButtn = document.getElementById("toggle-btn");

toggButtn.addEventListener("click",function () {
    if (toggleTxt.style.display === "none") {
        toggleTxt.style.display = "block"
    } else {
        toggleTxt.style.display = "none"      
    } 
})