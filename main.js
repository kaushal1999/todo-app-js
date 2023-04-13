let button = document.querySelector(".btn");
let text = document.querySelector("#box");
let list = document.querySelector("#list_item");

function del()  {
    this.classList.add("deleted");
    this.removeEventListener("click", del);
    return;
}


let add_item = () => {
    if (text.value == "") {
        return;
    }
    let item = document.createElement("li");
    item.innerText = text.value;
    list.appendChild(item);
    item.addEventListener("click", del);
}