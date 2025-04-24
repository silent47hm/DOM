const lists = document.getElementById("lists")
const addbton = document.getElementById("btn")

addbton.addEventListener("click",function () {
    const newitem = document.createElement("li");
    newitem.textContent = "New Item"
    lists.appendChild(newitem);
})