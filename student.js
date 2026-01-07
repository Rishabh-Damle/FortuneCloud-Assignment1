let studentData = {
  students: {
    student1: {
      name: "Rishabh Damle",
      email: "rishabh@gmail.com",
      city: "Nagpur",
      contact: "8390XXXX",
    },
  },
};
export function addStudent(student) {
  studentData.students["student2"] = student;
  console.log("Admision of student succsesfull");
}
export function viewStudent(serachName) {
  for (const email in studentData.students) {
    const student = studentData.students[email];
    if (student.name == serachName) {
      console.log("Yes sir i am presnt ", student);
    }
  }
}
