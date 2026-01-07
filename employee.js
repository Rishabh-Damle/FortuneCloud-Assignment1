let employeeData = {
  employees: {
    employee1: {
      name: "Rishabh Damle",
      email: "rishabh@gmail.com",
      password: "Hashed_Passowrd",
      city: "Nagpur",
      contact: "8390XXXX",
    },
  },
};
export function register(employe) {
  employeeData.employees["employee2"] = employe;
  console.log("Employee registration succsessfuul");
}
export function login(email, password) {
  for (const name in employeeData.employees) {
    const employee = employeeData.employees[name];
    if (employee.email == email && employee.password == password) {
      console.log("Login succsessfull", employee);
    }
  }
}
