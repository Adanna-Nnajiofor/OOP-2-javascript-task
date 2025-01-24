# Student Management System

## Overview

The **Student Management System** is a simple JavaScript application that manages a collection of `Person` objects, including `Student` and `Mentor`. It demonstrates the principles of Object-Oriented Programming (OOP), such as inheritance, encapsulation, and abstraction.

### Features

- **Base Class**: `Person` acts as the foundational class with properties like `name` and `id`.
- **Derived Classes**:
  - `Student`: Extends `Person` to include `grades` and methods to calculate averages.
  - `Mentor`: Extends `Person` to include a `subject` field.
- **Management System**: `StudentManagementSystem` allows adding, managing, and viewing all `Person` objects (both students and mentors).

---

## Key Concepts Used

### 1. **Inheritance**

- The `Student` and `Mentor` classes inherit from the base `Person` class, reusing common properties and methods.

### 2. **Encapsulation**

- All data is encapsulated within classes, and methods are provided to interact with the data safely.

### 3. **Abstraction**

- Complex operations, such as calculating averages, are abstracted within the `Student` class.

---

## Usage

### Code Example

```javascript
// Create a new Student Management System
const system = new StudentManagementSystem();

// Create a Student
const student1 = new Student("Adanna Nnajiofor", "S001", [85, 90, 88]);

// Create a Mentor
const mentor1 = new Mentor("Mr. Ejiofor Obieze", "M001", "Backend Engineering");

// Add the Student and Mentor to the system
system.addPerson(student1);
system.addPerson(mentor1);

// View details of all people in the system
system.viewAllPeople();
```
