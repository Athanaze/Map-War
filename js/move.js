function directionSetup() {
    directionsService = new google.maps.DirectionsService;
    directionsDisplay = new google.maps.DirectionsRenderer({
        draggable: true,
        map: map
    });
    directionsDisplay.addListener('directions_changed', function() {
        computeTotalDistance(directionsDisplay.getDirections());
    });
    //displayRoute('Perth, WA', 'Sydney, NSW', directionsService, directionsDisplay);
}
function displayRoute(origin, destination, service, display) {
    service.route({
        origin: origin,
        destination: destination,
        travelMode: 'DRIVING',
        avoidTolls: true,
    },
    function(response, status) {
        if (status === 'OK') {
            //console.log(response.routes[0].legs[0].steps);
            //console.log(response.geocoded_waypoints[1]);
            display.setDirections(response);
            currentPopUpTank.setContent(createPopUpContent("Tank n°99, prêt à la manoeuvre", "Aller en B", "deplacement()"));}
        else {
            alert('Could not display directions due to: ' + status);
        }
    });
}
function computeTotalDistance(result) {
    var total = 0;
    var myroute = result.routes[0];
    for (var i = 0; i < myroute.legs.length; i++) {
        total += myroute.legs[i].distance.value;
    }
    total = total / 1000;
    //console.log(total + ' km');
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
