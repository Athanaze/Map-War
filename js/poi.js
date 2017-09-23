function usePOI(location, name, types) {
    for (var i = 0; i < types.length; i++) {
        console.log(types[i]);
        switch (types[i]) {
            case "restaurant":
                popUp(location, name, "Voler l'intégralité du restaurant", "stealSmallShop()");
                break;
            case "gas_station":
                popUp(location, name, "Pomper tout le carburant | Faire un plein", "eat()");
                break;
            case "bank":
                popUp(location, name, "Faire un hold-up", "eat()");
                break;
            case "church":
                popUp(location, name, "Détruire pour le plaisir", "destroy()");
                break;
        }
    }
    console.log("---------------");
}
