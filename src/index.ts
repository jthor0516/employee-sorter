import express from 'express';
import pg, { QueryResult } from "pg";
import { pool, connectToDb } from './connection.js';
import inquirer from 'inquirer';

await connectToDb();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const { Client } = pg;
const client = new Client();
await client.connect()

class Cli {
    employees: string[];
    department: string[];
    roles: string[];
    constructor(employees: string[], department: string[], roles: string[]) {
        this.employees = employees
        this.department = department
        this.roles = roles
    }
    startCli(): void {
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
                        await startEmployeeCli()
                        break;
                    case 'view employee':
                        console.log(`a`),
                            this.startCli();
                        break;
                    case 'view departments':
                        console.log(`a`);
                        this.startCli();
                        break;
                    case 'view roles':
                        console.log(`c`);
                        this.startCli();
                        break
                    default:
                        process.exit(0);
                }
            })
    }
}
async function startEmployeeCli() {
const client = pool.connect();
try {
    const response = await inquirer.prompt([

    ])
    const answers = await client.query('', )
    console.log(`success`);
    console.table(answers.row)
} catch
    (err)
};

const result = await 

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})