import editImg from '../menu_logos/edit.png';
import deleteImg from '../menu_logos/delete.png';
import { formContainer } from '../forme/Forme';
import { mainPage } from '../mainPage';
import {editTodo} from '../logic-module.js';
import {title, discription, complete, date} from '../forme/Forme.js';
import { project, currentProjectIndex, saveDatas } from '../script.js';
import {formContainer3, cancelIconF, saveBtn, cancelBtn, title3, dis3, complete3, date3} from '../forme/Forme3.js';


const createTodoCard = function(obj){

let count = 0;

const todoBox = document.createElement('div');
todoBox.className = "todoBox";
console.log('"priority ->"', obj.priority)
if(obj.priority === 'High'){
    todoBox.style = 'border-left:4px solid red';

}else if(obj.priority === 'Medium'){
     todoBox.style = 'border-left:4px solid yellow';
}else{
     todoBox.style = 'border-left:4px solid green';
}


const dis = document.createElement('div');
dis.className = 'disc';
dis.textContent = obj.title;

const toolbox = document.createElement('div')
toolbox.className = 'toolbox';

const checkbox = document.createElement('input');
checkbox.id = 'checkbox';
checkbox.type = 'checkbox';
checkbox.addEventListener('mouseenter', function(){
    checkToolkit.style = 'background-color:gray;'
})
checkbox.addEventListener('mouseleave', function(){
    checkToolkit.style = 'background-color:white;'
})

checkbox.addEventListener('click', function(){
 if(count<1){
   linecontainer.appendChild(line);
    linecontainer.style = 'opacity: 0.6;'
    ++count;
    obj.complete = true;
 }
 else{
    --count;
    line.remove();
    linecontainer.style = 'opacity: 1;';
        obj.complete = false;

 }
})
const line = document.createElement('div');
line.className = 'line';

const linecontainer = document.createElement('div');
linecontainer.className = 'linecontainer';

if(obj.complete === true){
    checkbox.checked = true;
    linecontainer.appendChild(line);
    linecontainer.style = 'opacity: 0.6;'
    ++count;
   
}

const img1 = document.createElement('img');
img1.src =editImg;
img1.className = 'img l1';
img1.addEventListener('mouseenter', function(){
    editToolkit.style = 'background-color:gray;'
})
img1.addEventListener('mouseleave', function(){
    editToolkit.style = 'background-color:white;'
})
//EVENT LISTENERS //EDIT BUTTON...
img1.addEventListener('click', function(){

    mainPage.appendChild(formContainer3);
    saveBtn.addEventListener('click', function(){
       obj= editTodo(obj, title3.value, dis3.value, complete3.value, date3.value)
       saveDatas();
       dis.textContent = obj.title;
       formContainer3.remove();
    })

})

const img2 = document.createElement('img')
img2.src= deleteImg;
img2.className = 'img l2'
img2.addEventListener('mouseenter', function(){
    deleteToolkit.style = 'background-color:gray;'
})
img2.addEventListener('mouseleave', function(){
    deleteToolkit.style = 'background-color:white;'
})

//EVENT LISTENERS
img2.addEventListener('click', function(){
    linecontainer.remove();
    project[currentProjectIndex].todos.splice(obj.index, 1);
    saveDatas();
})

const checkToolkit = document.createElement('div');
checkToolkit.className = 'toolkit t1';
checkToolkit.textContent = 'check';

const editToolkit = document.createElement('div');
editToolkit.className = 'toolkit t2';
editToolkit.textContent = 'edit';

const deleteToolkit = document.createElement('div');
deleteToolkit.className = 'toolkit t3';
deleteToolkit.textContent = 'delete';

toolbox.appendChild(checkbox);
toolbox.appendChild(img1);
toolbox.appendChild(img2);

todoBox.appendChild(dis);
todoBox.appendChild(toolbox);

toolbox.appendChild(checkToolkit);
toolbox.appendChild(editToolkit);
toolbox.appendChild(deleteToolkit);

linecontainer.appendChild(todoBox);

return linecontainer;

}

export { createTodoCard };