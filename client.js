console.log('js');

let employees = [];
let costs= 0;

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
    $('#addButton').on('click', calculateCosts)
    displayTableHeader();
    displayMonthlyCosts();
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
        outputString+= '<td>$' + employee.annualSalary + '</td>';
        outputString+= '</tr>';
        display.append(outputString);
    }
}

function clearInputs(){
    $('.reset').val('');
}

function calculateCosts(){
    for (employee of employees) {
        costs+= parseInt(employee.annualSalary);
        console.log(costs);
    }
    displayMonthlyCosts()
}

function displayMonthlyCosts (){
    $('#monthlyCosts').empty();
    $('#monthlyCosts').append('<p> Monthly Costs: ' + costs + '</p>');
    theCostsAreTooDamnHigh();
}

function theCostsAreTooDamnHigh(){
    if (costs > 20000){
    $('.cost-div').css("background-color", "red");
    console.log('the costs are too damn high');
    
    }
}