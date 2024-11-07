// 'use client';
// import React from 'react';
// import dynamic from 'next/dynamic';
// import 'leaflet/dist/leaflet.css';

// // Dynamically import MapContainer with no SSR
// const DynamicMapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
// const DynamicTileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
// const DynamicMarker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
// const DynamicPopup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });
// import { Button } from '@/components/ui/button';
// import { Progress } from "@/components/ui/progress"


// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"

// // Mock data for demonstration
// const mockData = {
 
//   bus1Location: {
//     lat: 37.7749,
//     lng: -122.4194,
//   },
// };

// const Dashboard = () => {
//   return (
//     <div className='mt-10'>  
      
//     <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
//   <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">


// <div>Bus 1 Location</div>

// {/* Map Section */}
// <Card title="Bus 1 Location">
//   <div className="relative z-0">
   
//   </div>
// </Card>
// <Card title="Bus 1 Location">
//   <div className="relative z-0">
   
//   </div>
// </Card>









//       {/* Quick Actions */}
     
//     </div>
//     </main>
//     </div>

//   );
// };





// // Quick Action Button Component
// const QuickActionButton = ({ title }) => (
//   <button className="bg-gray-100 p-6 rounded-lg shadow-md flex items-center justify-center text-blue-600 hover:bg-gray-200">
//     {title}
//   </button>
// );

// export default Dashboard;


"use client";

import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Set your Mapbox access token here
mapboxgl.accessToken = 'pk.eyJ1IjoibmZjNzg4IiwiYSI6ImNtMzZnOGc3eDA0cHoydnIzNGJoNDZkNW0ifQ.g7koXAKFr69MB-USGTXr8g';

const busLocations = [
  { id: 'p1BusMap', name: 'P1 Bus', coordinates: [36.8219, -1.2921] }, // Example: Nairobi
  { id: 'muthaigaBusMap', name: 'Muthaiga Bus', coordinates: [36.8172, -1.2877] }, // Example: Muthaiga
  { id: 'lavingtonBusMap', name: 'Lavington Bus', coordinates: [36.7732, -1.2664] }, // Example: Lavington
  { id: 'ssdBusMap', name: 'SSD Bus', coordinates: [36.7266, -1.2607] }, // Example: SSD area
  { id: 'karenBusMap', name: 'Karen Bus', coordinates: [36.7192, -1.3032] }, // Example: Karen
];

const App = () => {
  useEffect(() => {
    // Initialize maps for each bus location
    busLocations.forEach((bus) => {
      const map = new mapboxgl.Map({
        container: bus.id, // Container ID
        style: 'mapbox://styles/mapbox/streets-v11', // Map style
        center: bus.coordinates, // Coordinates for each bus location
        zoom: 11,
      });

      // Add a marker at each bus location
      new mapboxgl.Marker()
        .setLngLat(bus.coordinates)
        .setPopup(new mapboxgl.Popup().setText(bus.name)) // Popup with bus name
        .addTo(map);
    });
  }, []);

  return (
    <div className='ml-6'>
      
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {busLocations.map((bus) => (
          <div key={bus.id} style={{ width: '200px', height: '200px', border: '1px solid #ccc', borderRadius: '8px', padding: '5px' }}>
            <h4 style={{ margin: '5px 0', textAlign: 'center' }}>{bus.name}</h4>
            <div id={bus.id} style={{ width: '100%', height: '100%' }}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
