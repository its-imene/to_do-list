function addTask() {
    const inputBox = document.getElementById('input-box');
    const listContainer = document.getElementById('list-container');

    if (inputBox.value.trim() !== '') {
        const newTask = document.createElement('li');
        newTask.textContent = inputBox.value;
        newTask.onclick = function () {
            toggleTask(this);
        };

        listContainer.appendChild(newTask);
        inputBox.value = '';
    }
}

function toggleTask(task) {
    task.classList.toggle('checked');
}

