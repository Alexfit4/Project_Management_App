$(document).ready(() => {
  console.log('DOM loaded! 🚀');

  //Get Employee
  const getEmployees = () => {
    fetch('/api/employees', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          console.log('Success in getting post:', data);
          console.log(data)
          $("#employee-table > tbody").empty();
          // Populate the form
          for (i=0; i< data.length; i++){
          empFirstName = data[i].first_name;
          empLastName = data[i].last_name;
          empTitle = data[i].Role.title;
          empSalary = data[i].Role.salary;
          empEmail = data[i].email;

          var newRow = $("<tr>").append(
            $("<td>").text(empFirstName),
            $("<td>").text(empLastName),
            $("<td>").text(empTitle).addClass("title-row"),
            $("<td>").text(empSalary),
            $("<td>").text(empEmail),
            $("<button>").text("Edit").addClass("edit-emp-btn"),
            $("<button>").text("Delete").addClass("delete-emp-btn"),
          );

          // Append the new row to the table
          $("#employee-table > tbody").append(newRow)

        }
      }
      })
      .catch((err) => console.error(err));

  };
  getEmployees()

  //Get Employee
  const getManager = () => {
    fetch('/api/managers', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          console.log('Success in getting post:', data);
          console.log(data)
          $("#manager-table > tbody").empty();
          // Populate the form
          for (i=0; i< data.length; i++){
          managerFirstName = data[i].first_name;
          managerLastName = data[i].last_name;
          managerTitle = data[i].Role.title;
          managerSalary = data[i].Role.salary;
          managerEmail = data[i].email;

          var newRow = $("<tr>").append(
            $("<td>").text(managerFirstName),
            $("<td>").text(managerLastName),
            $("<td>").text(managerTitle).addClass("title-row"),
            $("<td>").text(managerSalary),
            $("<td>").text(managerEmail),
            $("<button>").text("Edit").addClass("edit-emp-btn"),
            $("<button>").text("Delete").addClass("delete-emp-btn"),
          );

          // Append the new row to the table
          $("#manager-table > tbody").append(newRow)

        }
      }
      })
      .catch((err) => console.error(err));

  };
  getManager()

  //Add Employee
  const addEmployee = (e) => {
    e.preventDefault();
    const newEmployee = {
      first_name: $("#employee-first-name").val().trim(),
      last_name: $("#employee-last-name").val().trim(),
      title: $("#employee-title").val().trim(),
      salary: $("#employee-salary").val().trim(),
      email: $("#employee-email").val().trim(),
      password: $("#employee-password").val().trim(),
    };
    if (newEmployee) {
      fetch('/api/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEmployee),
      })
        .then((response) => response.json())
        .then(() => getEmployees());
    }
  };
  $("#add-employee-btn").on("click", addEmployee)

  //Delete Employee
  const deleteEmployees = (e) => {
    e.stopPropagation();
    const { id } = e.target.parentElement.parentElement;
    console.log(id);
    fetch(`/api/employees/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(getEmployees);
  };

  $(".delete-emp-btn").on("click", deleteEmployees);

  // Edit Employee
});
