import { qs, bindTouch } from "./utilities";


function saveTodo(todo){
    console.log('saved', toDo)
}

export default class Todo {
    constructor() {
        bindTouch('newTodoButton', this.addNewTodo.bind(this));
    }
    listTodos(){
        console.log('listed');
    }

    addNewTodo() {
        // get to do text 
        const todoText= qs('#newTodo');
        // save to db 
        saveTodo(todoText.value);
        // list to do 
        this.listTodos();
    }

    removeTodo(id) {

    }

    completeTodo(id){

    }

}