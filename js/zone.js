function addZone() {
    var sw = new google.maps.LatLng(46.806405, 7.166539);
    var ne = new google.maps.LatLng(46.806409, 7.167999);
    var nw = new google.maps.LatLng(46.806809, 7.1676999);
    var se = new google.maps.LatLng(46.806609, 7.1676999);
    var bounds = new google.maps.LatLngBounds(sw, se, ne, nw);
    //var centerZ = bounds.getCenter();
    // Define a rectangle and set its editable property to true.
    var rectangle = new google.maps.Rectangle({
        bounds: bounds,
        map: map,
        editable: true,
        draggable: true
    });
    rectangle.setMap(map);
    rectangle.addListener('drag', function() {
        clearIcon();
    });
    rectangle.addListener('bounds_changed', function() {
        clearIcon();
    });
    zoneArray.push(rectangle);
}

function drawIconZone() {
    for (var i = 0; i < zoneArray.length; i++) {
        icZoneArray.push(addMarker(zoneArray[i].bounds.getCenter(), IC_GARAGE));
    }
}
