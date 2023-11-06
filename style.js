// dopo essermi creato una classe (cioè gli elementi che devono stare all'interno di un object), mi vado a
// creare il mio object con la keyword "new" e mi vado ad attivare il metodo che ho dentro al mio object

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
