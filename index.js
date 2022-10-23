const input = document.getElementById('newTaskInput');
const btnAddTask = document.getElementById('btnAddTask');
const ul = document.getElementById('tasks');

function btnDelete() {
  const btnApagar = document.createElement('button')
  btnApagar.setAttribute('class', 'apagar')
  btnApagar.innerText = "Apagar";

  return btnApagar
}

function createLi () {
  const btn = btnDelete()
  const li = document.createElement('li')
  li.innerText = input.value;
  li.classList.add("taskList")
  li.appendChild(btn)

  return li
}

btnAddTask.addEventListener('click', function() {
  if (input.value === "") {
    alert("Digite uma tarefa!")
    return
  }
  const newtask = createLi()
  ul.appendChild(newtask);
  input.value = ""
})

document.addEventListener('click', function(ev){
  const el = ev.target;
  if (el.classList.contains('apagar')) {
    el.parentElement.remove();
  }
})