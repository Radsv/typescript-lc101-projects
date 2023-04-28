import{Payload} from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';

export class Rocket {
name : string;
totalCapacityKg : number;
cargoItems :Cargo [] = [];
astronauts : Astronaut [] = [];
constructor(name : string , totalCapacityKg  : number){
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;

}

sumMass( items: Payload[] ): number{
let totalMass = 0;
for(let i = 0; i < items.length; i++){
    totalMass += items[i].massKg;
}
return totalMass;

}

currentMassKg(): number{
let totalAstronautsWeight = this.sumMass(this.astronauts);
let totalCargoWeight = this.sumMass(this.cargoItems);

return totalAstronautsWeight + totalCargoWeight;

}

canAdd(item: Payload): boolean{

    this.currentMassKg() + item.massKg <= this.totalCapacityKg;

    return true;
}

addCargo(cargo: Cargo): boolean{

    if (this.canAdd(cargo)){

this.cargoItems.push(cargo);
        return true;
                
    }else{
        return false;
    }
}

addAstronaut(astronaut: Astronaut): boolean{

    if(this.canAdd(astronaut)){
        this.astronauts.push(astronaut);
        return true;
    }else{
        return false;
    }
}
}
