import './styles.css';
import './mainPage.js';
import './styles-for-mainPage.css';
import {createTodoCard} from './todo-card/todo-box.js';
//import  {createTodo, currentId, todos, getTodos} from './factory.js';
import {addTodo, getTodo, deleteTodo, clearMemory, toggleTodo, editTodo, getLength} from './logic-module.js';
import './todo-card/styles-for-todobox.css';
import './side-bar/styles-side-bar.css';
import {renderProjects, ol, sidebar} from './side-bar/side-bar.js';
import {sec1add, sec1createpro} from './side-bar/side-bar.js';
import {formContainer, cancelIconF, addbtn, cancelbtn, title, discription, complete, date, priarityoption} from './forme/Forme.js';
import {mainPage, contentSpace, titleSection, sideRun} from './mainPage.js';
import './forme/styles.css';
import { formContainer2, savebtn} from './forme/Forme2.js';

// LOCAL STORAGE


export let currentProjectIndex;
export const setCurrentProjectIndex = (num)=>{currentProjectIndex=num};
export const getCurrentProjectIndex = (num)=>{currentProjectIndex};

export let project = [];

export const saveDatas = function(){
   localStorage.setItem("todoApp.Projects", JSON.stringify(project))
}

project = JSON.parse(localStorage.getItem("todoApp.Projects")) || [];
currentProjectIndex = JSON.parse(localStorage.getItem("todoApp.CurentProjectIndex")) ?? 0;


//   PROJECT
export const projectCreater = function(name){

   return {
           name,
             todos:[]
               }
}

// DEFAULT PROJECT

if(project.length === 0){

   project.push(projectCreater('learn to sing (Default)'))
   saveDatas();

}

export const getProjects = function(){return project;}

currentProjectIndex = 0;

const formeClear = ()=>{title.value = ''; discription.value = ''; date.value = '';}

export function renderProj(){
  ol.innerHTML = '';
project.forEach((item, index)=>{//RENDERING THE PROJECT

   const li=document.createElement('li')
   li.textContent = item.name;

   li.addEventListener('click', function(){
      renderTodos(item);
      currentProjectIndex = index;
      localStorage.setItem('todoApp.CurrentProjectIndex', currentProjectIndex);
      titleSection.textContent = project[currentProjectIndex].name;
   })
   ol.appendChild(li)

})
}

export const renderTodos = function(obj){

   if(obj.todos.length === 0){
      contentSpace.textContent = "No Tasks haven't added to this Project yet!"
   }
   else{
      contentSpace.innerHTML = '';
       obj.todos.forEach((item)=>{
     contentSpace.appendChild( createTodoCard(item) );
   })
   }

}

renderProj();

renderTodos(project[currentProjectIndex]);

titleSection.textContent = project[currentProjectIndex].name;

// FORME BUTTONS

addbtn.addEventListener('click', function(){
   contentSpace.textContent = '';
   console.log('in save btn ->',priarityoption.value )
   contentSpace.appendChild(createTodoCard(addTodo(project[currentProjectIndex], title.value, discription.value, complete.value, date.value, priarityoption.value)));
      console.log('priority that is added in the todos of the current project ->',project[currentProjectIndex].todos[project[currentProjectIndex].todos.length-1].priority )
   saveDatas();
   renderTodos(project[currentProjectIndex]);
   formContainer.remove();
   formeClear();
})

cancelIconF.addEventListener('click', function(){
   formContainer.remove();
})

cancelbtn.addEventListener('click', function(){
      formContainer.remove();
})

//SIDEBAR BUTTONS

/*Add To do*/sec1add.addEventListener('click', function(){
   mainPage.appendChild( formContainer );
})

/*New Project*/sec1createpro.addEventListener('click', function(){
   mainPage.appendChild(formContainer2)
})

sideRun();


