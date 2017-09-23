function addMarker(position, icon) {
    ma = new google.maps.Marker({
        position: position,
        map: map,
        icon: icon,
        anchor: new google.maps.Point(16, 16)
    });
    return ma;
}

// Ajoute un marker DRAGGABLE
function addMarkerD(position, icon) {
    ma = new google.maps.Marker({
        position: position,
        map: map,
        icon: icon,
        draggable: true,
        anchor: new google.maps.Point(16, 16)
    });
    return ma;
}

function addTank(position) {
    tank = addMarker(position, IC_TANK);
    tank.addListener('click', function() {
        popUpTank(position, "Tank n°99", "Déplacer", "setDestination()");
    });
    tankArray.push(tank);
}

function addDrone(position) {
    drone = addMarkerD(position, IC_DRONE);
    drone.addListener('dragend', function() {
        deplacement();
    });
}
function addFinish(position) {
    finish = addMarkerD(position, IC_FLAG);
}

function addFlag(position, start) {
    displayRoute(start, position, directionsService, directionsDisplay);
}
function addSniper(x, y) {
    sniper0 = new google.maps.Marker({
        position: {
            lat: x,
            lng: y
        },
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        anchor: new google.maps.Point(16, 16),
        icon: IC_SNIPER
    });
    markerArray.push(sniper0);
    drawRadius();
    sniper0.addListener('dragend', function() {
        for (var rad = 0; rad < radiusArray.length; rad++) {
            radiusArray[rad].setMap(null);
        };
        radiusArray = [];
        drawRadius();
    });
}

function clearIcon() {
    for (var ma = 0; ma < icZoneArray.length; ma++) {
        icZoneArray[ma].setMap(null);
    };
    icZoneArray = [];
    drawIconZone();
}

function drawRadius() {
    for (var i = 0; i < markerArray.length; i++) {
        radiusArray.push(new google.maps.Circle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            map: map,
            center: markerArray[i].position,
            radius: 100
        }));
    }
}
