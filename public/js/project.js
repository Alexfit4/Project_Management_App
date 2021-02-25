// Helper functions to show/hide elements
const show = (el) => {
    el.style.display = 'block';
};

// Wait for the DOM to completely load before we run our JS
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded! 🚀');

    // Get references to the body, title, form and author
    const bodyInput = document.getElementById('body');
    const titleInput = document.getElementById('name');
    const createBtn = document.getElementById('create-form');
    const employeeSelect = document.getElementById('employee');
    const managerSelect = document.getElementById('manager');
    // Get query parameter
    // const url = window.location.search;
    let projectId;
    let employeeId;
    let updating = false;

    // Get post data for editing/adding
    // const getProjectData = () => {
    //     fetch('/api/project', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             if (data) {
    //                 console.log('Success in getting project:', data);

    //                 // Populate the form for editing
    //                 titleInput.value = data.name;
    //                 bodyInput.value = data.description;
    //                 // employeeId = data.EmployeeId || data.id;

    //                 // We are updating
    //                 updating = true;
    //             }
    //         })
    //         .catch((err) => console.error(err));
    // };

    // getProjectData();

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

        // Object that will be sent to the db
        const newProject = {
            name: titleInput.value.trim(),
            description: bodyInput.value.trim(),
            //  Employeeid: employeeSelect.value,
        };
        console.log(newProject);

        // Update a post if flag is true, otherwise submit a new one
        if (updating) {
            newProject.id = projectId;
            updateProject(newProject);
        } else {
            submitProject(newProject);
        }
    };

    // Attach an event listener to the form on submit
    createBtn.addEventListener('submit', handleFormSubmit);

    // Submits new project then redirects
    const submitProject = (project) => {
        fetch('/api/project', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then(() => {
                window.location.href = '/dashboard';
            })
        // .catch((err) => console.error(err));
    };

    // Render a list of employees or redirect if no employees
    const renderEmployeeList = (data) => {
        console.log('renderEmployeeList -> data', data);
        if (!data.length) {
            window.location.href = '/employee';
        }
        if (document.querySelector('.hidden')) {
            show(document.querySelector('.hidden'));
        }

        const rowsToAdd = [];

        data.forEach((employee) => rowsToAdd.push(createEmployeeRow(employee)));

        employeeSelect.innerHTML = '';
        console.log('renderEmployeeList -> rowsToAdd', rowsToAdd);
        console.log('employeeSelect', employeeSelect);

        rowsToAdd.forEach((row) => employeeSelect.append(row));
        employeeSelect.value = employeeId;
    };

    // Build employee dropdown

    const createEmployeeRow = ({ id, name }) => {
        const listOption = document.createElement('option');
        listOption.value = id;
        listOption.textContent = name;
        return listOption;
    };







    // A function to get employees and then call the render function
    const getEmployees = () => {
        fetch('api/employees', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => renderEmployeeList(data))
        // .catch((err) => console.error(err));
    };

    // Get the employees, and their projects
    getEmployees();

    // Update a post then redirect to blog
    const updateProject = (project) => {
        fetch('/api/project', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then(() => {
                window.location.href = '/dashboard';
            })
        // .catch((err) => console.error(err));
    };
});

