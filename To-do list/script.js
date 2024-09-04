document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');
    const deleteAllButton = document.getElementById('deleteAllButton');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" class="task-checkbox">
            <span class="task-text">${taskText}</span>
            <button class="delete-button">Delete</button>
        `;
        taskList.appendChild(li);

        taskInput.value = '';

        const checkbox = li.querySelector('.task-checkbox');
        checkbox.addEventListener('change', () => {
            const taskTextElement = li.querySelector('.task-text');
            if (checkbox.checked) {
                taskTextElement.classList.add('strikethrough');
            } else {
                taskTextElement.classList.remove('strikethrough');
            }
        });

        const deleteButton = li.querySelector('.delete-button');
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });
    });

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });

    deleteAllButton.addEventListener('click', () => {
        taskList.innerHTML = '';
    });
});
