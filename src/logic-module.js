import {createTodo} from './factory.js';
import { discription } from './forme/Forme.js';


 const addTodo = function(obj, title='Task 1', discription='no discription', complete=false, date='24/01/2026', priority = 'High'){
    
  if(title === "")
    title = 'Undefined Task'
  if(priority === "")
    priority = 'High'

   return createTodo(obj, title, discription, complete, date, priority);
}

 const getTodo = function(obj, position){

    return obj.todos[position-1];

}
 
const deleteTodo = function(obj){

 return obj.todos.splice(id-1, 1)[0];

}

const clearMemory = function (obj){
    
    obj.todos.length = 0;
}

const toggleTodo = function(obj){

     obj.completed = !obj.completed;

}

const editTodo = function(todo, title = todo.title, discription=todo.discription, completed = todo.completed, date = todo.date, priority = todo.priority){
    if(title === "")
        title = todo.title;
    
    if(discription === "")
        discription = todo.discription;
    
    if(date === "")
        date = todo.date;

    todo.title = title;
    todo.completed = completed;
    todo.date = date;
    return todo;
}



export{addTodo, getTodo, deleteTodo, clearMemory, toggleTodo, editTodo};