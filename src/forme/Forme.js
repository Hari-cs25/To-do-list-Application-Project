import closeicon from "../menu_logos/close.png";

const formContainer = document.createElement("div");
formContainer.className = "formeContainer";

const discription = document.createElement("input");
discription.className = "discription";
discription.placeholder = "Enter discription....";
discription.style = "padding-left:3px; font-style:italic;";

const title = document.createElement("input");
title.className = "title";
title.placeholder = "Enter title....";
title.style = "padding-left:3px; font-style:italic;";

const complete = document.createElement("select");
complete.className = "completeFeild";

const op1 = document.createElement("option");
op1.textContent = false;
complete.appendChild(op1);

const op2 = document.createElement("option");
op2.textContent = true;
complete.appendChild(op2);

const date = document.createElement("input");
date.className = "dateFeild";
date.placeholder = "Enter date DD/MM/YYYY....";
date.style = "padding-left:3px; font-style:italic;";

const btnContainer = document.createElement("div");
btnContainer.className = "btncontainer";

const addbtn = document.createElement("button");
addbtn.className = "addbtn";
addbtn.textContent = "Save";

const cancelbtn = document.createElement("button");
cancelbtn.className = "cancelbtn";
cancelbtn.textContent = "cancel";

const cancelIconF = document.createElement("img");
cancelIconF.src = closeicon;

const cancelCon = document.createElement("div");
cancelCon.className = "cancelCon";
cancelCon.appendChild(cancelIconF);

const priarityoption = document.createElement("select");
priarityoption.placeholder = "Prioroty of Task";

const titleOption = document.createElement("option");
titleOption.textContent = "Select Priority";
titleOption.id = "titleOption";
titleOption.value = "";
titleOption.disabled = true;
titleOption.selected = true;
titleOption.hidden = true;
priarityoption.appendChild(titleOption);

const p1 = document.createElement("option");
const p2 = document.createElement("option");
const p3 = document.createElement("option");
p1.textContent = "High";
p2.textContent = "Medium";
p3.textContent = "Low";

priarityoption.appendChild(p1);
priarityoption.appendChild(p2);
priarityoption.appendChild(p3);

btnContainer.appendChild(addbtn);
btnContainer.appendChild(cancelbtn);

formContainer.appendChild(cancelCon);
formContainer.appendChild(title);
formContainer.appendChild(discription);
formContainer.appendChild(priarityoption);
formContainer.appendChild(complete);
formContainer.appendChild(date);
formContainer.appendChild(btnContainer);

//title.appendChild(cancelIconF);
export {
  formContainer,
  cancelIconF,
  addbtn,
  cancelbtn,
  title,
  discription,
  complete,
  date,
  priarityoption,
};
