document.addEventListener('DOMContentLoaded', (e) => {
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
        if (data) {
          console.log('Success in getting post:', data);

          // Populate the form
          empFirstName = data[0].first_name;
          empLastName = data[0].last_name;
          empTitle = data.title;
          empSalary = data.salary;
          empEmail = data.email;

          var newRow = $("<tr>").append(
            $("<td>").text(empFirstName),
            $("<td>").text(empLastName),
            $("<td>").text(empTitle),
            $("<td>").text(empSalary),
            $("<td>").text(empEmail),
            $("<button>").text("Edit").addClass("edit-emp-btn"),
            $("<button>").text("Delete").addClass("delete-emp-btn"),
          );

          // Append the new row to the table
          $("#employee-table > tbody").append(newRow)

        }
      })
      .catch((err) => console.error(err));

  };
  getEmployees()

  //Add Employee
  const addEmployee = () => {
    
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
  $("#add-employee-btn").on("click", addEmployee())

  //Delete Employee
  const deleteEmployees = (e) => {
    e.stopPropagation();
    const { id } = e.target.dataset;

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
