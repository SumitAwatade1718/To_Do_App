function addTask() {
  let input = document.getElementById("task");
  let text = input.value;

  if (text === "") {
    alert("Enter task");
    return;
  }

  let li = document.createElement("li");

  li.innerHTML = text + " ";

  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.onclick = function () {
    editTask(li);
  };

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  document.getElementById("list").appendChild(li);

  input.value = "";
}
function editTask(li) {
  let currentText = li.firstChild.nodeValue;

  let newText = prompt("Edit task:", currentText);

  if (newText !== null && newText !== "") {
    li.firstChild.nodeValue = newText + " ";
  }
}
