const btn = document.querySelector("button");
const petname = document.getElementById("petname");
const ownername = document.getElementById("ownername");
const species = document.getElementById("species");
const breed = document.getElementById("breed");
const listul = document.getElementById("list");
const form = document.getElementById("pet");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const text = ownername.value;
  console.log(text);
  const text1 = petname.value;
  console.log(text1);
  const text2 = species.value;
  console.log(text2);
  const text3 = breed.value;
  console.log(text3);

  const sign = text + " " + text1 + " " + text2 + " " + text3;
  console.log(sign);
  const element = document.createElement("li");
  const span = document.createElement("span");

  span.innerText = sign;
  element.appendChild(span);
  listul.appendChild(element);
  ownername.value = "";
  petname.value = "";
  species.value = "";
  breed.value = "";
});
