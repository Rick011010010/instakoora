import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { useState, useEffect } from 'react'

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


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);

            setPosLat(position.coords.latitude)
            setPosLong(position.coords.longitude)

        });


    }, [])
    const center = useMemo(() => ({ lat: posLat, lng: posLong }), []);

    return (
        <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
            <MarkerF position={center} />
        </GoogleMap>
    );
}