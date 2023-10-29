// let cityName;
// let lngitude = null;
// let ltitude = null;
// let longi;
// let lati;
var Currentlocation = {
    cityName: "",
    longitude: "",
    latitude: "",
    longi: "",
    lati: ""
}

if ("geolocation" in navigator) {

    navigator.geolocation.getCurrentPosition(

        (position) => {
            Currentlocation.longitude = position.coords.longitude;
            Currentlocation.latitude = position.coords.latitude;

            console.log(`Latitude: ${Currentlocation.latitude}, longitude: ${Currentlocation.longitude}`);
            fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${Currentlocation.latitude}&longitude=${Currentlocation.longitude}&localityLanguage=en`)
                .then(response => {
                    return response.json()
                })
                .then(result => {
                    Currentlocation.cityName = result.city

                    // Dispatch a custom event after Currentlocation is updated
                    var locationUpdatedEvent = new Event('locationUpdated');
                    document.dispatchEvent(locationUpdatedEvent);
                })
                .catch(error => {
                    console.error("Error fetching data:", error);
                });
        },
        (error) => {
            console.error("Error getting user location:", error);
        }
    );
} else {
    console.error("Geolocation is not supported by this browser.");
}

window.Currentlocation = Currentlocation;
console.log(Currentlocation)