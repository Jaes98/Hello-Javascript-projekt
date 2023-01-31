document.body.innerHTML += "Halløjsovs";

function sayHello() {
  document.querySelector("h3").textContent =
    "BUM " + document.querySelector("input").value;
}
document.querySelector("button").addEventListener("click", sayHello);
