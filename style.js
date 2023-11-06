class User {
  constructor(
    firstName,
    lastName,
    age,
    location,
    firstName2,
    lastName2,
    age2,
    location2
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
    this.firstName2 = firstName2;
    this.lastName2 = lastName2;
    this.age2 = age2;
    this.location2 = location2;
  }
  // questo è il metodo classico
  gap() {
    if (this.age > this.age2) {
      return this.firstName + " è più vecchio di " + this.firstName2;
    } else if (this.age < this.age2) {
      return this.firstName2 + " è più vecchio di " + this.firstName;
    } else {
      return "Hanno la stessa età.";
    }
  }
}
// dopo essermi creato una classe (cioè gli elementi che devono stare all'interno di un object), mi vado a
// creare il mio object con la keyword "new" e mi vado ad attivare il metodo che ho dentro al mio object

const compare = new User(
  "samuel",
  "rossi",
  34,
  "indonesia",
  "franco",
  "blu",
  38,
  "francia"
);
console.log(compare.gap());

const comparesecond = new User(
  "samuel",
  "rossi",
  38,
  "indonesia",
  "franco",
  "blu",
  31,
  "francia"
);
console.log(comparesecond.gap());

const comparethird = new User(
  "samuel",
  "rossi",
  34,
  "indonesia",
  "franco",
  "blu",
  34,
  "francia"
);
console.log(comparethird.gap());

// questo è il metodo statico
class Usersecond {
  constructor(firstName, lastName, location, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.location = location;
    this.age = age;
  }
  static agediff(person1, person2) {
    if (person1.age > person2.age) {
      return person1.firstName + " è più vecchio di " + person2.firstName;
    } else if (person1.age < person2.age) {
      return person2.firstName + " è più vecchio di " + person1.firstName;
    } else {
      return "Hanno la stessa età.";
    }
  }
}
const people = [
  new Usersecond("samuel", "jane", "wakanda", 38),
  new Usersecond("franco", "blu", "asgard", 35),
  new Usersecond("samuel", "jane", "wakanda", 33),
  new Usersecond("franco", "blu", "asgard", 57),
  new Usersecond("samuel", "jane", "wakanda", 38),
  new Usersecond("franco", "blu", "asgard", 38)
];
console.log(Usersecond.agediff(people[0], people[1]));
console.log(Usersecond.agediff(people[2], people[3]));
console.log(Usersecond.agediff(people[4], people[5]));
