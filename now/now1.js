class Course {
  #enrollmentLimit; // Private property

  constructor(title, courseCode, limit = 30) {
    this.title = title;
    this.courseCode = courseCode;
    this.students = []; // Array of objects: { name: string, grade: number }
    this.#enrollmentLimit = limit;
  }

  // Check if course is full before adding
  enrollStudent(studentName) {
    if (this.students.length >= this.#enrollmentLimit) {
      console.log(`Error: ${this.title} is full.`);
      return false;
    }
    
    this.students.push({ name: studentName, grade: null });
    return true;
  }

  // Assign a grade to a specific student
  assignGrade(studentName, grade) {
    const student = this.students.find(s => s.name === studentName);
    if (student) {
      student.grade = grade;
    } else {
      console.log(`Student ${studentName} not found.`);
    }
  }

  // Calculate class average dynamically
  get classAverage() {
    const gradedStudents = this.students.filter(s => s.grade !== null);
    if (gradedStudents.length === 0) return 0;

    const total = gradedStudents.reduce((sum, s) => sum + s.grade, 0);
    return total / gradedStudents.length;
  }
}

// Example usage:
const jsCourse = new Course('Advanced JavaScript', 'JS-202', 2);

// 1. Enroll students
jsCourse.enrollStudent('Alex');
jsCourse.enrollStudent('Taylor');
jsCourse.enrollStudent('Jordan'); // Output: Error: Advanced JavaScript is full.

// 2. Assign grades
jsCourse.assignGrade('Alex', 95);
jsCourse.assignGrade('Taylor', 87);

// 3. Get average
console.log(`Average: ${jsCourse.classAverage}%`); // Output: Average: 91%
# A simple greeting program
print("Hello! Welcome to coding.")

# A loop that counts from 1 to 3
for number in range(1, 4):
    print(f"Counting: {number}")
