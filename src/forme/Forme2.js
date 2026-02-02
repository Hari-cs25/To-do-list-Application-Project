import closeicon from '../menu_logos/close.png';
import { getProjects, projectCreater, renderProj, currentProjectIndex, renderTodos, project, setCurrentProjectIndex, saveDatas } from '../script';
import {mainPage, contentSpace, titleSection} from '../mainPage.js';

const formContainer2 = document.createElement('div')
formContainer2.className = 'formeContainer'
formContainer2.style = 'height:200px; top:200px;'


const nameFeild =document.createElement('input')
nameFeild.className = 'title'
nameFeild.placeholder = 'Enter Project Name....'
nameFeild.style = 'padding-left:3px; font-style:italic;'

const btnContainer2 = document.createElement('div')
btnContainer2.className = 'btncontainer'

const savebtn = document.createElement('button')
savebtn.className = 'addbtn'
savebtn.textContent = 'Save'

const cancelbtn = document.createElement('button')
cancelbtn.className = 'cancelbtn'
cancelbtn.textContent = 'cancel'

btnContainer2.appendChild(savebtn)
btnContainer2.appendChild(cancelbtn)

const cancelIconF = document.createElement('img')
cancelIconF.src = closeicon;

const cancelCon = document.createElement('div');
cancelCon.className = 'cancelCon'
cancelCon.style = 'cursor:pointer;'
cancelCon.appendChild(cancelIconF);


formContainer2.appendChild(cancelCon)
formContainer2.appendChild(nameFeild)
formContainer2.appendChild(btnContainer2)

cancelCon.addEventListener('click', function(){
    formContainer2.remove();
})

cancelbtn.addEventListener('click', function(){
        formContainer2.remove();
})

savebtn.addEventListener('click', function(){

    project.push(projectCreater(nameFeild.value))
    nameFeild.value = '';
    formContainer2.remove()
    console.log(getProjects());
    renderProj();
    const temp = project.length;
    setCurrentProjectIndex(temp-1)
    titleSection.textContent = project[currentProjectIndex].name;
    renderTodos(project[currentProjectIndex]);
    saveDatas();

})

export {formContainer2, savebtn};