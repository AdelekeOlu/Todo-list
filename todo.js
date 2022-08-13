// alert('Welcome')

let getBody = document.querySelector('#body');
// console.log(getBody);
let getHeader = document.querySelector('.nav h1');
// console.log(getHeader);
let getTheme = document.querySelector('.nav button');
// console.log(getTheme);
let getSearchInput = document.querySelector('.search input');
// console.log(getSearchInput);

// adding text to the header
getHeader.innerHTML += ' for august';
// console.log(getHeader.innerHTML);

// adding multiple Themes
getTheme.addEventListener('click', (e)=>{
    getBody.classList.toggle('dark');
    if(getBody.className==='dark'){
        getTheme.innerHTML = 'Dark Theme';
    }
    else{
        getTheme.innerHTML = 'Light Theme';
    }
})

// activating the search task mode
getSearchInput.addEventListener('keyup', () =>{
    let getSearchInputValue = getSearchInput.value;
    let lowerCaseInputs = String(getSearchInputValue).toLowerCase();
    let getAlltasksDiv = document.querySelectorAll('.taskbox div');
    console.log(getAlltasksDiv)
    getAlltasksDiv.forEach(x =>{
        if(x.firstElementChild.textContent.toLowerCase().indexOf(lowerCaseInputs) != -1){
            x.firstElementChild.parentElement.style.display = 'flex';
        }
        else{
            x.firstElementChild.parentElement.style.display = 'none';
        }
    })
})

// deleting task
let getTaskboxOl = document.querySelector('.taskbox ol')
getTaskboxOl.addEventListener('click', (e) =>{
    if(e.target.className ===  'delete'){
        e.target.parentElement.style.display = 'none';
    }
})
// console.log(getTaskboxOl)

// adding new task
let getAddTaskForm = document.querySelector('.addtask');
// console.log(getAddTaskForm);
let getAddTaskFormInput = document.querySelector('.addtask input');
// console.log(getAddTaskFormInput);

getAddTaskForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    // creating new tags
    let newDiv = document.createElement('div');
    let newH3 = document.createElement('h3');
    let newButton = document.createElement('button');

    // adding class where needed
    newDiv.classList.add('task');
    newButton.classList.add('delete');

    // adding a non-dynmaic text
    newButton.innerHTML = 'Delete';

    // rearanging
    newDiv.appendChild(newH3);
    newDiv.appendChild(newButton);

    // add input to newH3
    newH3.innerHTML = getAddTaskFormInput.value;
    newH3.style.textTransform = 'capitalize';

    // get task ol and append newDiv as it's child
    let addTasksToOl = document.querySelector('.taskbox ol');
    addTasksToOl.appendChild(newDiv);

    // reset Form
    getAddTaskForm.reset();
})