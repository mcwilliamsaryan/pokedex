class Student {
  constructor(name, email, students = []) {
    this.name = name;
    this.email = email;
    this.students = students;
  }
}

class Bootcamp {
  constructor(name, level, students = []) {
    this.name = name;
    this.email = level;
    this.students = students;
  }

  registerStudent(studentToRegister) {
    if (!studentToRegister.name || !studentToRegister.email) {
      console.log('Invalid name or email');
      return false;
    }
    if (
      this.students.find(
        (enrolledStudent) => enrolledStudent.email === studentToRegister.email
      )
    ) {
      console.log(
        `this email, ${studentToRegister.email}, is already registered.`
      );
      return false;
    } else {
      this.students.push(studentToRegister);
      console.log(`${studentToRegister.name} has been registered`);
      return true;
    }
  }
  listStudents() {
    if (this.students.length === 0) {
      console.log(`No students are registered to the ${this.name} bootcamp.`);
      return false;
    } else {
      console.log(`The students registered in ${this.name} are:`);
      this.students.forEach((student) =>
        console.log(`${student.name} ${student.email}`)
      );
      return true;
    }
  }
}

testStudent = new Student('Bugs Bunny', 'bugs@bunny.com');
console.log(testStudent);
if (
  testStudent.name === 'Bugs Bunny' &&
  testStudent.email === 'bugs@bunny.com'
) {
  console.log('TASK 1: PASS');
}

reactBootcamp = new Bootcamp('React', 'Advanced');
console.log(reactBootcamp);
if (
  reactBootcamp.name === 'React' &&
  reactBootcamp.level === 'Advanced' &&
  Array.isArray(reactBootcamp.students) &&
  reactBootcamp.students.length === 0
) {
  console.log('TASK 2: PASS');
}

const runTest = (bootcamp, student) => {
  const attemptOne = bootcamp.registerStudent(student);
  const attemptTwo = bootcamp.registerStudent(student);
  const attemptThree = bootcamp.registerStudent(new Student('Babs Bunny'));
  if (attemptOne && !attemptTwo && !attemptThree) {
    console.log('TASK 3: PASS');
  }

  bootcamp.registerStudent(new Student('Babs Bunny', 'babs@bunny.com'));
  if (bootcamp.listStudents()) {
    console.log('TASK 4: PASS 1/2');
  }
  bootcamp.students = [];
  if (!bootcamp.listStudents()) {
    console.log('TASK 4: PASS 2/2');
  }
};
runTest(reactBootcamp, testStudent);

reactBootcamp.registerStudent(testStudent);

const returnValue = reactBootcamp.listStudents();
