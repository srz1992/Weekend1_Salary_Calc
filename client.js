console.log('js');

let employees = [];
let monthlyTotal = 0;

class Employee {
    constructor (firstName,lastName,id,title,annualSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.title = title;
        this.annualSalary = annualSalary;
    }
}

$(document).ready(readyNow);

function readyNow(){
    $('#addButton').on('click', appendToTable)
    $('#addButton').on('click', clearInputs)
    displayTableHeader();
    
}

function appendToTable() {
    let newEmployee = new Employee ($('#firstNameIn').val(),$('#lastNameIn').val(),$('#idIn').val(),$('#titleIn').val(),$('#annualSalaryIn').val());
    employees.push(newEmployee);
    console.log(employees);   
    displayTable();
}

function displayTableHeader(){
    let displayHeader = $('#tableOutput')
    headerOutput = `<tr><th scope="col" >First Name</th>`;
    headerOutput+= `<th scope="col">Last Name</th>`;
    headerOutput+= `<th scope="col">ID</th>`;
    headerOutput+= `<th scope="col">Title</th>`;
    headerOutput+= `<th scope="col">Annual Salary</th></tr>`;
    displayHeader.append(headerOutput);
    
}

function displayTable(){
    let display = $('#tableOutput');
    display.empty();
    displayTableHeader();
    for (employee of employees) {
        let outputString = '<tr><td>' + employee.firstName + '</td>';
        outputString+= '<td>' + employee.lastName + '</td>';
        outputString+= '<td>' + employee.id + '</td>';
        outputString+= '<td>' + employee.title + '</td>';
        outputString+= '<td>' + employee.annualSalary + '</td>';
        outputString+= '</tr>';
        display.append(outputString);
    }
}

function clearInputs(){
    $('.reset').val('');
}
