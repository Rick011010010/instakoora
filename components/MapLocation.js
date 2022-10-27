import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { useState, useEffect } from 'react'
import { GiCogLock } from "react-icons/gi";

export default function Home() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;
}

function Map() {
    const [posLat, setPosLat] = useState(0)
    const [posLong, setPosLong] = useState(0)
    const [position, setPosition] = useState(0)
    console.log(posLat, "hhhhhhfhfhhfhf")
    console.log(posLong, "mmmmmmmmmmm")
    console.log(position, "position")


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);

            setPosLat(position.coords.latitude)
            setPosLong(position.coords.longitude)
            setPosition(position)

        });



    }, [])
    const google_map_pos = new google.maps.LatLng(posLat, posLong);
    console.log(google_map_pos, "google_map_position")
    var google_maps_geocoder = new google.maps.Geocoder();
    google_maps_geocoder.geocode(
        { 'latLng': google_map_pos },
        function (results, status) {
            if (status == google.maps.GeocoderStatus.OK && results[0]) {
                console.log(results[0].formatted_address);
            }
            console.log(results, "results");
        }
    );
    const center = ({ lat: posLat, lng: posLong })

    return (
        <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
            <MarkerF position={center} />
        </GoogleMap>
    );
}