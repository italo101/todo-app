function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value;

  if (taskText === "") return;

  let li = document.createElement("li");
  li.textContent = taskText;

  // Click to remove task
  li.onclick = function () {
    li.remove();
  };

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
