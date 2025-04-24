const input = document.getElementById("text-input");
const mirror = document.getElementById("mirror");

input.addEventListener("input", function() {
  mirror.textContent = input.value;
});
