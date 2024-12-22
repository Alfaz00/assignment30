

const rotDiv = document.getElementById("rot");

const ul = document.createElement("ul");

const items =["Home","About","Services","Contact"];

items.forEach(item =>{

    const li =document.createElement("li");

    li.textContent =item;
    ul.appendChild(li);


});

rotDiv.appendChild(ul);

