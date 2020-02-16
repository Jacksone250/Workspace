// Task Object module 

let d = new Date();

// Task list 
let taskList = [
    {
        id: d.getTime(),
        title: 'Trash',
        completed: false
    },
    {
        id: d.getTime(),
        title: 'Homework',
        completed: true
    },
    {
        id: d.getTime(),
        title: 'Valentine', 
        completed: false
    }
];


// Task Object default exported 
export default class Tasks {

// Add task 
    addTask() {
        const t = new Date();
        const newId = t.getTime();
        const newTitle = document.querySelector('#newTitle').value;
        const newCompleted = false;
        
        console.log(newId);
        console.log(newTitle);
        console.log(newCompleted);

        taskList.push({id: newId, title: newTitle, completed: newCompleted});

        // I need to reload the tasklist currently I need to refresh the page to display the new task
        console.log(taskList.length)
        console.log(taskList[taskList.length - 1]);
        document.getElementById('to-do-list').appendChild(renderTask(taskList[taskList.length - 1]));
    }

// Remove task 
    removeTask(title){
        let task = this.getAllTasks().indexOf(title); 
        taskList.slice(task - 1, task + 1);
    }

// Update Task 
    updateTask() {

    }

// Complete Task 
    completeTask() {

    }

// Display Task 
    displayTask() {

    }

// Display all current Tasks 
    displayAllTasks() {
        taskList.forEach( task => {
            document.getElementById('to-do-list').appendChild(renderTask(task));
        });
    }

// Getters and Setters 
    // Returns all tasks
    getAllTasks() {
        return taskList;
    }

    // Returns one Task 
    getTask(taskTitle) {
        return this.getAllTasks().find(task => task.title === taskTitle);
    }

    // sets tasks title
    setTaskTitle(taskTitle, newTitle) {
        let task = this.getAllTasks().indexOf(taskTitle);
        task.title = newTitle;
    }

    // sets tasks description
    setTaskDescription(taskTitle, newDescription) {
        let task = this.getAllTasks().indexOf(taskTitle);
        task.description = newDescription;
    }
}



function renderTask(task) {
    const item = document.createElement('li');
    item.innerHTML = `<h3>${task.title}</h3>
    <button>X</button>`;
    return item;
}