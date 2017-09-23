// ! Work only with 32 x 32 icons !
function iconCreator(name) {
    return {
        url: srcImgCreator(name),
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(16, 16)
    };
}

function srcImgCreator(name) {
    return "img/skin/" + SKIN + "/" + name + ".png";
}

function locationCreator(x, y) {
    return {
        lat: x,
        lng: y
    };
}

function rotate90() {
    var heading = map.getHeading() || 0;
    map.setHeading(heading + 90);
}
