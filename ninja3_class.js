class Ninja {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;   
    }
    sayName(){
        console.log(`My ninja name is ${this.name}`);
    }  
    showStats(){
        console.log(`Name: ${this.name} Health: ${this.health} Speed: ${this.speed} Strength: ${this.strength}`)
    }
    drinkSake(){
        let sake = 10;
        this.health += sake;
        console.log(`${this.name} gained ${sake} health`);
    }
}
const ninjaNew1 = new Ninja("Angelo");

ninjaNew1.sayName();
ninjaNew1.showStats();
ninjaNew1.drinkSake();