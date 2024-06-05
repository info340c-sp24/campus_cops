import { APIProvider, Map, InfoWindow } from "@vis.gl/react-google-maps";

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
console.log(API_KEY);

export interface Location {
  name: string;
  coords: {
    lat: number;
    lng: number;
  };
  incidentType: string | undefined;
}

const UW_CAMPUS_COORD = {
  lat: 47.654833437246644,
  lng: -122.30618915218727,
};

function CampusMap(props: any) {
  return (
    <APIProvider apiKey={API_KEY!}>
      <Map
        mapId={"campusMap"}
        style={{ width: "100%", height: "500px" }}
        defaultCenter={UW_CAMPUS_COORD}
        defaultZoom={16}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      >
        {props.incidentLocations.map((location: Location) => {
          if (location.incidentType !== undefined) {
            return (
              <InfoWindow
                position={location.coords}
                headerDisabled={true}
                key={location.name}
              >
                {location.name + ", " + location.incidentType}
              </InfoWindow>
            );
          }
        })}
      </Map>
    </APIProvider>
  );
}

export { CampusMap };
