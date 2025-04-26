const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", function () {
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.style.marginLeft = "10px";
  delBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);
  input.value = ""; // clear input
});
