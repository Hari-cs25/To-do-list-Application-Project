//import {linecontainer} from './todo-card/todo-box.js';
import hamburgerImg from './menu_logos/hb.png';
import {sidebar, cancelIcon, toolTip} from './side-bar/side-bar.js';
import {project, currentProjectIndex, renderProj, renderTodos, setCurrentProjectIndex, getCurrentProjectIndex} from './script.js';

const masterContainer = document.querySelector('#masterContainer');

const mainPage = document.createElement('div');
mainPage.className = 'mainPage';

const titleBar = document.createElement('div');
titleBar.className = 'titleBar';

const menuSection = document.createElement('div');
menuSection.className = 'menuSection';
const menuImg = document.createElement('img');
menuImg.className = 'menuImg';
menuImg.src = hamburgerImg;
const menuBtn = document.createElement('button')
menuBtn.appendChild(menuImg);

/*MENU BUTTON*/menuImg.addEventListener('click', function(){
    mainPage.appendChild(sidebar);
    mainPage.style = 'padding-left:200px;';
     tooltip.style = 'background-color: rgba(0, 0, 0, 0); color:rgba(0, 0, 0, 0);'
    menuBtn.remove()

})

function sideRun(){
       mainPage.appendChild(sidebar);
    mainPage.style = 'padding-left:200px;';
    menuBtn.remove()
}

const titleSection = document.createElement('div');
titleSection.className = 'titleSection';
titleSection.textContent = 'To Do List';


const contentSpace = document.createElement('div');
contentSpace.className = 'contentSpace';

masterContainer.appendChild(mainPage);//MAIN PAGE

mainPage.appendChild(titleBar);
titleBar.appendChild(menuSection);
menuSection.appendChild(menuBtn);
titleBar.appendChild(titleSection);

mainPage.appendChild(contentSpace);


cancelIcon.addEventListener('click', function(){
    sidebar.remove();
    mainPage.style = 'padding-left:2px;'
    menuSection.appendChild(menuBtn);
    toolTip.style = 'background-color: rgba(0, 0, 0, 0); color:rgba(0, 0, 0, 0);'

})

const tooltip = document.createElement('div');
tooltip.className = 'menuToolTip'
tooltip.textContent = 'menu'
mainPage.appendChild(tooltip)

menuImg.addEventListener('mouseenter', function(){
    tooltip.style = 'background-color:rgba(14, 14, 14, 0.98); color:white;'
})
menuImg.addEventListener('mouseout', function(){
    tooltip.style = 'background-color: rgba(0, 0, 0, 0); color:rgba(0, 0, 0, 0);'
})

const fixedClearBtn = document.createElement('button')
fixedClearBtn.textContent = 'Clear All Records'
fixedClearBtn.id = 'dataClearBtn'
fixedClearBtn.addEventListener('click', function(){

    localStorage.clear();
    project.splice(1, project.length-1 )
    setCurrentProjectIndex(0);
    project[currentProjectIndex].todos.length = 0;
    renderProj();
    renderTodos(project[currentProjectIndex]);
})

mainPage.appendChild(fixedClearBtn)


export{mainPage, contentSpace, titleSection, sideRun};
