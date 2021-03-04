// const { BIGINT } = require("sequelize");

// const { DatabaseError } = require("sequelize");

// const e = require("express");

// Wait for the DOM to completely load before we run our JS
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded! 🚀');
    feather.replace()

    const projectContainer = document.querySelector('.project-container');
    const projectTitle = document.getElementById('projectTitle');
    const projectDescriptor = document.getElementById('projectDescriptor');
    const managerDetail = document.getElementById('managerDetail');
    const employeeDetail = document.getElementById('employeeDetail');
    const timeline = document.getElementById('timeline');
    let button = document.querySelector('.btn');

    let projectID = document.getElementById('projectTable');


    // Variable to hold our projects
    let projects;
    let projEmpName;

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
                if (data.length > 0) {
                    console.log('Success in getting post:', data);
                    console.log(data)

                    $("#projectTable > tbody").empty();
                    // Populate the form
                    for (i = 0; i < data.length; i++) {
                        console.log(data[i])
                        console.log(data[i].Employees)
                        projId = data[i].id;
                        projName = data[i].name;
                        projDescript = data[i].description;
                        projMngFirst = data[i].Manager.first_name;
                        projMngLast = data[i].Manager.last_name;
                        projMngName = `${projMngFirst} ${projMngLast}`


                        projEmpFirst = data[i].Employees[0].first_name;
                        projEmpLast = data[i].Employees[0].last_name;
                        projEmpName = `${projEmpFirst} ${projEmpLast}`
                        console.log(projEmpName);

                        console.log(projDescript)
                        var newRow = $("<tr>").append(

                            $(`<button type='button' id=${data[i].id} data-attr=${data[i].id} class='button${data[i].id} btn-outline-dark btn'>`).text(projId),
                            $("<button>").text("Edit").addClass("edit-proj-btn btn-outline-dark btn").val(projId),
                            $("<td>").text(projName),
                            $("<td>").text(projDescript),
                            $("<td>").text(projMngName),

                            $("<td>").text(projEmpName),

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


    projectID.addEventListener('click', function (e) {
        e.preventDefault();
        console.log(e.target);
        let element = e.target;

        if (element.matches('button')) {
            projectDescriptor.textContent = " ";
            managerDetail.textContent = " ";
            employeeDetail.textContent = " ";
            timeline.textContent = " ";
            console.log("i'm a button");
            let attr = element.getAttribute('data-attr');
            fetch('/api/project/' + attr, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    // var result = Object.keys(data).map((key) => [String(key), data[key]]);
                    // console.log(result);
                    projectTitle.textContent = data.name;
                    console.log(data.Employee);
                    $(projectTitle).attr('style', 'font-style: italic; font-weight: bold');
                    let employee;
                    var desc = data.description;
                    var manager = "Manager: " + data.Manager.first_name + " " + data.Manager.last_name;
                    var managerEmail = "Manager contact: " + data.Manager.email;
                    employee = "Employee: " + data.Employees[0].first_name + " " + data.Employees[0].last_name;
                    var employeeEmail = "Employee contact: " + data.Employees[0].email;
                    var created = data.createdAt.substring(0, 10);
                    var createdDisplay = "Sprint start date: " + created;
                    var update = data.updatedAt.substring(0, 10);
                    var updateDisplay = "Last updated: " + update;
                    let showEmployee;
                    for (var i = 0; i < data.Employees.length; i++) {
                        employee = "Employee: " + data.Employees[i].first_name + " " + data.Employees[i].last_name;
                        employeeEmail = "Employee contact: " + data.Employees[i].email;
                        showEmployee = $("<div>").append(
                            $("<div>").text(employee).attr('style', 'font-weight: bold'),
                            $("<div>").text(employeeEmail),
                        );
                        $(employeeDetail).append(showEmployee);
                        console.log(showEmployee);
                    }

                    var showDesc = $("<div>").append(
                        $("<div>").text(desc),
                    );
                    var showManager = $("<div>").append(
                        $("<div>").text(manager).attr('style', 'font-weight: bold'),
                        $("<div>").text(managerEmail)
                    );

                    var showTimeline = $("<div>").append(
                        $("<div>").text(createdDisplay),
                        $("<div>").text(updateDisplay),
                    );
                    $(projectDescriptor).append(showDesc);
                    $(managerDetail).append(showManager);

                    $(timeline).append(showTimeline);
                })

        }
    });

    // const buttonClick = (e) => {
    //     fetch('/api/project', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {

    //         const test = (e) => {
    //             e.preventDefault();
    //             //console.log(data);
    //             console.log(e.target.textContent);

    //             if (data.id === e.target.textContent) {
    //                 console.log('hi');
    //             }
    //             for (var i=0; i < data.length; i++) {
    //                if (e.target.textContent === data.id){
    //                    console.log('hi')

    //             }}
    //         };


    //         $('.btn').on('click', test);


    // })};







    // const buttonClick = (id) => {
    //     fetch('/api/project', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {

    //         const test = "hello world"
    //         button.onclick = console.log(test);




    //         //     
    //         //     button.onclick = function() {
    //         //         console.log('button');
    //         //     }

    //         // if (data.id = button) {
    //         //     console.log('hello world');
    //         // }

    // })}









    const editProject = (e) => {
        id = e.target.value;
        // const updatedProject = {
        //     name: document.getElementById('name').value.trim(),
        //     description: document.getElementById('body').value.trim(),
        // };

        console.log(id)
        // console.log(updatedProject)
        window.location.href = `/project?id=${id}`
        // fetch(`/api/project/${id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(updatedProject),
        // })
        //     .then(() => {
        //         console.log("hello")
        //         window.location.href = '/project';
        //     })
        //     .catch((err) => console.error(err));
    };

    //  $(".edit-proj-btn").on("click", editProject);


    $(document).on("click", '.edit-proj-btn', editProject);



    // const getAllStuff = () => {
    //     // employeeId = employee || '';
    //     // if (employeeId) {
    //     //     employeeId = `/?employee_id=${employeeId}`;
    //     // }

    //     fetch('/api/employee_projects', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {

    //             console.log(data[0].Project);
    //             console.log(data[0].Employee);



    //         })


    // }
    // // .catch((error) => console.error('Error:', error));

    // getAllStuff()

});
