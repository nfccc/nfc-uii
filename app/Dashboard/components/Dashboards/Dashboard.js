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
'use client'

import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker, Polyline } from "@react-google-maps/api";

const containerStyle = {
  width: "600%",
  height: "600px"
};

// Define the simulated route as an array of lat/lng coordinates
const simulatedRoute = [
  { lat: -1.286389, lng: 36.817223 }, // Start point (example in Nairobi)
  { lat: -1.287, lng: 36.818 },
  { lat: -1.288, lng: 36.819 },
  { lat: -1.289, lng: 36.820 },
  { lat: -1.290, lng: 36.821 },
  { lat: -1.291, lng: 36.822 }, // End point
  { lat: -1.300, lng: 36.840 }, // End point

];

const BusTrackingPage = () => {
  const googleMapsApiKey = 'AIzaSyBv8BOxralpTmLYQQLtlG3zE0klGFzgsL4';

  const [busPosition, setBusPosition] = useState(simulatedRoute[0]);
  const [path, setPath] = useState([simulatedRoute[0]]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Update the bus position every 2 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;

        if (nextIndex < simulatedRoute.length) {
          setBusPosition(simulatedRoute[nextIndex]);
          setPath((prevPath) => [...prevPath, simulatedRoute[nextIndex]]);
          return nextIndex;
        } else {
          clearInterval(interval); // Stop the interval at the end of the route
          return prevIndex;
        }
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Live Bus Tracking (Simulated)</h1>
      <LoadScript googleMapsApiKey={googleMapsApiKey}>
        <GoogleMap mapContainerStyle={containerStyle} center={busPosition} zoom={15}>
          <Marker position={busPosition} />
          <Polyline path={path} options={{ strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 2 }} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default BusTrackingPage;
