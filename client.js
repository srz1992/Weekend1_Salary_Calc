console.log('js');

let employees = [];

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

}

function appendToTable() {
    console.log('this button works');
    let newEmployee = new Employee ($('#firstNameIn').val(),$('#lastNameIn').val(),$('#idIn').val(),$('#titleIn').val(),$('#annualSalaryIn').val());
    employees.push(newEmployee);
    console.log(employees);   
}

function displayTable(){
    
}

