// Instruction to every other class
// on how they can be an argument to 'addMarker'
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  public googleMap: google.maps.Map;

  constructor(id: string) {
    google.maps.importLibrary("maps").then((response) => {
      if ("Map" in response) {
        const { Map } = response;
        const mapSelector = document.getElementById(id)!;
        this.googleMap = new Map(mapSelector, {
          center: { lat: 0, lng: 0 },
          zoom: 1,
        });
      }
    });
  }

  addMarker(mappable: Mappable): void {
    google.maps.importLibrary("marker").then((response) => {
      if ("Marker" in response) {
        const { Marker } = response;
        const marker = new Marker({
          map: this.googleMap,
          position: { lat: mappable.location.lat, lng: mappable.location.lng },
        });
        marker.addListener("click", () => {
          google.maps.importLibrary("maps").then((response) => {
            if ("InfoWindow" in response) {
              const { InfoWindow } = response;
              const infoWindow = new InfoWindow({
                content: mappable.markerContent(),
              });
              infoWindow.open(this.googleMap, marker);
            }
          });
        });
      }
    });
  }
}
