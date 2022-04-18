document.querySelector("form").addEventListener("submit", handleSubmitFunc);
document.querySelector("ul").addEventListener("click", handleClickFunc);
document.getElementById("clearAll").addEventListener("click", deleteAllList);

function deleteAllList(e) {
  document.querySelector("ul").innerHTML = "";
}

function handleSubmitFunc(e) {
  e.preventDefault();
  console.log("Welcome1");

  let input = document.getElementById("txtInput");
  console.log(input.value);
  if (input.value != "") {
    addToDo(input.value);
  }
  input.value = "";
}

function addToDo(arg) {
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  //   <button class='btnDelete' name='btnDelete' id='btnDelete'>     <i class='fas fa-trash'>         </i></button>
  li.innerHTML = `
    <span class='todo'>${arg}</span>

  `;
  li.classList.add("todoList");
  ul.appendChild(li);
}

function handleClickFunc(e) {
  console.log("Name Is: " + e.target.name);
  //   if (e.target.name == "btnCheck") checkToDo(e);
  if (e.target.name == "btnDelete") deleteToDo(e);
}

function deleteToDo(e) {
  console.log("deleteToDo");
}
