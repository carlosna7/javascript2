// função adicionar tarefa

function addTask() {

    // titulo da tarefa

    const taskTitle = document.querySelector("#task_title").value;

    if(taskTitle) {

        // clonar template

        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);

        // adiconar titulo

        newTask.querySelector(".task-title").textContent = taskTitle;

        // remover templates desnecessárias

        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        // adicionar tarefa na lista

        const list = document.querySelector("#task_list");

        list.appendChild(newTask);

        // adicionar o evento de remover

        const removeBtn = newTask.querySelector("#remove_btn").addEventListener("click", function() {
            removeTask(this);
        });

        // adicionar evento completar tarefa

        const doneBtn = newTask.querySelector("#done_btn").addEventListener("click", function() {
            completeTask(this);
        });

        // limpar texto

        document.querySelector("#task_title").value = "";

    }

}

// função remover tarefa

function removeTask(task) {

    task.parentNode.remove(true);

}

// função completar tarefa

function completeTask(task) {

    const taskToComplete = task.parentNode;

    taskToComplete.classList.toggle("done");

}

// evento adicionar tarefa

const addBtn = document.querySelector("#add_btn");

addBtn.addEventListener("click", function(ev) {

    ev.preventDefault();

    addTask();

});