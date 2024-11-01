DROP DATABASE IF EXISTS employeestracker_db;
CREATE DATABASE employeestracker_db;

\c employeestracker_db;
CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    dept_name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    dept_id INTEGER NOT NULL,
    salary DECIMAL NOT NULL,
    FOREIGN KEY (dept_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER REFERENCES employee(id) on delete set null,
    FOREIGN KEY (role_id)
    REFERENCES role(id)
    ON DELETE SET NULL
);


