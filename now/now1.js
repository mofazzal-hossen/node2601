class Department {
  constructor(name, code) {
    this.name = name;
    this.code = code;
    this.students = [];
  }

  addStudent(student) {
    this.students.push(student);
  }
}

// Example usage:
const csDept = new Department('Computer Science', 'CS-101');
console.log(csDept.code); // Output: CS-101
