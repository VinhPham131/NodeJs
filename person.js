class Person {
    getName() {
        return 'Vinh Pham';
    }
    getAge() {
        return 20;
    }
}

class Student extends Person {
    getAge() {
        console.log(`age: ${super.getAge() + 1}`);
    }
    getName() {
        console.log(`Name: ${super.getName()} - Student`);
    }
    getMajor() {
        console.log("Major: Computer Science");
    }
    getClass() {
        console.log("Class: 22CSE");
    }
}

let student = new Student();
console.log(student.getAge());
console.log(student.getName());
console.log(student.getClass());
console.log(student.getMajor());
