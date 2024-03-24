// /* eslint-disable react/no-unknown-property */
// /* eslint-disable no-unused-vars */
// import React from "react";

// const Location = () => {
//   return (
//     <>
//       <span id="location"></span>
//       <section data-aos="fade-up" className="">
//         <div className="container my-4">
//           <h1 className="inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl">
//             Location: 
//           </h1>

//           <div className="rounded-xl ">
//             <iframe
//               src="https://www.google.com/maps/embed/v1/place?q=Netaji+Subhash+Engineering+College,+Techno+City,+Garia,+West+Bengal,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
//               width="100%"
//               height="360"
//               allowfullscreen=""
//               loading="lazy"
//               referrerpolicy="no-referrer-when-downgrade"
//               style={{ borderRadius: "20px" }}
//             ></iframe>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Location;

/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

const Location = () => {
  useEffect(() => {
    // Initialize HERE Maps platform with your API key
    const platform = new H.service.Platform({
      apikey: 'wX8XPC8nafBavveQLDl9NxshWXONNrU4oemMWlNQ_iI'
    });

    // Obtain the default map types from the platform
    const defaultLayers = platform.createDefaultLayers();

    // Instantiate and display a map
    const map = new H.Map(
      document.getElementById('map'),
      defaultLayers.vector.normal.map,
      {
        center: { lat: 22.5449, lng: 88.345 }, // Replace with desired coordinates
        zoom: 15
      }
    );

    // Enable the event system on the map instance:
    const mapEvents = new H.mapevents.MapEvents(map);

    // Instantiate the default behavior, providing the mapEvents object:
    new H.mapevents.Behavior(mapEvents);

    return () => {
      // Clean up resources
      map.dispose();
    };
  }, []); // Empty dependency array to run this effect only once on component mount

  return (
    <>
      <span id="location"></span>
      <section data-aos="fade-up" className="">
        <div className="container my-4">
          <h1 className="inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl">
            Location: 
          </h1>

          <div id="map" style={{ width: "100%", height: "360px", borderRadius: "20px" }}></div>
        </div>
      </section>
    </>
  );
};

export default Location;
