const SNIPER = "sniper";
const TANK = "tank";
const TANK_TRUCK = "tankTruck";
const SOLDIER = "soldier";
const TRUCK = "truck";
const DRONE = "drone";
//Type of unit
const WORKER = "worker";
const TRANSPORT = "transport";
//Prices of each unit
const PRICE_SNIPER = 100;
const PRICE_TANK = 10000;
const PRICE_SOLDIER = 100;
const PRICE_TANK_TRUCK = 20000;


const GARAGE = "garage";
const FLAG = "flag";
//strings
const STR_ET = "Temps estimé : ";

SKIN = "white";
//Icons

// ! Work only with 32 x 32 icons !
function icC(name) {
    return {
        url: sIC(name),
        size: {width: 32, height:32},
        origin: {x: 0, y:0},
        anchor: {x: 16, y:16},
    };
}
function sIC(name) {
    return "img/skin/" + SKIN + "/" + name + ".png";
}

var IC_SNIPER = icC(SNIPER);
var IC_GARAGE = icC(GARAGE);
var IC_TANK = icC(TANK);
var IC_FLAG = icC(FLAG);
var IC_DRONE = icC(DRONE)
//ActionsPOI
const STEAL = {
    unit:[{
            unit: SOLDIER,
            type: WORKER,
            // En minute, le temps que fait 1 homme pour accomplir la tache
            time: 120,
            // le nombre maximal d'hommes qui peuvent acomplir la tache
            nbMax:5
        },
        {
            unit: TRUCK,
            type: TRANSPORT,
            nbMax: 1
        }
    ]
};
