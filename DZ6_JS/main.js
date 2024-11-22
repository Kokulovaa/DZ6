const input = document.querySelector("#input");
const create = document.querySelector("#create");
const list = document.querySelector("#list");

const a = [];

const todo = () => {
    const value = input.value;


    if(value) {
        const reverse = value.split("").reverse().join("")
        a.push(reverse)

        input.value = '';
        list.innerHTML = '';
    }



    a.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        list.append(li)
    })
}

create.onclick = () => todo();
