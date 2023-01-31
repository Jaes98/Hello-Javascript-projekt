document.body.innerHTML += "Halløjsovs";

function sayHello() {
  document.querySelector("h3").textContent =
    "Navn: " +
    document.querySelector("#name").value +
    " Alder: " +
    document.querySelector("#age").value +
    " Email: " +
    document.querySelector("#email").value;
}

document.querySelector("button").addEventListener("click", sayHello);
