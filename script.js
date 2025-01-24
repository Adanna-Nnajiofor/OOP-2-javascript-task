// Base class: Person
class Person {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  getDetails() {
    return `Name: ${this.name}, ID: ${this.id}`;
  }
}

// Derived class: Student, inherits from Person
class Student extends Person {
  constructor(name, id, grades) {
    super(name, id);
    this.grades = grades;
  }

  addGrade(grade) {
    this.grades.push(grade);
  }

  calculateAverage() {
    let sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return (sum / this.grades.length).toFixed(2);
  }

  getDetails() {
    const average = this.calculateAverage();
    return `${super.getDetails()}, Grades: ${this.grades.join(
      ", "
    )}, Average: ${average}`;
  }
}

// Derived class: Teacher, inherits from Person
class Mentor extends Person {
  constructor(name, id, subject) {
    super(name, id);
    this.subject = subject;
  }

  getDetails() {
    return `${super.getDetails()}, Subject: ${this.subject}`;
  }
}

// Student Management System
class StudentManagementSystem {
  constructor() {
    this.people = [];
  }

  addPerson(person) {
    this.people.push(person);
  }

  viewAllPeople() {
    if (this.people.length === 0) {
      console.log("No people available.");
    } else {
      this.people.forEach((person, index) => {
        console.log(`Person ${index + 1}: ${person.getDetails()}`);
      });
    }
  }
}

// Usage example:
const system = new StudentManagementSystem();
const student1 = new Student("Adanna Nnajiofor", "S001", [85, 90, 88]);
const mentor1 = new Mentor("Mr. Ejiofor Obieze", "M001", "Backend Engineering");

system.addPerson(student1);
system.addPerson(mentor1);
system.viewAllPeople();
