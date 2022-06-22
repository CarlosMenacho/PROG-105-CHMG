

function calcVel(so, v, s){
    return ((s-so)/v)
}
let finalVel = calcVel(10, 20, 30);

console.log(finalVel)

var students = [];

function addStudent(name, course, age) {
    students.push({
        Name: name,
        Course: course,
        Age: age
    });

    console.log(students)
}

addStudent("Juan", "Math", 12);
addStudent("Pedro", "Math", 12);
addStudent("QQQQQQ", "Math", 12);