'use strict';



const form = document.querySelector('.create-task-form');
const clearBtn = document.querySelector('.clear-tasks');
const taskInput = document.querySelector('.task-input');
const filter = document.querySelector('.filter-input');
const taskList = document.querySelector('.collection');

document.addEventListener('DOMContentLoaded', showPosts);
form.addEventListener('submit', addTask);
taskList.addEventListener('click', deleteTask);
clearBtn.addEventListener('click', removeAllTasks);
filter.addEventListener('keyup', filterTasks);

function showPosts() {
    let tasks;

    if (localStorage.getItem('tasks') !== null) {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    } else {
        tasks = []
    }

    tasks.forEach((task) => {
        const li = document.createElement('li');
        li.classList.add('task');
        li.innerHTML = task;

        const button = document.createElement('button');
        button.classList.add('remove-task');
        button.innerHTML = 'x';
        li.append(button);
        
        taskList.append(li);
    })
}

function addTask(event) {
    event.preventDefault();
    const value = taskInput.value;

    if (value.trim() === '') {
        return null;
    }

    const li = document.createElement('li');
    li.classList.add('task');
    li.innerHTML = value;

    const button = document.createElement('button');
    button.classList.add('remove-task');
    button.innerHTML = 'x';
    li.append(button);
    
    taskList.append(li);

    storeTasksInLocalStorage(value);
    taskInput.value = '';
}

function storeTasksInLocalStorage(task) {
    let tasks;

    if (localStorage.getItem('tasks') !== null) {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    } else {
        tasks = []
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteTask(event) {
    if (event.target.classList.contains('remove-task')) {
        if(confirm('Ви впевнені що хочете видалити цей елемент?')) {
            event.target.parentElement.remove();
            removeTaskFromLocalStorage(event.target.parentElement);
        }
    }
}

function removeTaskFromLocalStorage(taskElement) {
   let tasks;

   if (localStorage.getItem('tasks') !== null) {
       tasks = JSON.parse(localStorage.getItem('tasks'));
   } else {
       tasks = []
   }

    const filteredTasks = tasks.filter((task) => {
        if(task !== taskElement.firstChild.textContent) {
            return task
        }
    })

    localStorage.setItem('tasks', JSON.stringify(filteredTasks));
}

function removeAllTasks() {
    if(confirm('Ви впевнені що хочете видалити всі елементи?')) {
        taskList.innerHTML = '';
        removeAllTaskFromLocalStorage();
    }
}

function removeAllTaskFromLocalStorage() {
    localStorage.clear()
}

function filterTasks(event) {
    const itemList = document.querySelectorAll('.task');
    const searchQuery = event.target.value.toLowerCase();

    itemList.forEach((item) => {
        const itemValue = item.firstChild.textContent.toLowerCase();
        
        if (itemValue.includes(searchQuery)) {
            item.style.display = 'list-item';
        } else {
            item.style.display = 'none';
        }
    })
}