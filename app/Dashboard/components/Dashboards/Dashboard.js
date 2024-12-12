'use client';

import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, Polyline } from '@react-google-maps/api';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogTrigger,
} from '@/components/ui/dialog';

const containerStyle = {
  width: '100%',
  height: '600px',
};

const busNames = ['P1 Bus', 'Muthaiga Bus', 'Lavington Bus', 'SSD Bus', 'Karen Bus'];
const busRoutes = [
  [
    { lat: -1.286389, lng: 36.817223 },
    { lat: -1.287, lng: 36.818 },
    { lat: -1.288, lng: 36.819 },
    { lat: -1.289, lng: 36.820 },
  ],
  [
    { lat: -1.290, lng: 36.821 },
    { lat: -1.291, lng: 36.822 },
    { lat: -1.292, lng: 36.823 },
    { lat: -1.293, lng: 36.824 },
  ],
  [
    { lat: -1.294, lng: 36.825 },
    { lat: -1.295, lng: 36.826 },
    { lat: -1.296, lng: 36.827 },
    { lat: -1.297, lng: 36.828 },
  ],
  [
    { lat: -1.298, lng: 36.829 },
    { lat: -1.299, lng: 36.830 },
    { lat: -1.300, lng: 36.831 },
    { lat: -1.301, lng: 36.832 },
  ],
  [
    { lat: -1.300, lng: 36.834 },
    { lat: -1.301, lng: 36.835 },
    { lat: -1.302, lng: 36.836 },
    { lat: -1.303, lng: 36.837 },
  ],
];

const Dashboard = () => {
  const googleMapsApiKey = 'AIzaSyBv8BOxralpTmLYQQLtlG3zE0klGFzgsL4'; // Add your API key here

  const [busPositions, setBusPositions] = useState(busRoutes.map(route => route[0]));
  const [paths, setPaths] = useState(busRoutes.map(route => [route[0]]));
  const [indices, setIndices] = useState(Array(busRoutes.length).fill(0));
  const [busDetails, setBusDetails] = useState(
    busNames.map(name => ({
      name,
      departureTime: '08:00 AM',
      arrivalTime: '08:30 AM',
      status: 'On route',
    }))
  );

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
      <h1 className="text-xs text-muted-foreground mb-2">
        Real-Time Bus Tracking Dashboard
      </h1>

      {/* Container for Google Map */}
      <div className="border w-[1313px] h-[600px] mb-6">
        <LoadScript googleMapsApiKey={googleMapsApiKey}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={busPositions[0] || { lat: -1.286389, lng: 36.817223 }}
            zoom={14}
          >
            {busPositions.map((position, idx) => (
              <Marker key={idx} position={position} label={busNames[idx]} />
            ))}
            {paths.map((path, idx) => (
              <Polyline
                key={idx}
                path={path}
                options={{
                  strokeColor: ['#FF0000', '#00FF00', '#0000FF', '#FF00FF', '#FFA500'][idx],
                  strokeOpacity: 0.8,
                  strokeWeight: 2,
                }}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>

      {/* Cards with independent width */}
      <div className="flex flex-row gap-2 ">
  {busDetails.map((bus, idx) => (
    <div key={idx} className="w-full p-4 ">
      <Card className="shadow-lg border border-gray-200 w-full h-full">
        <CardHeader className="pb-3">
          <CardTitle>{bus.name}</CardTitle>
          <CardDescription className="leading-relaxed">{bus.status}</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription className="leading-relaxed">
            Departure Time: {bus.departureTime}
          </CardDescription>
          <CardDescription className="leading-relaxed">
            Arrival Time: {bus.arrivalTime}
          </CardDescription>
          <CardDescription className="leading-relaxed">
            Current Location: Lat {busPositions[idx].lat.toFixed(4)}, Lng{' '}
            {busPositions[idx].lng.toFixed(4)}
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Dialog>
            <DialogTrigger asChild>
              <Button>View Full Route</Button>
            </DialogTrigger>
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  ))}
</div>

    </div>
  );
};

export default Dashboard;
