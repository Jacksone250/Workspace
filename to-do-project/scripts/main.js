// Welcome to Main! 
// Here I will call all of the functions needed to make my webpage functional

//imports
import Tasks from './tasks.js';

// task list 
    const myTasks = new Tasks();
    // display task list with items simple view 
    myTasks.displayAllTasks();
    // display single task with item's detail view

// submit and form 
    // listener on button 
     document.querySelector('#submitButton').addEventListener('click', myTasks.addTask);

// Remove Task 
    // listener on remove button
    document.querySelector('#delete').addEventListener('click', myTasks.removeTask);
