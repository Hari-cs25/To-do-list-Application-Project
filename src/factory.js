let currentId = 1;
 let todos = [];
 
const createTodo = function(id, title='Task 1', discription='no discription', complete=false, date='24/01/2026' ){

    const todo = { id, title, discription, complete, date};
    todos.push(todo);
    return todo;

}

function getTodos(){
    return todos;
}


export{createTodo, currentId, todos, getTodos};

