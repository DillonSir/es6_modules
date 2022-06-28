const { default: Car } = require("./car");

let form = document.querySelector("#submitForm");
let makeInput = document.querySelector("#makeInput");
let modelInput = document.querySelector("#modelInput");
let yearInput = document.querySelector("#yearInput");

let wishlistUl = document.querySelector("#wishListContainerul");
let makep = document.querySelector("#car-make");
let modelP = document.querySelector("#car-model");
let yearP = document.querySelector("#car-year");
let removeBtn = document.querySelector("#removeBtn");

let wishlist = new wishlist();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let make = makeInput.value;
  let model = modelInput.value;
  let year = yearInput.value;

  let car = new Car(make, model, year);

  wishlist.add(car);

  let li = document.createElement("li");
  li.classList.add("list-group-item");
  li.textContent = car.model;

  li.addEventListener("click", (event) => {
    makep.textContent = car.make;
    modelP.textContent = car.model;
    yearP.textContent = car.year;

    removeBtn.disabled = false;
    removeBtn.onclick = (event) => {
      wishlist.remove(car);

      makep.textContent = "";
      modelP.textContent = "";
      yearP.textContent = "";

      removeBtn.disabled = true;

      wishlistUl.removeChild(li);
    };
  });

  wishlistUl.appendChild(li);

  makeInput.value = "";
  modelInput.value = "";
  yearInput.value = "";
});
