DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

\c employees_db;

CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER,
    FOREIGN KEY (role_id)
    REFERENCES role(id)
    ON DELETE SET NULL
);

CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) UNIQUE SET NULL,
    dept_id INTEGER NOT NULL,
    salary DECIMAL NOT NULL,
    FOREIGN KEY (dept_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    dept_name VARCHAR(30) UNIQUE NOT NULL
);