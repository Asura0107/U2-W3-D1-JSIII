const btn = document.querySelector("button");
const petname = document.getElementById("petname");
const ownername = document.getElementById("ownername");
const species = document.getElementById("species");
const breed = document.getElementById("breed");
const listul = document.getElementById("list");
const form = document.getElementById("pet");

let sign = [];
// mi creo un array iniziale che mi andrà a contenere il mio object
// mi creo le variabile che mi servono
class Pet {
  constructor(petname, ownername, species, breed) {
    this.petname = petname;
    this.ownername = ownername;
    this.species = species;
    this.breed = breed;
  }
}

// all'intern della funzione foreach mi prendo un parametro che mi va a rappresentare ogni pt che l'utente iserirà
// per ogi  parametro mi creo un li con un suo innertext composto dai parametri della classe precedente
const assign = function () {
  sign.forEach((pet) => {
    const newli = document.createElement("li");
    newli.innerText =
      "nome: " + pet.petname + " , proprietario: " + pet.ownername;
    listul.appendChild(newli);
  });
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  //   mi creo il mio nuovo oggetto e lo metto all'interno dell'array vuoto, infine richiamo la funzione di prima che mi va a creare i miei li
  const newpet = new Pet(
    ownername.value,
    petname.value,
    species.value,
    breed.value
  );
  sign.push(newpet);
  assign();

  ownername.value = "";
  petname.value = "";
  species.value = "";
  breed.value = "";
});
