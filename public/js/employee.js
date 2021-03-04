//const { Json } = require("sequelize/types/lib/utils");

$(document).ready(() => {
	console.log("DOM loaded! 🚀");
	feather.replace();
	let titleId;

	// * Get Projects
	const getProject = () => {
		fetch("api/project", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			})
			.catch((err) => console.error(err));
	};

	getProject();
	//Get Employee
	const getEmployees = () => {
		fetch("/api/employees", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.length > 0) {
					console.log("Success in getting post:", data);
					console.log(data);
					$("#employee-table > tbody").empty();
					// Populate the form
					for (i = 0; i < data.length; i++) {
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
							$("<select>").attr("data-id", empId).addClass("project-list"),
							$("<button>")
								.text("Update")
								.addClass("update-emp-btn btn-outline-dark btn")
								.val(empId)
								.on("click",updateProject),
							
							$("<button>")
								.text("Delete")
								.addClass("delete-emp-btn btn-outline-dark btn")
								.val(empId)
						);
						// Append the new row to the table
						$("#employee-table > tbody").append(newRow);
					}
				}
			})
			.catch((err) => console.error(err));
	};
	getEmployees();

	//Get Employee
	const getManager = () => {
		fetch("/api/managers", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.length > 0) {
					console.log("Success in getting post:", data);
					console.log(data);
					$("#manager-table > tbody").empty();
					console.log(data);
					// Populate the form
					for (i = 0; i < data.length; i++) {
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
							$("<button>")
								.text("Delete")
								.addClass("delete-manager-btn btn-outline-dark btn")
								.val(managerId)
						);
						// Append the new row to the table
						$("#manager-table > tbody").append(newRow);
					}
				}
			})
			.catch((err) => console.error(err));
	};
	getManager();

	//Add Employee
	const addEmployee = (e) => {
		e.preventDefault();
		const newEmployee = {
			first_name: $("#employee-first-name").val().trim(),
			last_name: $("#employee-last-name").val().trim(),
			role_id: EmployeeTitleSelect.val(),
			project_id: $("#employee-projects").val(),
			email: $("#employee-email").val().trim(),
			password: $("#employee-password").val().trim(),
		};
		// console.log(project_id);
		//console.log(newEmployee.role_id)
		if (newEmployee) {
			fetch("/api/employees", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newEmployee),
			})
				.then((response) => response.json())
				.then(() => getEmployees())
				.catch((err) => console.error(err));
		}
	};
	$("#add-employee-btn").on("click", addEmployee);

	//Add Employee
	const addManager = (e) => {
		e.preventDefault();
		const newManager = {
			first_name: $("#manager-first-name").val().trim(),
			last_name: $("#manager-last-name").val().trim(),
			role_id: ManagerTitleSelect.val(),
			email: $("#manager-email").val().trim(),
			password: $("#manager-password").val().trim(),
		};
		//console.log(newEmployee.role_id)
		if (newManager) {
			fetch("/api/managers", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newManager),
			})
				.then((response) => response.json())
				.then(() => getManager())
				.catch((err) => console.error(err));
		}
	};

	//$("#add-manager-btn").on("click", addManager);
	$(document).on("click", "#add-manager-btn", addManager);

	//Delete Employee
	const deleteEmployees = (e) => {
		id = e.target.value;
		console.log(e.target.value);
		fetch(`/api/employees/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		}).then(getEmployees());
	};

	$(document).on("click", ".delete-emp-btn", deleteEmployees);

	//Delete Manager
	const deleteManagers = (e) => {
		id = e.target.value;
		console.log(e.target.value);
		fetch(`/api/managers/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		}).then(getManager());
	};

	$(document).on("click", ".delete-manager-btn", deleteManagers);

	// Render a list of employee titles
	const EmployeeTitleSelect = $("#employee-title");
	const renderEmpTitleList = (data) => {
		console.log("renderEmployeeTitleList -> data", data);

		const rowsToAdd = [];

		data.forEach((title) => rowsToAdd.push(createEmpTitleRow(title)));

		console.log("renderEmployeeTitleList -> rowsToAdd", rowsToAdd);
		console.log("EmployeeTitleSelect", EmployeeTitleSelect);

		rowsToAdd.forEach((row) => EmployeeTitleSelect.append(row));
		EmployeeTitleSelect.value = titleId;
	};

	// Render a list of manager titles
	const ManagerTitleSelect = $("#manager-title");
	const renderManagerTitleList = (data) => {
		console.log("renderManagerTitleList -> data", data);

		const rowsToAdd = [];

		data.forEach((title) => rowsToAdd.push(createManagerRow(title)));

		console.log("renderManagerTitleList -> rowsToAdd", rowsToAdd);
		console.log("ManagerTitleSelect", ManagerTitleSelect);

		rowsToAdd.forEach((row) => ManagerTitleSelect.append(row));
		ManagerTitleSelect.value = titleId;
	};

		// Render a list of projects in table
		
		const renderTableProjectList = (data) => {
			const tableProjectSelect = $(".project-list");
			console.log("renderTableProjectList -> data", data);
	
			const rowsToAdd = [];
	
			data.forEach((project) => rowsToAdd.push(createProjectListRow(project)));
	
			console.log("renderTableProjectList -> rowsToAdd", rowsToAdd);
			console.log("tableProjectSelect", tableProjectSelect);
	
			rowsToAdd.forEach((row) => tableProjectSelect.append(row));
			tableProjectSelect.value = projectId;
		};

	// Build title dropdown
	const createEmpTitleRow = ({ id, title }) => {
		const listOption = $("<option>");
		listOption.val(id);
		listOption.text(title);
		return listOption;
	};

	//*  Build title dropdown
	const createEmpProjectRow = ({ id, name }) => {
		const listOption = $("<option>");
		listOption.val(id);
		listOption.text(name);
		return listOption;
	};

	// Build title dropdown in table - Mengyue
	const createProjectListRow = ({ id, name }) => {
		const listOption = $("<option>");
		listOption.val(id);
		listOption.text(name);
		return listOption;
	};

	// Build title dropdown
	const createManagerRow = ({ id, title }) => {
		const listOption = $("<option>");
		listOption.val(id);
		listOption.text(title);
		return listOption;
	};

	const getEmpTitles = () => {
		fetch("api/roles_emp", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				titleId = data.id;
				console.log(titleId)
				renderEmpTitleList(data);
			})
			.catch((err) => console.error(err));
	};

	getEmpTitles();

	const getManagerTitles = () => {
		fetch("api/roles_manager", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data)
				titleId = data.id;
				console.log(titleId);
				renderManagerTitleList(data);
			})
			.catch((err) => console.error(err));
	};

	getManagerTitles();
	const EmployeeProjectSelect = $("#employee-projects");
	const renderProjectList = (data) => {
		console.log("renderEmployeeTitleList -> data", data);

		const rowsToAdd = [];

		data.forEach((project) => rowsToAdd.push(createEmpProjectRow(project)));

		console.log("renderEmployeeprojectList -> rowsToAdd", rowsToAdd);
		console.log("EmployeeProjectSelect", EmployeeProjectSelect);

		rowsToAdd.forEach((row) => EmployeeProjectSelect.append(row));
		EmployeeProjectSelect.value = titleId;
	};

	const getEmpProject = () => {
		fetch("api/project", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				titleId = data.id;
				console.log(titleId);
				renderProjectList(data);
			})
			.catch((err) => console.error(err));
	};

	getEmpProject();

	const getProjectList = () => {
		fetch("api/project", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				projectId = data.id;
				console.log(projectId);
				renderTableProjectList(data);
			})
			.catch((err) => console.error(err));
	};

	getProjectList();

	// * Update employee

	const updateEmployees = (e) => {
		id = e.target.value;
		console.log(e.target.value);
		const updateEmployee = {
			first_name: $("#employee-first-name").val().trim(),
			last_name: $("#employee-last-name").val().trim(),
			role_id: $("#employee-title").val(),
			project_id: $("#employee-projects").val(),
			email: $("#employee-email").val().trim(),
			password: $("#employee-password").val().trim(),
		};
		console.log(project_id);

		fetch(`/api/employees`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updateEmployee),
		})
			.then((response) => response.json())
			.catch((err) => console.error(err));
	};

	$("#update-employee-btn").on("click", updateEmployees);

	// * Testing fetching two api's

	// ! Amir's Branch

	const getAllLogins2 = (e) => {
		const newEmployee = {
			first_name: $("#employee-first-name").val().trim(),
			last_name: $("#employee-last-name").val().trim(),
			role_id: $("#employee-title").val(),
			project_id: $("#employee-projects").val(),
			email: $("#employee-email").val().trim(),
			password: $("#employee-password").val().trim(),
		};

		// store urls to fetch in an array
		const urls = ["/api/employees", "/api/users"];

		// use map() to perform a fetch and handle the response for each url
		Promise.all(
			urls.map((url) =>
				fetch(url, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(newEmployee),
				})
					.then((response) => response.json())
					.catch((err) => console.error(err))
			)
		);

		getEmployees();
	};

	$("#add-employee-btn").on("click", getAllLogins2);

	const getAllLoginsManagers = (e) => {
		const newManager = {
			first_name: $("#manager-first-name").val().trim(),
			last_name: $("#manager-last-name").val().trim(),
			role_id: $("#manager-title").val(),
			email: $("#manager-email").val().trim(),
			password: $("#manager-password").val().trim(),
		};
		console.log(first_name);
		console.log(last_name);
		console.log(role_id);
		console.log(email);
		console.log(password);
		// store urls to fetch in an array
		const urls = ["/api/managers", "/api/users"];

		// use map() to perform a fetch and handle the response for each url
		Promise.all(
			urls.map((url) =>
				fetch(url, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(newManager),
				})
					.then((response) => response.json())
					.catch((err) => console.error(err))
			)
		);

		getManager();
	};


$("#add-manager-btn").on("click", getAllLoginsManagers);

// put 
const updateProject = (e) => {
	empId = e.target.value;
	console.log(e.target.value);
	selectedProjectId = $(`select[data-id=${empId}]`).val();
	console.log(selectedProjectId)
    fetch('/api/employee', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
	  body: JSON.stringify({
		ProjectId: selectedProjectId,
		EmployeeId: empId
	  })
    })
      .then(() => {
        console.log("Updated employee project! ")
      })
      .catch((err) => console.error(err));
  };

	$("#add-manager-btn").on("click", getAllLoginsManagers);
});

