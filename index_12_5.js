class Candy {
    constructor(name) {
        this.tasty = "delisious";
        this.name = name;
    }

    getWeight(weight){
        console.log(`${this.name}'s weight is ${weight} g`);
    }

}

class ChocoCandy extends Candy {
    constructor(name, choco) {
        super(name);
        this.choco = choco;
    }

    getWeight(weight){
        console.log(`Candy ${this.name} weight is ${weight} g`);
    }

}

const twix = new ChocoCandy("Twix", "milk");
const snickers = new Candy("Snickers");

twix.getWeight(47);
snickers.getWeight(50);