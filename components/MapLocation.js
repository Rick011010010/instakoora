import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { useState, useEffect } from 'react'
import { GiCogLock } from "react-icons/gi";
import { signOut, useSession } from "next-auth/react";
import { IoMdLocate } from 'react-icons/io'

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
    const [Position, setPosition] = useState([])
    console.log(posLat, "hhhhhhfhfhhfhf")
    console.log(posLong, "mmmmmmmmmmm")
    console.log(Position, "Position1")
    const { data: session } = useSession();




    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);

            setPosLat(position.coords.latitude)
            setPosLong(position.coords.longitude)


        });



    }, [])

    

    useEffect(() => {

        const google_map_pos = new google.maps.LatLng(posLat, posLong);

        console.log(google_map_pos, "google_map_position")

        var google_maps_geocoder = new google.maps.Geocoder();

        google_maps_geocoder.geocode(
            { 'latLng': google_map_pos },


            function (results, status) {
                if (status == google.maps.GeocoderStatus.OK && results[2]) {
                    console.log(results[2].formatted_address);

                    setPosition(results[2].formatted_address)
                }


            }




        );

    })


    const center = ({ lat: posLat, lng: posLong })



    const addPosition = async (e) => {
        e.preventDefault();

        const response = await fetch("/api/position", {

            method: "Post",
            body: JSON.stringify({

                localisation: Position,
                username: session.user.name,
                email: session.user.email,
                createdAt: new Date().toString(),


            }),
            headers: {
                "Content-Type": "application/json",
            },


        })
        const responseData = await response.json();


        console.log(responseData, '123');

        


    }

    








    return (

        <GoogleMap zoom={14} center={center} mapContainerClassName="map-container">
            <button className="  absolute rounded-full py-2 mx-3 px-3 shadow-ms hover:shadow-xl active:scale-90 transition duration-150 bg-black bottom-0 left-20 flex" onClick={addPosition}><IoMdLocate size={20}/>use this current position </button>
            <MarkerF position={center} />
        </GoogleMap>
    );
}