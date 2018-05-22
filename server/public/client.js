console.log('js');

let employees = [];
let costs= 0;


class Employee {
    //create employee constructor
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
   //give submit button event listeners to run functions on click
    $('#addButton').on('click', appendToTable)
    $('#addButton').on('click', clearInputs)
    $('#addButton').on('click', calculateCosts)
    // toggleButton();
    // $('#addButton').attr('disabled', 'disabled');
    //display table header when document is ready
    displayTableHeader();
    //display monthly costs when document is ready
    displayMonthlyCosts();
    // $('#bttnsubmit').attr('disabled','disabled');
    //  $('input[type="text"]').keyup(function() {
    //     if($(this).val() != '') {
    //        $('input').removeAttr('disabled');
    //     }
    //  });
    
}

if ( $('input').val() == '') {
    $('#addButton').attr('disabled', 'disabled');
}
else {
    $('#addButton').removeAttr('disabled');
}

// function toggleButton(ref,bttnID){
//     document.getElementById(bttnID).disabled= ((ref.value !== ref.defaultValue) ? false : true);
//   }

// function toggleButton(){
//     if ( $('input').val() == '') {
//         $('#addButton').attr('disabled', 'disabled');
//     }
//     else {
//         $('#addButton').removeAttr('disabled');
//     }
// }

//pushes new employee object into array and appends new employee to table by running displayTable()
function appendToTable() {
    let newEmployee = new Employee ($('#firstNameIn').val(),$('#lastNameIn').val(),$('#idIn').val(),$('#titleIn').val(),$('#annualSalaryIn').val());
    employees.push(newEmployee);
    console.log(employees);   
    displayTable();
}

//displays table header
function displayTableHeader(){
    let displayHeader = $('#tableOutput')
    headerOutput = `<tr><th scope="col" >First Name</th>`;
    headerOutput+= `<th scope="col">Last Name</th>`;
    headerOutput+= `<th scope="col">ID</th>`;
    headerOutput+= `<th scope="col">Title</th>`;
    headerOutput+= `<th scope="col">Annual Salary</th>`;
    headerOutput+= `<th scope="col"></th></tr>`
    displayHeader.append(headerOutput);
}

//displays table. empties the table each time appendToTable is run, and then loops through
//the employees array so the new employees are always reflected in the table.
function displayTable(){
    let display = $('#tableOutput');
    display.empty();
    displayTableHeader();
    let identifier = 0;
    for (employee of employees) {
        let outputString = '<tr class="removeable"><td>' + employee.firstName + '</td>';
        outputString+= '<td>' + employee.lastName + '</td>';
        outputString+= '<td class="deleteInput">' + employee.id + '</td>';
        outputString+= '<td>' + employee.title + '</td>';
        outputString+= '<td>$' + employee.annualSalary + '</td>';
        outputString+= '<td><button class="removeRow"id='+'"' +identifier+'"'+'>Delete</button></td>';
        outputString+= '</tr>';        
        display.append(outputString);        
        identifier++;        
        
    }

    //adds event listener to submit button to delete button in each row
    $('.removeRow').on('click', removeTableRow)
    calculateCosts();
}

//clears input fields
function clearInputs(){
    $('.reset').val('');
}

//calculates the sum of all annual salaries
function calculateCosts(){
    costs = 0;
    for (employee of employees) {
        costs+= parseInt(employee.annualSalary);
        // console.log(costs);
    }
    displayMonthlyCosts();
}

//appends cost variable onto the DOM
function displayMonthlyCosts (){
    $('#monthlyCosts').empty();
    $('#monthlyCosts').append('<p> Monthly Costs: ' + costs/12 + '</p>');
    theCostsAreTooDamnHigh();
}

//assigns .cost-div css background color of red when the costs go over 20000.
function theCostsAreTooDamnHigh(){
    if (costs > 20000){
    $('.cost-div').css("background-color", "red");
    console.log('the costs are too damn high');
    }
    else {
     $('.cost-div').css("background-color", "")
    }
}

//removes table row
//should also delete the row's index from the array. working on that
function removeTableRow(){
    $(this).closest('tr').remove();
    let employeeIdentifier= Number($(this).attr('id'));
    console.log(employeeIdentifier);
    for (let employee = 0; employee<employees.length; employee++) {                
        if (employee==employeeIdentifier) {
            console.log('employee at employees['+employee+'] was deleted');
            
            employees.splice(employee, 1)
        }
    }
    displayTable();
 }
 

