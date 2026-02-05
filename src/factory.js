export const createTodo = function (
  obj,
  title,
  discription,
  complete,
  date,
  priority,
) {
  const index = obj.todos.length;
  const todo = { title, discription, complete, date, priority, index };
  obj.todos.push(todo);
  return todo;
};
