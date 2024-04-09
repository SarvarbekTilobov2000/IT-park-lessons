'use strict'

const tbody = document.querySelector('#tbody');
const taskTitle = document.querySelector('#task');
const add = document.querySelector('#add');


const BASE_URL = "http://localhost:2000";
//---------------GET----------------
async function getTask() {
    try {

        const response = await fetch(`${BASE_URL}/task`,);
        const result = await response.json();
        taskRender(result)

    } catch (err) {
        console.log(err);
    }
}
getTask()
//------------------ UI RENDER FUNCTION

function taskRender(task = []) {
    if (task.length) {
        task.forEach((el, index) => {

            const tr = document.createElement("tr");
            tr.innerHTML = ` 
       <td>${index + 1}</td>
      <td>${el.title}</td>
      <td> <button data-delete=${el.id} class="btn btn-danger del">Delate</button></td>
      <td> <button data-edit=${el.id} class="btn btn-info edit">Update</button></td>`;

            tbody.append(tr)
        })
    }
}
taskRender()

function addTask() {
    const val = taskTitle.value;

    const newTask = {
        id: Date.now(),
        title: val,
        status: false,
    }

    fetch(`${BASE_URL}/task`, {
        method: "POST",
        headers: {
            "Content-type": "aplication/json"
        },
        body: JSON.stringify(newTask)    /// backendga malumot json formatda yuborildi
    })


}

add.addEventListener('click', () => {
    addTask()
})
