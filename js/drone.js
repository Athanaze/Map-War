var fin;
var flightPath;
// Fonctionne uniquement avec drone et finish (le drapeau)
function deplacement(){
    var depart = drone.position;
    fin = finish.position;
    var distance = getDistanceTwoPoints(depart, fin);
    var speed = 16.6667; // [m/s]
    var travelTime = getTravelTime(distance, speed);
    moveHandler(getCoordByFrame(depart,fin, travelTime * 60));

    /*console.log("Distance :");
    console.log(getDistanceTwoPoints(depart, fin));
    console.log("Temps en seconde du déplacement :");
    console.log(travelTime);*/
    flightPath = new google.maps.Polyline({
        path: [drone.position, finish.position],
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });
    flightPath.setMap(map);
}

function getCoordByFrame(depart, fin, nbFrame){
    var c = [];
    var fraction;
    for (var i = 0; i <= nbFrame; i++) {
        fraction = (1 + i) / nbFrame;
        c.push(google.maps.geometry.spherical.interpolate(depart, fin, fraction));
    }
    return c;
}

function getDistanceTwoPoints(f, t){
    return google.maps.geometry.spherical.computeDistanceBetween(f,t);
}
function getTravelTime(distance, speed){
    // Distance [m], speed [s], return [m/s]
    return distance / speed;
}
function move(coord) {
    drone.setPosition(coord);
}


function setDestination() {
    wantNewPoint = true;
}

function moveHandler(c){
    var i = 0;
    var howManyTimes = c.length;
    function f() {
        move(c[i]);
        i++;
        if( i < howManyTimes ){
            setTimeout( f, 16.666 );
        }
    }
    f();
}
