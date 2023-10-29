document.addEventListener('locationUpdated', () => {
    
    console.log("Updated Currentlocation in other file:", window.Currentlocation);
    
    const coordinates = { lng: Currentlocation.longitude, lat: Currentlocation.latitude}
    var platform = new H.service.Platform({
        'apikey': 'ofAvyT-rI4DAhyVpFOsegudPIG6sulQRAt2HfggqEtQ'
    });
    
    // Obtain the default map types from the platform object:
    var defaultLayers = platform.createDefaultLayers();
    
    // Instantiate (and display) a map object:
    var map = new H.Map(
        document.getElementById('mapContainer'),
        defaultLayers.vector.normal.map,
        {
            zoom: 12,
            center: coordinates
        });
    
    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    map.addLayer(defaultLayers.vector.traffic.map);
    
});

