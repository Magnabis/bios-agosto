function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const newTask = taskInput.value;

  if (newTask !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = newTask;
    taskList.appendChild(listItem);
    taskInput.value = "";
  }
}

taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
