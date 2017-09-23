var motivation = 95;
var money = 50000;
var nbSniper = 2;
var nbTank = 2;
var nbTankTruck = 2;
var nbSoldier = 10;

function score() {
    document.getElementById("motivationH").innerHTML = motivation + "%";
    document.getElementById("money").innerHTML = money + "$";
    document.getElementById("nbSniper").innerHTML = nbSniper;
    document.getElementById("nbTank").innerHTML = nbTank;
    document.getElementById("nbTankTruck").innerHTML = nbTankTruck;
    document.getElementById("nbSoldier").innerHTML = nbSoldier;
}

function addUnit(unit, nb) {
    if (confirm("Acheter "+nb+" "+getPrettyName(unit) + " : " + getPrice(unit) + " $") == true) {
        switch (unit) {
            case SNIPER:
                if (buy(PRICE_SNIPER)) {
                    nbSniper = nbSniper + nb;
                }
                break;

            case TANK:
                if (buy(PRICE_TANK)) {
                    nbTank = nbTank + nb;
                }
                break;

            case TANK_TRUCK:
                if (buy(PRICE_TANK_TRUCK)) {
                    nbTankTruck = nbTankTruck + nb;
                }
                break;

            case SOLDIER:
                if (buy(PRICE_SOLDIER)) {
                    nbSoldier = nbSoldier + nb;
                }
                break;
        }
        score();
    }
}

function getPrice(unit){
    switch (unit) {
        case SNIPER:
            return PRICE_SNIPER;
            break;
        case TANK:
            return PRICE_TANK;
            break;
        case TANK_TRUCK:
            return PRICE_TANK_TRUCK;
            break;
        case SOLDIER:
                return PRICE_SOLDIER;
            break;
    }
}

function getPrettyName(unit){
    switch (unit) {
        case SNIPER:
            return "Sniper";
            break;
        case TANK:
            return "Tank";
            break;
        case TANK_TRUCK:
            return "Tank truck";
            break;
        case SOLDIER:
            return "Soldat";
            break;
        case TRUCK:
            return "Camion";
            break;
    }
}

function buy(amount){
    if (money >= amount) {
        money = money - amount;
        return true;
    }
    else {
        return false;
    }
}

function getNumberUnit(unit){
    switch (unit) {
        case SOLDIER:
            return nbSoldier;
            break;
        case SOLDIER:
            return nbTank;
            break;
        case TANK_TRUCK:
            return nbTankTruck;
            break;
        case SNIPER:
            return nbSniper;
            break;
    }
}
