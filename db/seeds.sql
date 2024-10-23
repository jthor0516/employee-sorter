INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES (joe, smith, 1, NULL);

INSERT INTO role (title, dept_id, salary)
VALUES (Senior Engineer, 1, 100000),
    (Junior Engineer, 1, 60000),
    (HR Manager, 2, 80000),
    (Janitor, 3, 40000);

INSERT INTO department (dept_name)
VALUES (Engineering),
    (HR),
    (Custodial);


