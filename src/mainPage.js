//import {linecontainer} from './todo-card/todo-box.js';
import hamburgerImg from './menu_logos/hb.png';
import {sidebar, cancelIcon} from './side-bar/side-bar.js';


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
    menuBtn.remove()

})

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

})

export{mainPage, contentSpace};
