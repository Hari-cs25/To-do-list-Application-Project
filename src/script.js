import './styles.css';
import './mainPage.js';
import './styles-for-mainPage.css';
import {createTodoCard} from './todo-card/todo-box.js';
import  {createTodo, currentId, todos, getTodos} from './factory.js';
import {addTodo, getTodo, deleteTodo, clearMemory, toggleTodo, editTodo, getLength} from './logic-module.js';
import './todo-card/styles-for-todobox.css';
import './side-bar/styles-side-bar.css';
import {renderProjects} from './side-bar/side-bar.js';
import {sec1add, sec1createpro} from './side-bar/side-bar.js';
import {formContainer, cancelIconF, addbtn, cancelbtn, title, discription, complete, date} from './forme/Forme.js';
import {mainPage, contentSpace} from './mainPage.js';
import './forme/styles.css';


const todo1 = addTodo('learn react', )
const todo2 = addTodo('Learn webdevelopment')

renderProjects(getTodos().length);

const formeClear = ()=>{title.value = ''; discription.value = ''; date.value = '';}
// FORME BUTTONS

addbtn.addEventListener('click', function(){
   contentSpace.appendChild(createTodoCard(addTodo(title.value, discription.value, complete.value, date.value)))
   formeClear();

})

cancelIconF.addEventListener('click', function(){
   formContainer.remove();
})
cancelbtn.addEventListener('click', function(){
      formContainer.remove();
})



//SIDEBAR BUTTONS
sec1add.addEventListener('click', function(){
   mainPage.appendChild( formContainer );

})
