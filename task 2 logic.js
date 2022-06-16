const staticMass = [7,9,11]
const randomizeMass = [3,4,5,6,8,10]
const buildMass = [0,0,0,0,0,0,0,0,0]
const bool = true
let count = 0
while(true){
    randomizeMass.sort(() => Math.random() - 0.5)

    buildMass[0]=staticMass[0]
    buildMass[4]=staticMass[1]
    buildMass[8]=staticMass[2]

    buildMass[1]=randomizeMass[0]
    buildMass[2]=randomizeMass[1]
    buildMass[3]=randomizeMass[2]
    buildMass[5]=randomizeMass[3]
    buildMass[6]=randomizeMass[4]
    buildMass[7]=randomizeMass[5]

    if((buildMass[1]/buildMass[3]===2 || buildMass[3]/buildMass[1]===2) && (buildMass[2]/buildMass[6]===2 || buildMass[6]/buildMass[2]===2) && (buildMass[5]/buildMass[7]===2 || buildMass[7]/buildMass[5]===2)){

        console.log(count);
        console.log(buildMass);
        break;
    }
    else{
        count++;
    }
    
}
