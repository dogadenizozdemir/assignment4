const taskManager = new TaskManager();
const loadTasksBtn = document.getElementById('loadTasksBtn');
const taskList = document.getElementById('taskList');
const statusMessage = document.getElementById('statusMessage');

function renderTasks() {
    taskList.innerHTML = '';
    
    taskManager.tasks.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        
        if (task.completed) {
            taskDiv.classList.add('completed');
        }

        const titleSpan = document.createElement('span');
        titleSpan.textContent = task.title;

        const toggleBtn = document.createElement('button');
        toggleBtn.textContent = 'Toggle';
        toggleBtn.addEventListener('click', () => {
            taskManager.toggleTask(task.id);
            renderTasks();
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            taskManager.removeTask(task.id);
            renderTasks();
        });

        taskDiv.appendChild(titleSpan);
        taskDiv.appendChild(toggleBtn);
        taskDiv.appendChild(deleteBtn);
        taskList.appendChild(taskDiv);
    });
}