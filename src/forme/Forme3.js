import closeicon from '../menu_logos/close.png';

const formContainer3 = document.createElement('div')
formContainer3.className = 'formeContainer'

const dis3 = document.createElement('input')
dis3.className = 'discription'
dis3.placeholder = 'Enter discription....'
dis3.style = 'padding-left:3px; font-style:italic;'

const title3 =document.createElement('input')
title3.className = 'title'
title3.placeholder = 'Enter title....'
title3.style = 'padding-left:3px; font-style:italic;'

const complete3 = document.createElement('select')
complete3.className = 'completeFeild'

const op1 = document.createElement('option')
op1.textContent = false
complete3.appendChild(op1)

const op2 = document.createElement('option')
op2.textContent = true
complete3.appendChild(op2)

const date3 = document.createElement('input')
date3.className = 'dateFeild'
date3.placeholder = 'Enter date DD/MM/YYYY....'
date3.style = 'padding-left:3px; font-style:italic;'

const btnContainer = document.createElement('div')
btnContainer.className = 'btncontainer'

const saveBtn = document.createElement('button')
saveBtn.className = 'addbtn'
saveBtn.textContent = 'Save'
/*saveBtn.addEventListener('click', function(){
    obj.title3 = title3.value;
    obj.dis3 = dis3.value;

})*/


const cancelBtn = document.createElement('button')
cancelBtn.className = 'cancelbtn'
cancelBtn.textContent = 'cancel'
cancelBtn.addEventListener('click', function(){
    formContainer3.remove();
})

const cancelIconF = document.createElement('img')
cancelIconF.src = closeicon;
cancelIconF.addEventListener('click', function(){
        formContainer3.remove();
})

const cancelCon = document.createElement('div');
cancelCon.className = 'cancelCon'
cancelCon.appendChild(cancelIconF)

btnContainer.appendChild(saveBtn)
btnContainer.appendChild(cancelBtn)

formContainer3.appendChild(cancelCon)
formContainer3.appendChild(title3)
formContainer3.appendChild(dis3)
formContainer3.appendChild(complete3)
formContainer3.appendChild(date3)
formContainer3.appendChild(btnContainer)

export {formContainer3, cancelIconF, saveBtn, cancelBtn, title3, dis3, complete3, date3};

