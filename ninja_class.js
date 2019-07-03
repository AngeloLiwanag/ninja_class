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
    }

    this.drinkSake = function(){
      this.health += 10;
      console.log(this.name + " gained " + this.health)
    }
    
    Ninja.prototype.punch = function(otherNinja){
      if (otherNinja.name instanceof Ninja === true){
        otherNinja.health -= 5;
        console.log(otherNinja.name + ' was punched by ' + this.name + ' and lossed 5 health!')
        return otherNinja.health;
      } else {
        console.log("you are not a ninja");
      }

    }

    Ninja.prototype.kick = function(otherNinja){
      if (otherNinja.name instanceof Ninja === true){
        otherNinja.health -= 15;
        console.log(otherNinja.name + ' was kicked by ' + this.name + ' and lossed 15 health!')
        return otherNinja.health;
      } else {
        console.log('you are not a ninja')
      }
    }
}

function notNinja(name){
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;
}

var ninjaNew1 = new Ninja("Angelo");
var ninjaNew2 = new Ninja("Art");

var notNinjaNew1 = new notNinja('kian');

ninjaNew1.sayName();
ninjaNew1.showStats();
ninjaNew1.drinkSake();
ninjaNew1.punch(ninjaNew2);


ninjaNew1.punch(notNinjaNew1);

ninjaNew2.sayName();
ninjaNew2.showStats();

