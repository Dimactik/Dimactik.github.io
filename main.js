const divTaskerHigh = document.getElementById("divTaskerHigh");
const divTaskerLow = document.getElementById("divTaskerLow");
const inputHigh = document.getElementById("inputHigh");
const inputLow = document.getElementById("inputLow");

let tasksArray = [];
let task;
let isHigh = false;

function add() {
    
    let radioButton = document.createElement("input");          //
    radioButton.className = "taskDoneRadio";                    //
    radioButton.setAttribute("type", "radio");                  // создание радио кнопки для таска.
    radioButton.setAttribute("name", Math.random());            //    генерация имени 
    radioButton.addEventListener("click", taskDone);            //    вешаем событие - таск выполнен.
    
    let crest = document.createElement("button");               //
    crest.className = "crest";                                  // создание крестика для таска.
    crest.innerHTML = "X";                                      //
    crest.addEventListener("click", remove);                    //    вешаем событие - удаление таска.

  

    if (!(inputHigh.value === "")) {                                            //Проверка таска на приоритет
        tasksArray.push( {name: inputHigh.value, priority: "high"} );           //   И добавление в массив с нужным параметром
        task = inputHigh.value;
        inputHigh.value = ""; 
        isHigh = true; 
    } else if (!(inputLow.value === "")) {
        tasksArray.push( {name: inputLow.value, priority: "low"} );
        task = inputLow.value;
        inputLow.value = "";
        isHigh = false; 
    } else { 
        alert ("Please enter your Task!");
        return;
    }
  
    let div = document.createElement("div");                    //
    div.className = "task";                                     // создание блока-таска.
    div.innerHTML = `<p class="taskText">${task}</p>`;          //   


    if(isHigh) {                                                //Взависимости от isHigh крепим таск к нужному диву
        divTaskerHigh.after(div);
    } 
    else {
        divTaskerLow.after(div);
    } 


    div.append(radioButton);
    div.append(crest);


    console.log("Add function done!");
}


function remove() {
    this.parentElement.remove();
}

function taskDone() {
    this.parentElement.classList.add("taskDone");
}