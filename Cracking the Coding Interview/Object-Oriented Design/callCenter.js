// Create OOD for a call center


function Center() {
    this.employees = [];
    this.addEmployee = this.employees.push(new Employee())
    
}

function Employee(name) {
    this.name = name;
    this.receiveCall = function () {};
    this.escalateCall = function() {};
    this.endCall = function() {};

}

function Respondent(name, position) {
    Employee.call(this, name);
    this.position = position;
}