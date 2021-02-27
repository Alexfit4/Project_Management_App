// const { BIGINT } = require("sequelize");

// Wait for the DOM to completely load before we run our JS
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded! 🚀');
    feather.replace()

    const projectContainer = document.querySelector('.project-container');
    const button = document.querySelector('.button');

    // Variable to hold our projects
    let projects;

    const getProjects = (id) => {
        // employeeId = employee || '';
        // if (employeeId) {
        //     employeeId = `/?employee_id=${employeeId}`;
        // }

        fetch('/api/project', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                // button.onclick = function() {
                //     console.log('hello world');
                //     console.log(data);
                //     var projectDetail = $("<div>").append(
                //         $("<div>").text(projName)
                //     )
                //     $("#projectDetail").append(projectDetail);
                // }
                if (data.length > 0) {
                    console.log('Success in getting post:', data);
                    console.log(data)
                   
                    $("#projectTable > tbody").empty();
                    // Populate the form
                    for (i = 0; i < data.length; i++) {
                        console.log(data[i].id)
                        projId = data[i].id;
                        projName = data[i].name;
                        projDescript = data[i].description;
                        projMngFirst = data[i].Managers[0].first_name;
                        projMngLast = data[i].Managers[0].last_name;
                        projMngName = `${projMngFirst} ${projMngLast}`
                        console.log(projDescript)
                        var newRow = $("<tr>").append(
                            $("<button class='button'>").text(projId),
                            $("<td>").text(projName),
                            $("<td>").text(projDescript),
                            $("<td>").text(projMngName),
                            console.log(projDescript)
                            // $("<td>").text(empSalary),
                            // $("<td>").text(empEmail),
                            // $("<button>").text("Edit").addClass("edit-emp-btn"),
                            // $("<button>").text("Delete").addClass("delete-emp-btn"),
                        );




                        // // Append the new row to the table
                        $("#projectTable > tbody").append(newRow);


                    }
                }

            })
        // .catch((error) => console.error('Error:', error));
    };

    getProjects();

    // Front end call to DELETE a post
    const deleteProject = (id) => {
        fetch(`/api/project/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(getProjects());
    };



    const createNewRow = (project) => {
        // console.log('createNewRow -> project', project);

        // const formattedDate = new Date(project.createdAt).toLocaleDateString();

        // const newProjectCard = document.createElement('div');
        // newProjectCard.classList.add('card');

        // const newProjectCardHeading = document.createElement('div');
        // newProjectCardHeading.classList.add('card-header');

        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'x';
        deleteBtn.classList.add('delete', 'btn', 'btn-danger');
        deleteBtn.addEventListener('click', handleProjectDelete);

        // Edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'EDIT';
        editButton.classList.add('edit', 'btn', 'btn-info');
        editButton.addEventListener('click', handleProjectEdit);

        const newProjectTitle = document.createElement('h2');
        const newProjectDate = document.createElement('small');
        const newProjectEmployee = document.createElement('h5');

        // newProjectEmployee.textContent = `Written by: ${project.name}`;
        // newProjectEmployee.style.float = 'right';
        // newProjectEmployee.style.color = 'blue';
        // newProjectEmployee.style.marginTop = '-10px';

        const newProjectCardBody = document.createElement('div');
        newProjectCardBody.classList.add('card-body');

        const newProjectBody = document.createElement('p');
        newProjectTitle.textContent = `${project.name} `;
        newProjectBody.textContent = project.description;
        newProjectDate.textContent = ` (${formattedDate})`;
        newProjectTitle.append(newProjectDate);
        newProjectCardHeading.append(deleteBtn);
        newProjectCardHeading.append(editButton);
        newProjectCardHeading.append(newProjectitle);
        newProjectCardHeading.append(newProjectEmployee);
        newProjectCardBody.append(newProjectBody);
        newProjectCard.append(newProjectCardHeading);
        newProjectCard.append(newProjectCardBody);
        newProjectCard.setAttribute('data-post', JSON.stringify(project));

        console.log('createNewRow -> newProjectCard', newProjectCard);
        return newProjectCard;
    };



    // Handle when we click the delete post button
    const handleProjectDelete = (e) => {
        const currentProject = JSON.parse(
            e.target.parentElement.parentElement.dataset.project
        );

        deleteProject(currentProject.id);
    };

    // Handle when we click the edit post button
    const handleProjectEdit = (e) => {
        const currentProject = JSON.parse(
            e.target.parentElement.parentElement.dataset.project
        );

        window.location.href = `/project?project_id=${currentProject.id}`;
    };
});

