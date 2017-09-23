ids = ["motivation",SNIPER,TANK,TANK_TRUCK, SOLDIER];
for (var i = 0; i < ids.length; i++) {
    document.getElementById(ids[i]).src = srcImgCreator(ids[i]);
};
