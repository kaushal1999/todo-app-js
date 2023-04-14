let text = document.querySelector("#box");
let list = document.querySelector("#list_item");

function markAsDone()  {
    this.classList.add("deleted");
    this.removeEventListener("click", del);
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = "true";
    checkBox.style.width="20%"
    this.prepend(checkBox);
    this.removeEventListener("click", markAsDone);
    return;
}

function del() {
    this.parentNode.remove();
}

let add_item = () => {
    if (text.value == "") {
        return;
    }
    let item = document.createElement("li");
    let span = document.createElement("span");
    span.innerText = text.value;
    span.style.color = "black";
    span.style.width = "100%";
    let button = document.createElement("button");
    button.innerHTML = "X";
    item.appendChild(span);
    item.appendChild(button);
    list.appendChild(item);
    span.addEventListener("click", markAsDone);
    button.addEventListener("click", del);
}

