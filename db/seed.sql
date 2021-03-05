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

INSERT INTO
    projects (
        name,
        description,
        manager_id,
        employee_id,
        createdAt,
        updatedAt
    )
VALUES
    (
        "TinCat",
        "Dating for cats",
        3,
        1,
        "2021-02-22 16:31:26",
        "2021-02-22 16:31:26"
    );

INSERT INTO
    roles (title, salary, createdAt, updatedAt)
VALUES
    (
        "Sales Lead",
        700000,
        "2021-02-22 16:31:26",
        "2021-02-22 16:31:26"
    );

INSERT INTO
    roles (title, salary, createdAt, updatedAt)
VALUES
    (
        "Lead Engineer",
        800000,
        "2021-02-22 16:31:47",
        "2021-02-22 16:31:47"
    ),
    (
        "Sales Lead",
        800000,
        "2021-02-22 16:31:47",
        "2021-02-22 16:31:47"
    ),
    (
        "Lead Designer",
        700000,
        "2021-02-22 16:31:47",
        "2021-02-22 16:31:47"
    ),
    (
        "Lead Financial Manager",
        900000,
        "2021-02-22 16:31:47",
        "2021-02-22 16:31:47"
    ),
    (
        "Software Engineer",
        600000,
        "2021-02-22 16:31:47",
        "2021-02-22 16:31:47"
    ),
    (
        "Sales Person",
        700000,
        "2021-02-22 16:31:4",
        "2021-02-22 16:31:47"
    ),
    (
        "UI/UX Designer",
        500000,
        " 2021 -02 -22 16 :31 :47 ",
        "2021 -02 -22 16 :31 :47"
    ),
    (
        "Accountant",
        600000,
        "2021-02-22 16:31:47",
        "2021-02-22 16:31:47"
    );

INSERT INTO
    managers (
        first_name,
        last_name,
        role_id,
        project_id,
        email,
        password,
        createdAt,
        updatedAt
    );

VALUES
    (
        "Lu",
        "Hao",
        1,
        1,
        "luH @gmail.com",
        "1234?",
        "2021 -02 -22 16 :32 :49",
        "2021 -02 -22 16 :32 :49"
    ),
    (
        "Johnnie",
        "Simpson",
        2,
        2,
        "johnnieS@gmail.com",
        "1234?!",
        '2021-02-22 16:32:56',
        '2021-02-22 16:32:56'
    ),
    (
        "Mengyue",
        "Zhang",
        3,
        3,
        "mengyueZ@gmail.com",
        "1234?!Wow",
        '2021-02-22 16:33:05',
        '2021-02-22 16:33:05'
    ),
    (
        "Amir",
        "Ashtiany",
        4,
        4,
        "amirA@gmail.com",
        "1234?!WowThisIsSecret",
        '2021-02-22 16:33:07',
        '2021-02-22 16:33:07'
    );

INSERT INTO
    employees (
        first_name,
        last_name,
        role_id,
        project_id,
        email,
        password,
        createdAt,
        updatedAt
    )
VALUES
    (
        "Bruce",
        "Wayne",
        1,
        1,
        "bruce@gmail.com",
        "1234?",
        "2021-02-22 16:32:49",
        "2021-02-22 16:32:49"
    ),
    (
        "Peter",
        "Parker",
        2,
        2,
        "peter@gmail.com",
        "1234?!",
        "2021-02-22 16:32:56",
        "2021-02-22 16:32:56"
    ),
    (
        "Clark",
        "Kent",
        3,
        3,
        "clark@gmail.com",
        "1234?!Wow",
        "2021-02-22 16:33:05",
        "2021-02-22 16:33:05"
    ),
    (
        "Captain",
        "Marvel",
        4,
        4,
        "cmarvel@gmail.com",
        "1234?!WowThisIsSecret",
        "2021-02-22 16:33:07",
        "2021-02-22 16:33:07"
    );

INSERT INTO
    projects (
        name,
        description,
        manager_id,
        employee_id,
        createdAt,
        updatedAt
    )
VALUES
    (
        "TinCat",
        "Dating for cats!",
        6,
        1,
        "2021-02-22 16:32:49",
        "2021-02-22 16:32:49"
    ),
    (
        "Winery",
        "New Winery in town, needs a website",
        7,
        2,
        "2021-02-22 16:32:56",
        "2021-02-22 16:32:56"
    ),
    (
        "Brewery",
        "Brewery websites need revamping",
        8,
        3,
        "2021-02-22 16:33:05",
        "2021-02-22 16:33:05"
    ),
    (
        "Amazon",
        "Buy and sell items",
        9,
        4,
        "2021-02-22 16:33:07",
        "2021-02-22 16:33:07"
    );