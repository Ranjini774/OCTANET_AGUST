document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                <button class="toggle-btn">✓</button>
                ${taskText}
                <button class="delete-btn">×</button>
            `;

            // Toggle task completion
            li.querySelector('.toggle-btn').addEventListener('click', () => {
                li.classList.toggle('done');
            });

            // Delete task
            li.querySelector('.delete-btn').addEventListener('click', () => {
                li.remove();
            });

            taskList.appendChild(li);
            taskInput.value = '';
            taskInput.focus();
        }
    });

    // Add task with Enter key
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskBtn.click();
        }
    });
});
