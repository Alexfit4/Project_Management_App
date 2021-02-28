// const { BIGINT } = require("sequelize");

// const { DatabaseError } = require("sequelize");

// const e = require("express");

// Wait for the DOM to completely load before we run our JS
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded! 🚀');
    feather.replace()

    const projectContainer = document.querySelector('.project-container');
    const projectDet = document.getElementById('projectDetail');
    const projectContent = document.getElementById('projectContent');
    let button = document.querySelector('.btn');

    let projectID = document.getElementById('projectTable');
    console.log(projectID);


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
                if (data.length > 0) {
                    console.log('Success in getting post:', data);
                    console.log(data)

                    $("#projectTable > tbody").empty();
                    // Populate the form
                    for (i = 0; i < data.length; i++) {
                        console.log(data[i])
                        projId = data[i].id;
                        projName = data[i].name;
                        projDescript = data[i].description;
                        projMngFirst = data[i].Manager.first_name;
                        projMngLast = data[i].Manager.last_name;
                        projMngName = `${projMngFirst} ${projMngLast}`


                        projEmpFirst = data[i].Employee.first_name;
                        projEmpLast = data[i].Employee.last_name;
                        projEmpName = `${projEmpFirst} ${projEmpLast}`

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
                    projectDet.textContent = data.name;
                    employees = [];
                    var desc = "Sprint description: " + data.description;
                    var manager = "Manager: " + data.Manager.first_name + " " + data.Manager.last_name;
                    var managerEmail = "Manager contact: " + data.Manager.email;
                    var employee = "Employee: " + data.Employee.first_name + " " + data.Employee.last_name;
                    var employeeEmail = "Employee contact: " + data.Employee.email;
                    // for (i=0; i< data.Employee.length; i++) {
                    //     console.log('hi there');
                    //     employees.push(data.Employee.first_name + " " + data.Employee.last_name);
                    // }
                    // console.log(employees);
                    //"Employee: " + data.Employee[i].first_name + " " + data.Employee[i].last_name;
                    var showSprint = $("<div>").append(
                        $("<div>").text(desc),
                        $("<div>").text(manager),
                        $("<div>").text(managerEmail),
                        $("<div>").text(employee),
                        $("<div>").text(employeeEmail),
                    )
                    $(projectContent).append(showSprint);
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




});
