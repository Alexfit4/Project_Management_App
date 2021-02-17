INSERT INTO
    project (project)
VALUES
    ('Landing Page'),
    ('Game'),
    ('Napster'),
    ('Weather App');
    
    INSERT INTO
    role (title, salary, project_id)
VALUES
    ('Tech Lead', 50000, 2),
    ('Lead Graphic Design', 30000, 1),
    ('Lead Engineer', 60000, 4),
    ('Lead Digital Marketer', 30000, 3);

INSERT INTO
    employee (
        first_name,
        last_name,
        project_id,
        role_id,
        manager_id,
        email,
        password
    )
VALUES
    (
        'Johnnie',
        'Simpson',
        2,
        1,
        1,
        'johnnie@gmail.com',
        'password1234'
    ),
    (
        'Lu',
        'Hao',
        1,
        2,
        2,
        'lu@gmail.com',
        'pass1234'
    ),
    (
        'Mengyue ',
        'Zhang',
        3,
        4,
        4,
        'mengyue@gmail.com',
        'pass12345'
    ),
    (
        'Amir ',
        'Ashtiany',
        4,
        3,
        3,
        'amir@gmail.com',
        'ineedabetterpassword1'
    );
