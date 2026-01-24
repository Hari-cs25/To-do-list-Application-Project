import{getTodo} from '../logic-module.js';
import{getTodos} from '../factory.js';
import addicon from '../menu_logos/add.png';
import createicon from '../menu_logos/createicon.png';
import closeicon from '../menu_logos/close.png';

const sidebar = document.createElement('div')
sidebar.className = 'sidebar'

const sidebarsec1 = document.createElement('div')
sidebarsec1.className = 'sec1'

const featuresTitle = document.createElement('div')
featuresTitle.className = 'featuresTitle'

const sidebarContents = document.createElement('div')
sidebarContents.className = 'sidebarContents'

sidebarsec1.appendChild(featuresTitle)
sidebarsec1.appendChild(sidebarContents)
sidebar.appendChild(sidebarsec1)// SEC1 APPENDED


const sidebarsec2= document.createElement('div')
sidebarsec2.className = 'sec2'

const projectstitle = document.createElement('div')
projectstitle.className = 'projectTitle'
projectstitle.textContent = 'projects'

const projectlist = document.createElement('div')
projectlist.className = 'projectList'

sidebarsec2.appendChild(projectstitle)
sidebarsec2.appendChild(projectlist)
sidebar.appendChild(sidebarsec2)// SEC2 APPENDED


const sec1add = document.createElement('div')
sec1add.className = 'addFeature'
const Addicon = document.createElement('img')
Addicon.src = addicon;
Addicon.className = 'addicon'
sec1add.appendChild(Addicon)
const txt1 = document.createElement('span')
txt1.textContent = 'Add To do'
sec1add.appendChild(txt1)

 const sec1createpro = document.createElement('div')
sec1createpro.className = 'createProject'
const projecticon = document.createElement('img')
projecticon.src = createicon;
projecticon.className = 'projecticon'
sec1createpro.appendChild(projecticon)
const txt2 = document.createElement('span')
txt2.textContent = 'New Project'
sec1createpro.appendChild(txt2)


sidebarContents.appendChild(sec1add)
sidebarContents.appendChild(sec1createpro)

// SIDEBAR SECTION 2

const ol =document.createElement('ol')
projectlist.appendChild(ol);
    console.log('started...')
    console.log(getTodos().length)

   export const renderProjects = (length)=>{

        for(let i=0;  i<length;  ++i){
         console.log('inside loop:',getTodos().length-2)

            const li = document.createElement('li')
            li.textContent = getTodo(i+1).title;
            ol.appendChild(li)
        }

    }
   
projectlist.appendChild(ol);

const txt3 = document.createElement('span')
txt3.textContent = 'To Do List'
featuresTitle.appendChild(txt3)

const cancelIcon = document.createElement('img')
cancelIcon.src = closeicon;
featuresTitle.appendChild(cancelIcon)

/*cancelIcon.addEventListener('click', function(){
    sidebar.remove();
    menuSection.appendChild(menuBtn);

})*/

export{sidebar, cancelIcon, sec1add, sec1createpro}; // to mainpage.js


