//import express from 'express';
import { pool, connectToDb } from './connection.js';
import inquirer from 'inquirer';
await connectToDb();

function menu() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'what would you like to do?',
            choices: [
                'view departments',
                'view roles',
                'view employees',
                'add departments',
                'add roles',
                'add employees',
                'update employee role'
            ]
        }
    ]).then(response => {
        if (response.action === 'view departments') {
            viewDepartments()
        }else if (response.action === 'view roles') {
            viewRoles()
        }else if (response.action === 'view employees') {
            viewEmployees()
        }else if (response.action === 'add departments') {
            addDepartment()
        }else if (response.action === 'add roles') {
            addRole()
        }
    })
}

async function viewDepartments() {
   const {rows} = await pool.query('SELECT * FROM department')
   console.table(rows)
   menu()
}

async function viewRoles() {
    const {rows} = await pool.query('SELECT * FROM role')
    console.table(rows)
    menu()
 }

 async function viewEmployees() {
    const {rows} = await pool.query('SELECT * FROM employee')
    console.table(rows)
    menu()
 }

 async function addDepartment() {
    const answers = await inquirer.prompt({type: 'input',
        name:'newDept',
        message:'type the department you want to add'
    })
    await pool.query('INSERT INTO department (dept_name) values ($1)', [answers.newDept])
    console.log('your department has been added')
    menu()
 }

 async function addRole() {
    const {rows} = await pool.query('SELECT * FROM DEPARTMENT')
    const departments = rows.map(department => ({name: department.dept_name, value: department.id}))
    const answers = await inquirer.prompt([
        {type: 'input',
        name:'newRole',
        message:'type the role you want to add'
    },
    {
        type: 'input',
        name: 'newSalary',
        message: 'What is the new role salary?'
    },
    {
        type: 'list',
        name: 'deptID',
        message: 'Which department is this role?',
        choices: departments
    }
])
    await pool.query('INSERT INTO role (title, salary, dept_id) values ($1, $2, $3)', [answers.newRole, answers.newSalary, answers.deptID])
    console.log('your role has been added')
    menu()
 }

menu()
// let departmentList:choicesArray [] = []
// let employeeList:choicesArray[] = []
// let roleList:choicesArray[] = []

// pool.query("Select * from department")
// .then(({rows}) => {
//  departmentList = rows.map((dept => ({
//     name:dept.dept_name,
//     value:dept.id
// })))
// })
// pool.query("Select * from role")
// .then(({rows}) => {
//  roleList = rows.map(((role) => ({
//     name:role.title,
//     value:role.id
// })))

// pool.query("Select * from employee")
// .then(({rows}) => {
//  employeeList = rows.map((employee => ({
//     name:employee.first_name+" "+employee.last_name,
//     value:employee.id
// })))
// })
// })
// const myCli = new Cli(employeeList, departmentList, roleList)

// myCli.startCli().then((res:any)=> {
//     switch (res.action) {
//         case 'add employee':
//             myCli.startEmployeeCli()
//             break;
//         case 'view employee':
//             console.log(`a`),
//                 myCli.startCli();
//             break;
//         case 'view departments':
//             console.log(`a`);
//             myCli.startCli();
//             break;
//         case 'view roles':
//             console.log(`c`);
//             myCli.startCli();
//             break
//         default:
//             process.exit(0);
//     }
// })
//const PORT = process.env.PORT || 3001;
//const app = express();

//app.use(express.urlencoded({ extended: false }));
//app.use(express.json());

// const { Client } = pg;
// const client = new Client();
// await client.connect()



// app.listen(PORT, () => {
//     console.log(`Server running on ${PORT}`);
// })