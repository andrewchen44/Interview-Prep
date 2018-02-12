// Design a parking lot with OOD

function Lot(size) {
  this.remainingSpots = size;
  this.cars = [];
  this.addVehicle = function(vehicle){
    spots.push(vehicle);
    this.remainingSpots--;
  };
  this.removeVehicle = function(vehicle){
    spots.pop(vehicle);
    this.remainingSpots++;
  }
  this.lotFull = (this.remainingSpots > 0);
};

function Level(number){
  Lot.call(this);
  this.level = numer;
};

function Vehicle(name, type){
  this.owner = name;
  this.turnOn = function() {};
  this.turnOff = function() {};
};

function Car(name){
  Vehicle.call(this, name);
  this.size = 'compact';
  this.model = 'car'
};

function Bus(name) {
  Vehicle.call(this, name);
  this.model = 'bus';
  this.size = 'large';
}

function Motorcycle(name){
  Vehicle.call(this, name);
  this.model = 'motorcyle';
  this.size = 'motorcyle';
}

function Driver(name, type) {
  this.name = name;
  if(type === 'car'){
    this.vehicle = new Car(name, 'car');
  } else if(type === 'bus') {
    this.vehicle = new Bus(name, 'bus');
  } else if(type === motorcyle) {
    this.vehicle = new Motorcyle(name, 'motorcyle');
  }
}