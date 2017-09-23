var ClickEventHandler = function(map, origin) {
    this.origin = origin;
    this.map = map;
    this.directionsService = new google.maps.DirectionsService;
    this.directionsDisplay = new google.maps.DirectionsRenderer;
    this.directionsDisplay.setMap(map);
    this.placesService = new google.maps.places.PlacesService(map);
    this.infowindow = new google.maps.InfoWindow;
    this.infowindowContent = document.getElementById('infowindow-content');
    this.infowindow.setContent(this.infowindowContent);

    // Listen for clicks on the map.
    this.map.addListener('click', this.handleClick.bind(this));
};
ClickEventHandler.prototype.handleClick = function(event) {

    //Clic sur un POI
    if (event.placeId) {
        event.stop();
        this.getPlaceInformation(event.placeId);
    }

    //Clic nmp ou, y compris sur les POI
    if (wantNewPoint) {
        //console.log(tankArray[0].position);
        addFlag(event.latLng, tankArray[0].position);
        wantNewPoint = false;
    }
};
ClickEventHandler.prototype.getPlaceInformation = function(placeId) {
    var me = this;
    this.placesService.getDetails({
        placeId: placeId
    }, function(place, status) {
        if (status === 'OK') {
            me.infowindowContent.children['place-icon'].src = place.icon;
            me.infowindowContent.children['place-name'].textContent = place.name;
            usePOI(place.geometry.location, place.name, place.types);

        }
    });
};
