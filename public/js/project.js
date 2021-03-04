// Helper functions to show/hide elements
const show = (el) => {
	el.style.display = "block";
};

feather.replace();

// Wait for the DOM to completely load before we run our JS
document.addEventListener("DOMContentLoaded", () => {
	// function showCheckboxes() {
	//     var checkboxes =
	//         document.getElementById("checkBoxes");

	//     if (show) {
	//         checkboxes.style.display = "block";
	//         show = false;
	//     } else {
	//         checkboxes.style.display = "none";
	//         show = true;
	//     }
	// }

	console.log("DOM loaded! 🚀");

	// Get references to the body, title, form and author
	const bodyInput = document.getElementById("body");
	const titleInput = document.getElementById("name");
	const createBtn = document.getElementById("create-form");
	const employeeSelect = document.getElementById("employee");
	const managerSelect = document.getElementById("manager");

	console.log(managerSelect);
	// Get query parameter
	const url = window.location.search;
	console.log(url);

	let projectId = url.split("=")[1];
	console.log(projectId);
	let managerId;
	let employeeId;
	let updating = false;

	// Get post data for editing/adding
	const getProjectData = () => {
		fetch(`/api/project/${projectId}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				if (data) {
					console.log("Success in getting project:", data);

					// Populate the form for editing
					titleInput.value = data.name;
					bodyInput.value = data.description;
					managerId = data.ManagerId || data.id;
					employeeId = data.EmployeeId || data.id;
					// We are updating
					updating = true;
				}
			})
			.catch((err) => console.error(err));
	};

	if (url) {
		// updating = true;
		getProjectData();
	}

	// Event handler for when the project for is submitted
	const handleFormSubmit = (e) => {
		e.preventDefault();

		// Make sure the form isn't empty
		if (
			!titleInput.value.trim() ||
			!bodyInput.value.trim()
			//||
			// !employeeSelect.value
		) {
			return;
		}

		//var allEmployee = [];
		// Object that will be sent to the db
		//for (var i = 0; i < employeeSelect.length; i++) {
		//console.log(employeeSelect.value)
		var selected = Array.from(employeeSelect.options);
		console.log(selected);
		var selectedIds = [];

		selected.forEach((selection) => {
			if (selection.selected) {
				selectedIds.push(selection.value);
			}
		});

		console.log(selectedIds);
		var newProject = [];
		for (var i = 0; i < selectedIds.length; i++) {
			const singleProject = {
				name: titleInput.value.trim(),
				description: bodyInput.value.trim(),
				manager_id: managerSelect.value,
				employee_id: selectedIds[i],
			};
			newProject.push(singleProject);
		}
		//allEmployee.push(newProject);
		console.log(newProject);
		//}

		console.log(updating);
		// Update a post if flag is true, otherwise submit a new one
		for (let i = 0; i < newProject.length; i++) {
			if (updating) {
				newProject.id = projectId;
				updateProject(newProject[i]);
			} else {
				submitProject(newProject[i]);
			}
		}
	};

	// Attach an event listener to the form on submit
	createBtn.addEventListener("submit", handleFormSubmit);

	// Submits new project then redirects
	const submitProject = (project) => {
		const urls = ["/api/project", "/api/employee_projects"];
		Promise.all(
			urls.map((url) =>
				fetch(url, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(project),
				})
					.then((response) => response.json())
					.catch((err) => console.error(err))
			)
		);
	};

	// Render a list of employees or redirect if no employees
	const renderManagerList = (data) => {
		const rowsToAdd = [];

		data.forEach((manager) => rowsToAdd.push(createManagerRow(manager)));

		managerSelect.innerHTML = "";
		console.log("renderManagerList -> rowsToAdd", rowsToAdd);
		console.log("managerSelect", managerSelect);

		rowsToAdd.forEach((row) => managerSelect.append(row));
		managerSelect.value = managerId;
	};

	// Build employee dropdown

	const createManagerRow = ({ id, first_name, last_name }) => {
		const listOption = document.createElement("option");
		// .appendChild("input");

		//  const addInput = document.createElement('input');
		// const listOption = addLable.append($("input"))
		console.log(listOption);
		listOption.setAttribute("type", "checkbox");
		listOption.value = id;
		listOption.textContent = `${first_name} ${last_name}`;
		console.log(listOption.textContent);
		return listOption;
	};

	// A function to get employees and then call the render function
	const getManagers = (req, res) => {
		fetch("api/managers", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => renderManagerList(data));
		// .catch((err) => console.error(err));
	};

	// Get the employees, and their projects
	getManagers();

	//Employe dropdowns

	// Render a list of employees or redirect if no employees
	const renderEmployeeList = (data) => {
		const rowsToAdd = [];

		data.forEach((employee) => rowsToAdd.push(createEmployeeRow(employee)));

		employeeSelect.innerHTML = "";
		console.log("renderEmployeeList -> rowsToAdd", rowsToAdd);
		console.log("employeeSelect", employeeSelect);

		rowsToAdd.forEach((row) => employeeSelect.append(row));
		employeeSelect.value = employeeId;
	};

	// Build employee dropdown
	const createEmployeeRow = ({ id, first_name, last_name }) => {
		// var x = document.createElement("INPUT");
		// x.setAttribute("type", "checkbox");

		// ($('<label></label>').text(`${first_name} ${last_name}`)).insertAfter(x);

		// x = $("label").text(`${first_name} ${last_name}`).after(x);

		// $("<p>`${first_name} ${last_name}`</p>").insertAfter(x);

		// x.value = id;
		// x.textContent = `${first_name} ${last_name}`;
		// console.log(x.textContent)

		const listOption = document.createElement("option");
		// .appendChild("input");

		//  const addInput = document.createElement('input');
		// const listOption = addLable.append($("input"))
		console.log(listOption);
		listOption.setAttribute("type", "checkbox");
		listOption.value = id;
		listOption.textContent = `${first_name} ${last_name}`;
		console.log(listOption.textContent);
		return listOption;
	};

	// A function to get employees and then call the render function
	const getEmployees = (req, res) => {
		fetch("api/employees", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => renderEmployeeList(data));
		// .catch((err) => console.error(err));
	};

	// Get the employees, and their projects
	getEmployees();

	// Update a post then redirect to blog
	const updateProject = (project) => {
		fetch(`/api/project/${projectId}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(project),
		}).then(() => {
			window.location.href = "/dashboard";
		});
		// .catch((err) => console.error(err));
	};

	const getAllLogins2 = (e) => {
		const newEmployee = {
			first_name: $("#employee-first-name").val().trim(),
			last_name: $("#employee-last-name").val().trim(),
			role_id: $("#employee-title").val(),
			email: $("#employee-email").val().trim(),
			password: $("#employee-password").val().trim(),
		};

		// store urls to fetch in an array
		const urls = ["/api/employee_projects", "/api/project"];

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
});
