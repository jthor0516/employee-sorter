import inquirer from "inquirer";
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
            return res;
        });
    }
    startEmployeeCli() {
        inquirer
            .prompt([
            {
                type: "input",
                name: "firstName",
                message: "Enter Employee First name"
            },
            {
                type: "input",
                name: "lastName",
                message: "Enter Employee last name"
            },
            {
                type: "list",
                name: "role_id",
                message: "Enter Employee role",
                choices: this.roles
            },
            {
                type: "list",
                name: "role_id",
                message: "Enter Manager ID",
                choices: this.employees
            },
        ]);
    }
}
export default Cli;
