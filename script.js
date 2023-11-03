const button = document.createElement("button")
button.classList.add("btn1")
document.body.append(button);
button.textContent = "Open Modal";

button.style.color = "hotpink"
button.style.backgroundColor = "white"
button.style.padding = "10px 15px"
button.style.borderRadius = "10px"
button.style.border = "2px solid hotpink"
button.style.fontSize = "16px"
button.style.fontFamily = "sans-serif"

const modalparent = document.createElement("div");
modalparent.classList.add("modalparent");
document.body.appendChild(modalparent);

const modal = document.createElement("div");
modal.classList.add("modal");
modalparent.appendChild(modal);

const modaltitle = document.createElement("h3");
modal.appendChild(modaltitle);
modaltitle.textContent = "Modal title";


const modalp = document.createElement("p");
modal.appendChild(modalp);
modalp.textContent = "Modal body text goes here.";

const cancelbutton = document.createElement("button");
cancelbutton.classList.add("btncancel")
modal.appendChild(cancelbutton);
cancelbutton.textContent = "Cancel"

modalparent.style.display = "flex"
modalparent.style.justifyContent = "center"
modalparent.style.alignItems = "center"

modal.style.width = "250px"
modal.style.height = "150px"
modal.style.border = "2px solid hotpink"
modal.style.padding = "40px"
modal.style.display = "none"
modal.style.borderRadius = "15px"
modal.style.backgroundColor = "rgb(255, 221, 227)"
modal.style.color = "hotpink"
modal.style.fontSize = "20px"
modal.style.fontFamily = "sans-serif"

cancelbutton.style.color = "hotpink"
cancelbutton.style.backgroundColor = "white"
cancelbutton.style.padding = "10px 15px"
cancelbutton.style.borderRadius = "10px"
cancelbutton.style.border = "2px solid hotpink"
cancelbutton.style.fontSize = "16px"
cancelbutton.style.fontFamily = "sans-serif"


button.addEventListener("click", function () {
    modal.style.display = "block"
})
cancelbutton.addEventListener("click", function () {
    modal.style.display = "none"
})