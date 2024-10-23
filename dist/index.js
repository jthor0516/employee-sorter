import express from 'express';
import { pg } from "pg";
import { connectToDb } from './connection.js';
import inquirer from 'inquirer';
await connectToDb();
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const { Client } = pg;
const client = new Client();
class Cli {
    constructor(employees, department, roles) {
        Object.defineProperty(this, "employees", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "department", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "roles", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.employees = employees;
        this.department = department;
        this.roles = roles;
    }
    startCli() {
        inquirer
            .prompt([{
                type: 'list',
                name: 'action',
                message: 'what do you want to do',
                choices: [
                    'add employee',
                    'view employees',
                    'view departments',
                    'view roles'
                ]
            }
        ])
            .then((res) => {
            switch (res.action) {
                case 'add employee':
                    this.startEmployeeCli();
            }
        });
    }
}
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
