import { addStudent, viewStudent } from "./student.js";
import { register, login } from "./employee.js";

//for adding student
addStudent({
  name: "Simran",
  email: "simran@gmail.com",
  city: "Amravati",
  contact: "9565XXXXXX",
});

//for view student
viewStudent("Simran");

//for employee registration
register({
  name: "Simran",
  email: "simran@gmail.com",
  city: "Amravati",
  password: "hashed_Password",
  contact: "9565XXXXXX",
});

//for employee login
login("simran@gmail.com", "hashed_Password");
