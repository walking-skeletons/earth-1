class Human {
  constructor({firstName, lastName}) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHi() {
    console.log(`Hi I'm ${this.firstName} ${this.lastName}`);
  }
  
  sayBye() {
    console.log(`Bye I'm ${this.firstName} ${this.lastName}`);
  }
  
}

module.exports = {
  Human: Human
};
