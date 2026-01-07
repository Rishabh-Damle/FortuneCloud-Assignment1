import { addStudent, viewStudent } from "./student.js";
import { register, login } from "./employee.js";

// addStudent({
//   name: "Simran",
//   email: "simran@gmail.com",
//   city: "Amravati",
//   contact: "9565XXXXXX",
// });
// viewStudent("Simran");
register({
  name: "Simran",
  email: "simran@gmail.com",
  city: "Amravati",
  password: "hashed_Password",
  contact: "9565XXXXXX",
});

login("simran@gmail.com", "hashed_Password");
