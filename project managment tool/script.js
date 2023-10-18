// function addTask() {
//     var taskInput = document.getElementById('taskInput');
//     var tasklist = document.getElementsById('tasklist');

//     if (taskInput.value.trim() !== '') {
//         var listItem = document.createElement('li');
//         listItem.textContent = taskInput.value;
//         listItem.innerHTML +=
//            `<button onclick="deleteTask(this)">Delete </button>
            
//             <button onclick="complteTask(this)">complteTask </button>`;

//         tasklist.appendChild(listItem);
//         taskInput.value = '';
//     }
// }

// function deleteTask(element){
//     var listItem=element.parentElement.listItem.remove();
// }
// function complteTask(element){
//     varlistItem=element.parentElement.listItem.remove();
//     listItem.style.textDecoration="line-through";

//     element.style.display='none'
// }
function addTask() {
    var taskInput = document.getElementById('taskInput');
    var tasklist = document.getElementById('tasklist');

    if (taskInput.value.trim() !== '') {
        var listItem = document.createElement('li');
        listItem.textContent = taskInput.value;
        listItem.innerHTML +=
           `<button onclick="deleteTask(this)">Delete</button>
            <button onclick="completeTask(this)">Complete</button>`;

        tasklist.appendChild(listItem);
        taskInput.value = '';
    }
}

function deleteTask(element) {
    var listItem = element.parentElement;
    listItem.remove();
}

function completeTask(element) {
    var listItem = element.parentElement;
    listItem.style.textDecoration = "line-through";
    element.style.display = 'none';
}
