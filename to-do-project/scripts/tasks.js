// Task Object module 

let d = new Date();

// Task list 
let taskList = [{
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

        if (newTitle !== "") {
            taskList.push({
                id: newId,
                title: newTitle,
                completed: newCompleted
            });
            document.getElementById('to-do-list').appendChild(renderTask(taskList[taskList.length - 1]));
        } else {
            alert("Title Empty");
        }
    }

    // Remove task 
    removeTask() {
        // const title = string;
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
        // removes currentlist to replace with new list
        const currentList = document.getElementById('to-do-List');
        // console.log(currentList.children.length);
        if (currentList !== null && currentList.children.length > 0) {
            currentList.forEach(task => {
                console.log(task);
                document.getElementById('to-do-List').removeChild(task);
            })
        };

        // document.getElementById('to-do-List').removeChild(task)
        taskList.forEach(task => {
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
    <button id="delete">X</button>`;
    return item;
}