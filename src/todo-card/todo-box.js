import editImg from '../menu_logos/edit.png';
import deleteImg from '../menu_logos/delete.png';

/*const linecontainer = document.createElement('div')
const todoBox = document.createElement('div');*/

const createTodoCard = function(obj){

let count = 0;

const todoBox = document.createElement('div');
todoBox.className = "todoBox";

const discription = document.createElement('div');
discription.className = 'disc';
discription.textContent = obj.title;

const toolbox = document.createElement('div')
toolbox.className = 'toolbox';

const checkbox = document.createElement('input')
checkbox.id = 'checkbox'
checkbox.type = 'checkbox'
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
 }
 else{
    --count;
    line.remove();
    linecontainer.style = 'opacity: 1;'
 }
})
const line = document.createElement('div')
line.className = 'line'


//
const linecontainer = document.createElement('div')
linecontainer.className = 'linecontainer'

const img1 = document.createElement('img')
img1.src =editImg;
img1.className = 'img l1'
img1.addEventListener('mouseenter', function(){
    editToolkit.style = 'background-color:gray;'
})
img1.addEventListener('mouseleave', function(){
    editToolkit.style = 'background-color:white;'
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

const checkToolkit = document.createElement('div')
checkToolkit.className = 'toolkit t1'
checkToolkit.textContent = 'check';


const editToolkit = document.createElement('div')
editToolkit.className = 'toolkit t2'
editToolkit.textContent = 'edit'

const deleteToolkit = document.createElement('div')
deleteToolkit.className = 'toolkit t3'
deleteToolkit.textContent = 'delete'



toolbox.appendChild(checkbox)
toolbox.appendChild(img1)
toolbox.appendChild(img2)

todoBox.appendChild(discription);
todoBox.appendChild(toolbox)


toolbox.appendChild(checkToolkit)
toolbox.appendChild(editToolkit)
toolbox.appendChild(deleteToolkit)

linecontainer.appendChild(todoBox);

return linecontainer;
}



export { createTodoCard};