document.body.innerHTML += "Halløjsovs";

function sayHello() {
  document.querySelector("h3").textContent =
    "BUM " +
    document.querySelector("#name").value +
    "  " +
    document.querySelector("#age").value;
}

document.querySelector("button").addEventListener("click", sayHello);
