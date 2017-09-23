function createPopUpContent(titre, msg, action){
    return '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h1 id="firstHeading" class="firstHeading">' +
    titre +
    '</h1>' +
    '<div id="bodyContent">' +
    '<button id="btnPopUp" onclick="' +
    action + '">' +
    msg +
    '</button>' +
    '</div>' +
    '</div>';
}
function popUp(location, titre, msg, action) {
    var infowindow = new google.maps.InfoWindow({
        content: createPopUpContent(titre, msg, action)
    });
    infowindow.setPosition(location)
    infowindow.open(map);
    document.getElementById("btnPopUp").style = "background-image:url("+srcImgCreator("bg")+")";

}
function popUpTank(location, titre, msg, action) {
    currentPopUpTank = new google.maps.InfoWindow({
        content: createPopUpContent(titre, msg, action)
    });
    currentPopUpTank.setPosition(location)
    currentPopUpTank.open(map);
}
