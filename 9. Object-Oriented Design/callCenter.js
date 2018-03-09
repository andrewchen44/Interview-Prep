// Create OOD for a call center


function Center() {
    this.employees = [];
    this.queue = [];

    this.hireEmployee = function(name, position) {
        if(type === 'respondent') {
            return new Respondent(name, position);
        } else if(type === 'manager') {
            return new Manager(name, position);
        } else if(type === 'director') {
            return new Director(name, position);
        }
    }
}

function Employee(name) {
    this.name = name;
    this.receiveCall = function () {};
    this.escalateCall = function() {};
    this.endCall = function() {};
};

function Respondent(name, position) {
    Employee.call(this, name);
    this.position = position;
};

function Manager(name, position) {
    Employee.call(this, name);
    this.position = position;
};

function Director(name, position) {
    Employee.call(this, name);
    this.position = position;
};