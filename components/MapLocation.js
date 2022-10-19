import Head from 'next/head'
import styles from '../styles/Home.module.css'
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
import { useState, useEffect } from 'react';

export default function MapLocation() {
    const [Map, setMap] = useState();
    const [pageIsMounted, setPageIsMounted] = useState(false);

    useEffect(() => {

        navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
            enableHighAccuracy: true
        })

        function successLocation(position) {
            setupMap([position.coords.longitude, position.coords.latitude])
        }

        function errorLocation() {
            setupMap([-2.24, 53.48])
        }
        

        

    }, [])




    mapboxgl.accessToken = 'pk.eyJ1Ijoib3Vzc2FtYTkyIiwiYSI6ImNsOWV1NjN4bzAweHUzdm84eGMwZXduZmsifQ.fJrotVNJx60QmyvDxhpkVQ';

    //   /**
    //    * Assign a unique id to each store. You'll use this `id`
    //    * later to associate each point on the map with a listing
    //    * in the sidebar.
    //    */
    // //   stores.features.forEach((store, i) => {
    // //     store.properties.id = i;
    // //   });

    function setupMap(center) {
        const map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/streets-v11",
            center: center,
            zoom: 15
        })
    }




    //   useEffect(() => {
    //     setPageIsMounted(true)
    //     const map = new mapboxgl.Map({
    //       container: 'map',
    //       style: 'mapbox://styles/mapbox/light-v10',
    //       center: [-77.034084, 38.909671],
    //       zoom: 12.5,
    //       // scrollZoom: false
    //     });

    //     // Add zoom and rotation controls to the map.
    //     map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    //     setMap(map);

    //   }, []);

    useEffect(() => {
        if (pageIsMounted) {
            Map.on('load', () => {
                Map.addSource('places', {
                    'type': 'geojson',

                });
                // buildLocationList(stores);
                // addMarkers();
            });
        }
        const nav = new mapboxgl.NavigationControl()
        

    });


    // //   /**
    // //    * Add a marker to the map for every store listing.
    // //    **/
    // //   function addMarkers() {
    // //     /* For each feature in the GeoJSON object above: */
    // //     for (const marker of stores.features) {
    // //       /* Create a div element for the marker. */
    // //       const el = document.createElement('div');
    // //       /* Assign a unique `id` to the marker. */
    // //       el.id = `marker-${marker.properties.id}`;
    // //       /* Assign the `marker` class to each marker for styling. */
    // //       el.className = 'marker';

    // //       /**
    // //        * Create a marker using the div element
    // //        * defined above and add it to the map.
    // //        **/
    // //       new mapboxgl.Marker(el, { offset: [0, -23] })
    // //         .setLngLat(marker.geometry.coordinates)
    // //         .addTo(Map);5

    // //       /**
    // //        * Listen to the element and when it is clicked, do three things:
    // //        * 1. Fly to the point
    // //        * 2. Close all other popups and display popup for clicked store
    // //        * 3. Highlight listing in sidebar (and remove highlight for all other listings)
    // //        **/
    // //       el.addEventListener('click', (e) => {
    // //         /* Fly to the point */
    // //         flyToStore(marker);
    // //         /* Close all other popups and display popup for clicked store */
    // //         createPopUp(marker);
    // //         /* Highlight listing in sidebar */
    // //         const activeItem = document.getElementsByClassName('active');
    // //         e.stopPropagation();
    // //         if (activeItem[0]) {
    // //           activeItem[0].classList.remove('active');
    // //         }
    // //         const listing = document.getElementById(
    // //           `listing-${marker.properties.id}`
    // //         );
    // //         listing.classList.add('active');
    // //       });
    // //     }
    // //   }

    // //   /**
    // //    * Add a listing for each store to the sidebar.
    // //    **/
    // //   function buildLocationList(stores) {
    // //     for (const store of stores.features) {
    // //       /* Add a new listing section to the sidebar. */
    // //       const listings = document.getElementById('listings');
    // //       const listing = listings.appendChild(document.createElement('div'));
    // //       /* Assign a unique `id` to the listing. */
    // //       listing.id = `listing-${store.properties.id}`;
    // //       /* Assign the `item` class to each listing for styling. */
    // //       listing.className = 'item';

    // //       /* Add the link to the individual listing created above. */
    // //       const link = listing.appendChild(document.createElement('a'));
    // //       link.href = '#';
    // //       link.className = 'title';
    // //       link.id = `link-${store.properties.id}`;
    // //       link.innerHTML = `${store.properties.address}`;

    // //       /* Add details to the individual listing. */
    // //       const details = listing.appendChild(document.createElement('div'));
    // //       details.innerHTML = `${store.properties.city}`;
    // //       if (store.properties.phone) {
    // //         details.innerHTML += ` &middot; ${store.properties.phoneFormatted}`;
    // //       }

    // //       /**
    // //        * Listen to the element and when it is clicked, do four things:
    // //        * 1. Update the `currentFeature` to the store associated with the clicked link
    // //        * 2. Fly to the point
    // //        * 3. Close all other popups and display popup for clicked store
    // //        * 4. Highlight listing in sidebar (and remove highlight for all other listings)
    // //        **/
    // //       link.addEventListener('click', function () {
    // //         for (const feature of stores.features) {
    // //           if (this.id === `link-${feature.properties.id}`) {
    // //             flyToStore(feature);
    // //             createPopUp(feature);
    // //           }
    // //         }
    // //         const activeItem = document.getElementsByClassName('active');
    // //         if (activeItem[0]) {
    // //           activeItem[0].classList.remove('active');
    // //         }
    // //         this.parentNode.classList.add('active');
    // //       });
    // //     }
    // //   }

    // //   /**
    // //    * Use Mapbox GL JS's `flyTo` to move the camera smoothly
    // //    * a given center point.
    // //    **/
    // //   function flyToStore(currentFeature) {
    // //     Map.flyTo({
    // //       center: currentFeature.geometry.coordinates,
    // //       zoom: 15
    // //     });
    // //   }

    /**
     * Create a Mapbox GL JS `Popup`.
     **/
    function createPopUp(currentFeature) {
        const popUps = document.getElementsByClassName('mapboxgl-popup');
        if (popUps[0]) popUps[0].remove();
        const popup = new mapboxgl.Popup({ closeOnClick: false })
            .setLngLat(currentFeature.geometry.coordinates)
            .setHTML(
                `<h3>Sweetgreen</h3><h4>${currentFeature.properties.address}</h4>`
            )
            .addTo(Map);
    }


    return (
        <div className={styles.container}>
            <Head>
                <title>Mapbox Store Location</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v2.9.1/mapbox-gl.css' rel='stylesheet' />
            </Head>


            <div id="map" className="map rounded-lg"></div>

            <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v2.9.1/mapbox-gl.js'></script>
        </div>
    )
}