const inquirer = require('inquirer'); // import required packages
const fs = require('fs');
const path = require('path');
const { emit, addListener } = require('process');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');
const console = require('console');


let i = 0;
let teamMembers = []; // create array for teamMembers


const managerQues = [ // array of questions for manager input
    {
        type: 'input',
        name: 'name',
        message: ' What is your team manager\'s name?',
        default: 'Mike'
    },

    {
        type: 'input',
        name: 'Id',
        message: ' What is your employee ID? ',
        default: 1
    },

    {
        type: 'input',
        name: 'Email',
        message: ' What is your email address? ',
        default: 'one@mike.com'
    },

    {
        type: 'input',
        name: 'Office_Num',
        message: ' What is your office number? ',
        default: 1
    },

]

function start() { // initiates prompt sequences starting w/ manager
    inquirer.prompt(managerQues).then((inquirerResponses) => {
        const newManager = new Manager(inquirerResponses.name, inquirerResponses.Id, inquirerResponses.Email, inquirerResponses.Office_Num);
        teamMembers.push(newManager);
        menuOption();
    });
}
start();

function menuOption(inquirerResponses) { // prompt following each Employee added
    inquirer.prompt({
        type: 'list',
        name: 'choice',
        message: 'What do you want to do next?',
        choices: ['Add an Intern', 'Add an Engineer', 'Finished']
    }).then((answers) => {
        if (answers.choice === 'Add an Intern') {
            addIntern()
        }
        if (answers.choice === 'Add an Engineer') {
            addEngineer()
        }
        if (answers.choice === 'Finished') {
            // add function to build html document
            writeToFile('index.html', generateHtml());
            console.log('%cGenerating HTML page ...', 'color: green; background: yellow; font-size: 30px');
        }
    })
}

function addIntern() { // array of questions for Intern input
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: ' What is the name of the intern?',
            default: 'Intern1'
        },
        {
            type: 'input',
            name: 'Id',
            message: ' What is the interns Id?',
            default: 2
        },
        {
            type: 'input',
            name: 'Email',
            message: ' What is the interns?',
            default: 'Intern1@mike.com'
        },
        {
            type: 'input',
            name: 'School',
            message: 'What school did the intern attend?',
            default: 'GT Bootcamp'
        },

    ]).then((inquirerResponses) => {
        const newIntern = new Intern(inquirerResponses.name, inquirerResponses.Id, inquirerResponses.Email, inquirerResponses.School);
        teamMembers.push(newIntern);
        // console.log(teamMembers);
        menuOption();
    })
}


function addEngineer() { // array of questions for Engineer input
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: ' What is the name of the engineer?',
            default: 'Engineer1'
        },
        {
            type: 'input',
            name: 'Id',
            message: ' What is the engineer\'s Id?',
            default: 3
        },
        {
            type: 'input',
            name: 'Email',
            message: ' What is the engineers email?',
            default: 'Engineer1@mike.com'
        },
        {
            type: 'input',
            name: 'GitHub',
            message: 'What is the engineers GitHub account?',
            default: 'github.com/mike-gonz0'
        },
    ]).then((inquirerResponses) => {
        const newEngineer = new Engineer(inquirerResponses.name, inquirerResponses.Id, inquirerResponses.Email, inquirerResponses.GitHub);
        teamMembers.push(newEngineer);
        // console.log(teamMembers);
        menuOption(inquirerResponses);
    })
}


function writeToFile(fileName, data) { // this function is the template for writeToFile
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function generateHtml() { // function to generate HTML
    return `<!doctype html>
    <html lang="en">
    
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Bootstrap demo</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>
    
    <body>
    
        <nav class="navbar bg-dark mb-5">
            <div class="container-fluid mt-5 mb-5 text-center justify-content-center text-danger ">
                <h1>m group team generator</h1>
            </div>
        </nav>
    
    
        <div class=" mg card-group container-fluid d-flex justify-content-center cards-custom">
        ${managerInfoCard()}
        </div>
    
    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
        <script src="./test.js"></script>
        </body>
    
    </html>`
}


function managerInfoCard() {
    return `

    <div class="card border-success" style="max-width: 14rem">
                <div class="card-header border-success">
                    <h5 class="card-title m-2">${teamMembers[0].name}</h5>
                    <p>jobTitle: Manager</p>
                </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">employeeID: ${teamMembers[0].Id}</li>
            <li class="list-group-item"><a href="mailto: ${teamMembers[0].email}" target="_blank">Email: ${teamMembers[0].email}</a></li>
            <li class="list-group-item">Office Number: ${teamMembers[0].officeNumber}</li>
            </ul>
        </div>
        
        ${createTeamCards()}
        
        `
    
    }

function createTeamCards() {
    for (let i = 0; i < teamMembers.length; i++) {
        return newCard();
    }

}



function newCard() {
    i++;
    return `<div class="card border-success" style="max-width: 14rem">
                <div class="card-header border-success">
                    <h5>${teamMembers[i].name}</h5>
                    <p>jobTitle: ${teamMembers[i].role}</p>
                </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item text-success">employeeID:${teamMembers[i].Id}</li>
                <li class="list-group-item text-success">emailAddress:${teamMembers[i].email}</li>
                <li class="list-group-item text-success">officeNum:${teamMembers[i]}</li>
            </ul>
        </div>`;
        
}
