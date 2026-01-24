import {createTodo, currentId, todos} from './factory.js';


 const addTodo = function(title='Task 1', discription='no discription', complete=false, date='24/01/2026'){
   let number = todos.length;
   return createTodo(++number, title, discription, complete, date);
}

 const getTodo = function(position){

    return todos[position-1];

}

const deleteTodo = function(id){

 return todos.splice(id-1, 1)[0];

}

const clearMemory = function (){
    
    todos.length = 0;
}

const toggleTodo = function(obj){
     obj.completed = !obj.completed;
 /*   if(obj.completed === true)
        obj.completed = false;
    else
        obj.completed = true;*/

}

const editTodo = function(todo, title = todo.title, completed = todo.completed){

    todo.title = title;
    todo.completed = completed;
}



export{addTodo, getTodo, deleteTodo, clearMemory, toggleTodo, editTodo};