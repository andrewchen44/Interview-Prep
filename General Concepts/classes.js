// Regular Javascript Class
class superhero {
  constructor(name, power, speed){
    this.name = name;
    this.power = power;
    this.speed = speed;   
  }

  // Static methods can only be accessed from class (superhero.displaySpeed), not from class instance, thus has no this value
  static displaySpeed(speed) {
    console.log(speed)
  }

  announce() {
    console.log(`${this.name} has arrived to save the day!`)
  }

  displayPower() {
    console.log(this.power)
  }
}

// Javascfript Subclass
class Inhuman extends Superhero {
  constructor(){
    super()
  }

}

const superman = new superhero('superman', 100000, 100000);

// superman.displayPower();
superhero.displaySpeed(100);