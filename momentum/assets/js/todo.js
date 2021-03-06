const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector(".toDoInput");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];

function deleteToDos(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });

    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos))
}

function paintToDo(text) {
    // toDoList.innerHTML += `<ul>${text}</ul>`;
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteToDos);

    span.innerHTML = text;

    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    
    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId,
    };

    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    // let toDos = localStorage.getItem(TODOS_LS);
    // toDos += "," + currentValue;
    // localStorage.setItem(TODOS_LS, toDos);
    if(currentValue !== "") {
        paintToDo(currentValue);
    }
    toDoInput.value = "";
}   

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null && loadedToDos.length > 0) {    
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    } else {
        // localStorage.setItem(TODOS_LS, "");
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();