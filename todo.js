const list = document.querySelector("#list");
const listForm = document.querySelector("#listForm");

function todolist(todo) {
    const li = document.createElement("li");
    const div = document.createElement("div");
    const del_btn = document.createElement("button");

    div.innerText = todo;
    del_btn.innerText = "del";
    del_btn.addEventListener("click", function() {
        list.removeChild(li);
    });

    li.appendChild(div);
    li.appendChild(del_btn);
    list.appendChild(li);
}

listForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = e.target.querySelector("input");
    todolist(input.value);
    input.value = "";
});