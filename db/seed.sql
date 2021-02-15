USE projectManagement_db;

INSERT INTO
    project (project)
VALUES
    ('Landing Page'),
    ('Game'),
    ('Shopify'),
    ('Weather App');

    INSERT INTO
    employee (first_name, last_name, project_id, role_id, manager_id, email, password)
VALUES
    ('Johnnie', 'Simpson', 2, 1, null, 'johnnie@gmail.com', 'password1234' ),
    ('Lu', 'Hao', 1, 2, null, 'lu@gmail.com', 'pass1234' ),
    ('Mengyue ', 'Zhang', 3, 4, null, 'mengyue@gmail.com', 'pass12345') ,
    ('Amir ', 'Ashtiany', 4, 3, null, 'amir@gmail.com', 'ineedabetterpassword1' );


    INSERT INTO
    role (title, salary, project_id)
VALUES
    ('Tech Lead', 20000, 1),
    ('Graphic Design', 30000, 2),
    ('Engineer', 40000, 4),
    ('Data Science', 30000, 4);