$(document).ready(() => {
  console.log('DOM loaded! 🚀');

  let titleId;
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
          empId = data[i].id;
          
          var newRow = $("<tr>").append(
            $("<td>").text(empFirstName),
            $("<td>").text(empLastName),
            $("<td>").text(empTitle).addClass("title-row"),
            $("<td>").text(empSalary),
            $("<td>").text(empEmail),
            $("<button>").text("Edit").addClass("edit-emp-btn").val(empId),
            $("<button>").text("Delete").addClass("delete-emp-btn").val(empId),
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
          managerId = data[i].id;
          var newRow = $("<tr>").append(
            $("<td>").text(managerFirstName),
            $("<td>").text(managerLastName),
            $("<td>").text(managerTitle).addClass("title-row"),
            $("<td>").text(managerSalary),
            $("<td>").text(managerEmail),
            $("<button>").text("Edit").addClass("edit-emp-btn").val(managerId),
            $("<button>").text("Delete").addClass("delete-emp-btn").val(managerId),
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
      role_id: titleSelect.val(),
      email: $("#employee-email").val().trim(),
      password: $("#employee-password").val().trim(),
    };
    //console.log(newEmployee.role_id)
    if (newEmployee) {
      fetch('/api/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEmployee),
      })
        .then((response) => response.json())
        .then(() => getEmployees()).catch((err) => console.error(err));;
    }
  };
  $("#add-employee-btn").on("click", addEmployee)

  //Add Employee
  const addManager = (e) => {
    e.preventDefault();
    const newManager = {
      first_name: $("#manager-first-name").val().trim(),
      last_name: $("#manager-last-name").val().trim(),
      role_id: titleSelect.val(),
      email: $("#manager-email").val().trim(),
      password: $("#manager-password").val().trim(),
    };
    //console.log(newEmployee.role_id)
    if (newManager) {
      fetch('/api/managers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newManager),
      })
        .then((response) => response.json())
        .then(() => getManager()).catch((err) => console.error(err));;
    }
  };
  $("#add-manager-btn").on("click", addManager)

  //Delete Employee
  const deleteEmployees = (e) => {
    e.stopPropagation();
    var {id} = $(this).val();
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

  // Render a list of employee titles
  const titleSelect = $(".title-select")
  const renderTitleList = (data) => {
    console.log('renderTitleList -> data', data);

    const rowsToAdd = [];

    data.forEach((title) => rowsToAdd.push(createTitleRow(title)));
    
    console.log('renderTitleList -> rowsToAdd', rowsToAdd);
    console.log('titleSelect', titleSelect);

    rowsToAdd.forEach((row) => titleSelect.append(row));
    titleSelect.value = titleId;
  };

    // Build title dropdown
    const createTitleRow = ({ id, title }) => {
      const listOption = $('<option>');
      listOption.val(id);
      listOption.text(title)
      return listOption;
    };

    const getTitles = () => {
      fetch('api/roles', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          titleId = data.id;
        renderTitleList(data)})
        .catch((err) => console.error(err));
    };

    getTitles()
});
