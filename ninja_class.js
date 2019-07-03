// Assignment: Ninja Class
// Create a new object constructor called Ninja with the following attributes:

// name
// health
// speed (private)
// strength (private)
// Speed and strength should be 3 by default. Health should be 100 by default.

// Ninja should have the following methods:

// sayName() - This should log that Ninja's name to the console.
// showStats() - This should show the Ninja's name, strength, speed, and health.
// drinkSake() - This should add +10 Health to the Ninja

function Ninja(name, health){
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    this.sayName = function(){
        console.log("My ninja name is " + this.name);
    }

    this.showStats = function(){
        console.log("Name: " + this.name + " Health: " + this.health + " Speed: " + speed + " Strength: " + strength);
        return this;
    }

    this.drinkSake = function(){
      var sake = 10;
      this.health += sake;
      console.log(this.health)
    }
}

var ninjaNew = new Ninja("Angelo");

ninjaNew.sayName();
ninjaNew.showStats();
ninjaNew.drinkSake();
