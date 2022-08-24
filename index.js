class Employee {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    // Complete the code!

    // console.log(`${this.firstname} ${this.lastname}`);
  }

  firstName() {
    console.log(`${this.firstname}`);
  }
  lastName() {
    console.log(`${this.lastname}`);
  }

  createFullName() {
    console.log(`${this.firstname} ${this.lastname}`);
  }

  createEmail() {
    console.log(
      `${this.firstname.toLowerCase()}.${this.lastname.toLowerCase()}@company.com`
    );
  }
}

const emp1 = new Employee("Saad", "Malik");

emp1.createFullName();
emp1.createEmail();

const emp2 = new Employee("John", "Snow");
emp2.createFullName();
emp2.createEmail();
emp2.firstName();
emp1.lastName();
// const email = new Employee("Saad", "Malik");

// email.createEmail();
