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
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const containerStyle = {
  width: "120%",
  height: "600px"
};

// Define simulated routes for four buses
const busRoutes = [
  [
    { lat: -1.286389, lng: 36.817223 },
    { lat: -1.287, lng: 36.818 },
    { lat: -1.288, lng: 36.819 },
    { lat: -1.289, lng: 36.820 }
  ],
  [
    { lat: -1.290, lng: 36.821 },
    { lat: -1.291, lng: 36.822 },
    { lat: -1.292, lng: 36.823 },
    { lat: -1.293, lng: 36.824 }
  ],
  [
    { lat: -1.294, lng: 36.825 },
    { lat: -1.295, lng: 36.826 },
    { lat: -1.296, lng: 36.827 },
    { lat: -1.297, lng: 36.828 }
  ],
  [
    { lat: -1.298, lng: 36.829 },
    { lat: -1.299, lng: 36.830 },
    { lat: -1.300, lng: 36.831 },
    { lat: -1.301, lng: 36.832 }
  ]
];

const BusTrackingPage = () => {
  const googleMapsApiKey = '';

  const [busPositions, setBusPositions] = useState(busRoutes.map(route => route[0]));
  const [paths, setPaths] = useState(busRoutes.map(route => [route[0]]));
  const [indices, setIndices] = useState(Array(busRoutes.length).fill(0));

  useEffect(() => {
    const interval = setInterval(() => {
      setIndices((prevIndices) => {
        return prevIndices.map((index, busIndex) => {
          const nextIndex = index + 1;
          if (nextIndex < busRoutes[busIndex].length) {
            setBusPositions((prevPositions) => {
              const newPositions = [...prevPositions];
              newPositions[busIndex] = busRoutes[busIndex][nextIndex];
              return newPositions;
            });
            setPaths((prevPaths) => {
              const newPaths = [...prevPaths];
              newPaths[busIndex] = [...newPaths[busIndex], busRoutes[busIndex][nextIndex]];
              return newPaths;
            });
            return nextIndex;
          }
          return index;
        });
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ml-6">
      <header>
        <h1 className="text-xs text-muted-foreground mb-2">Real-Time Bus Tracking Dashboard</h1>
        
      </header>
      <LoadScript googleMapsApiKey={googleMapsApiKey}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={busPositions[0] || { lat: -1.286389, lng: 36.817223 }}
          zoom={14}
        >
          {busPositions.map((position, idx) => (
            <Marker key={idx} position={position} label={`Bus ${idx + 1}`} />
          ))}
          {paths.map((path, idx) => (
            <Polyline
              key={idx}
              path={path}
              options={{
                strokeColor: ["#FF0000", "#00FF00", "#0000FF", "#FF00FF"][idx],
                strokeOpacity: 0.8,
                strokeWeight: 2
              }}
            />
          ))}
        </GoogleMap>
      </LoadScript>
        

    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">



      
{/* Total Attendance This Month Card */}
<Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
  <CardHeader className="pb-3">
    <CardTitle>Total Attendance This Month</CardTitle>
    <CardDescription className="max-w-lg text-balance leading-relaxed">
      The total number of attendance recorded for this month.
    </CardDescription>
  </CardHeader>
  <CardContent>
    <div className="text-4xl font-bold">3,200</div> {/* Replace with actual data */}
  </CardContent>
  <CardFooter>
    <Dialog>
      <DialogTrigger asChild>
        <Button>View Attendance Report</Button>
      </DialogTrigger>
    </Dialog>
  </CardFooter>
</Card>

{/* Average Attendance Rate Card */}
<Card x-chunk="dashboard-05-chunk-1">
  <CardHeader className="pb-2">
    <CardDescription>Average Attendance Rate</CardDescription>
    <CardTitle className="text-4xl">85%</CardTitle> {/* Replace with actual data */}
  </CardHeader>
  <CardContent>
    <div className="text-xs text-muted-foreground mb-2">
      +2% from last month
    </div>
    <Progress value={2} aria-label="2% increase" />
  </CardContent>
  <CardFooter />
</Card>

{/* Absent Students This Week Card */}
<Card x-chunk="dashboard-05-chunk-2">
  <CardHeader className="pb-2">
    <CardDescription>Absent Students This Week</CardDescription>
    <CardTitle className="text-4xl">30</CardTitle> {/* Replace with actual data */}
  </CardHeader>
  <CardContent>
    <div className="text-xs text-muted-foreground mb-2">
      -10% from last week
    </div>
    <Progress value={-10} aria-label="10% decrease" />
  </CardContent>
  <CardFooter />
</Card>

{/* Students with Perfect Attendance Card */}
<Card x-chunk="dashboard-05-chunk-3">
  <CardHeader className="pb-2">
    <CardDescription>Students with Perfect Attendance</CardDescription>
    <CardTitle className="text-4xl">12</CardTitle> {/* Replace with actual data */}
  </CardHeader>
  <CardContent>
    <div className="text-xs text-muted-foreground mb-2">
      +3 from last month
    </div>
    <Progress value={3} aria-label="3% increase" />
  </CardContent>
  <CardFooter />
</Card>
</div>
    </div>
  );
};

export default BusTrackingPage;
