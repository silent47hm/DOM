const textarea = document.getElementById("message");
const countDisplay = document.getElementById("char-count");

textarea.addEventListener("input", function() {
  const count = textarea.value.length;
  countDisplay.textContent = "Characters: " + count;
});
