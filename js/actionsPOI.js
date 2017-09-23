function destroy(){
    if (unitsCalling(TANK, 4)){
        alert("Les tanks sont dans la place ! ");
    }
}

function stealSmallShop() {
    if (unitsCalling(SOLDIER, 11)){
        alert("Les équipes sont présentes ! ");
    }
}

function unitsCalling(units, quanti, location){
    var res = requestUnits(units, quanti);
    if (res) {
        //Déplacer les unitées vers la location, quand fini return true
        return true;
    }
}

function requestUnits(unit, quanti){
    if (getNumberUnit(unit) < quanti) {
        alert("Pas assez de " + getPrettyName(unit) +" dispos");
        return false;
    }
    else {
        alert("YEAH BOIIII ON A ASSEZ DE " + getPrettyName(unit));
        return true;
    }
}

function getInputAM() {
    var inputNbUnit = document.getElementById("inputNbUnit");
    return inputNbUnit.value;
}

function submitAM(){
    alert("eeeeh validéééé");
}
function estimateTime(nbUnit, task) {
    switch (task) {
        case "steal":
            return STEAL.unit[0].time / nbUnit;
            break;
    }
}
function refreshAM(){
    var eT = estimateTime(getInputAM(), "steal");
    var eTh;
    var txt;
    if (eT >= 60) {
        while (eT >= 60) {
            var mod = eT % 60;
            eTh = (eT / 60) - mod;
            eT = eT - (eTh * 60);
        }
        if (eT > 0) {
            txt = STR_ET+eTh+"h "+eT+"min";
        }
        else {
            txt = STR_ET+eTh+"h";
        }
    }
    else {
        txt = STR_ET+eT+"min";
    }
    document.getElementById("estimateTime").innerHTML = txt;
}

function setupAM() {
    console.log("setup...");
    document.getElementById("inputNbUnit").setAttribute("max",STEAL.unit[0].nbMax);
    refreshAM();
}
