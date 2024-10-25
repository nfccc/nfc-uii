'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// Dynamically import MapContainer with no SSR
const DynamicMapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const DynamicTileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const DynamicMarker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const DynamicPopup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });
import { Button } from '@/components/ui/button';
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

// Mock data for demonstration
const mockData = {
  totalStudents: 520,
  activeReaders: 18,
  notificationsSent: 150,
  newRegistrations: 12,
  systemAlerts: [
    { id: 1, message: 'NFC Reader in Bus 2 is offline', type: 'warning' },
    { id: 2, message: 'Unregistered NFC tag detected', type: 'alert' },
  ],
  latestAnnouncement: "School Closed Tomorrow Due to Weather",
  busStatus: [
    { id: 1, busNumber: "Bus 1", studentCount: 45, status: "On Route" },
    { id: 2, busNumber: "Bus 2", studentCount: 30, status: "Stationary" },
  ],
  classroomAttendance: [
    { id: 1, classroom: "Grade 3A", attendanceRate: 85 },
    { id: 2, classroom: "Grade 4B", attendanceRate: 92 },
  ],
  smsDeliverySuccessRate: 98,
  replacementTagsIssuedToday: 5,
  unregisteredEvents: [
    { id: 1, message: "Invalid tag detected at Classroom 3A", timestamp: "10:45 AM" },
    { id: 2, message: "Unregistered tap at Bus 2", timestamp: "11:00 AM" },
  ],
  bus1Location: {
    lat: 37.7749,
    lng: -122.4194,
  },
};

const Dashboard = () => {
  return (
    <div className='mt-10'>  
      
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
  <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
  {/* Total Parents Notified This Month Card */}
  <Card className="sm:col-span-2" x-chunk="parent-communication-01-chunk-0">
    <CardHeader className="pb-3">
      <CardTitle>Total Students Registered</CardTitle>
      <CardDescription className="max-w-lg text-balance leading-relaxed">
      The total number of students registered in the system.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="text-4xl font-bold">500</div> {/* Replace with actual data */}
    </CardContent>
    <CardFooter>
      <Dialog>
        <DialogTrigger asChild>
          <Button>View Notification Report</Button>
        </DialogTrigger>
      </Dialog>
    </CardFooter>
  </Card>

  {/* Average Notifications Sent per Day Card */}
  <Card x-chunk="parent-communication-01-chunk-1">
    <CardHeader className="pb-2">
      <CardDescription>Average Notifications Sent per Day</CardDescription>
      <CardTitle className="text-4xl">160</CardTitle> {/* Replace with actual data */}
    </CardHeader>
    <CardContent>
      <div className="text-xs text-muted-foreground mb-2">
        +15% from last month
      </div>
      <Progress value={15} aria-label="15% increase" />
    </CardContent>
    <CardFooter />
  </Card>

  {/* Unread Notifications This Week Card */}
  <Card x-chunk="parent-communication-01-chunk-2">
    <CardHeader className="pb-2">
      <CardDescription>Unread Notifications This Week</CardDescription>
      <CardTitle className="text-4xl">10</CardTitle> {/* Replace with actual data */}
    </CardHeader>
    <CardContent>
      <div className="text-xs text-muted-foreground mb-2">
        -5% from last week
      </div>
      <Progress value={-5} aria-label="5% decrease" />
    </CardContent>
    <CardFooter />
  </Card>

  {/* Response Rate to Notifications Card */}
  <Card x-chunk="parent-communication-01-chunk-3">
    <CardHeader className="pb-2">
      <CardDescription>Response Rate to Notifications</CardDescription>
      <CardTitle className="text-4xl">85%</CardTitle> {/* Replace with actual data */}
    </CardHeader>
    <CardContent>
      <div className="text-xs text-muted-foreground mb-2">
        +10% from last month
      </div>
      <Progress value={10} aria-label="10% increase" />
    </CardContent>
    <CardFooter />
  </Card>
</div>

<div>Bus 1 Location</div>

{/* Map Section */}
<Card title="Bus 1 Location">
  <div className="relative z-0">
    <DynamicMapContainer
      center={[mockData.bus1Location.lat, mockData.bus1Location.lng]}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
      // className="absolute top-0 left-0 z-0" // Ensures the map stays behind other elements
    >
      <DynamicTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <DynamicMarker position={[mockData.bus1Location.lat, mockData.bus1Location.lng]}>
        <DynamicPopup>
          Bus 1 is currently located here. <br /> {mockData.busStatus[0].studentCount} students onboard.
        </DynamicPopup>
      </DynamicMarker>
    </DynamicMapContainer>
  </div>
</Card>



      {/* Main Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Current Bus Status */}
        <Card title="Current Bus Status">
          {mockData.busStatus.map((bus) => (
            <div key={bus.id} className="p-4 bg-gray-50 rounded-lg shadow-sm flex justify-between items-center mb-2">
              <span>{bus.busNumber} - {bus.studentCount} Students</span>
              <span className={`font-semibold ${bus.status === "On Route" ? "text-green-600" : "text-yellow-600"}`}>
                {bus.status}
              </span>
            </div>
          ))}
        </Card>

        {/* Classroom Attendance Summary */}
        <Card title="Classroom Attendance Summary">
          {mockData.classroomAttendance.map((classroom) => (
            <div key={classroom.id} className="p-4 bg-gray-50 rounded-lg shadow-sm flex justify-between items-center mb-2">
              <span>{classroom.classroom}</span>
              <span className="text-blue-600">{classroom.attendanceRate}%</span>
            </div>
          ))}
        </Card>

        {/* System Alerts */}
        <Card title="System Alerts">
          {mockData.systemAlerts.length > 0 ? (
            <ul className="space-y-3 mt-2">
              {mockData.systemAlerts.map((alert) => (
                <li
                  key={alert.id}
                  className={`p-4 rounded-lg ${
                    alert.type === 'warning' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                  }`}
                >
                  {alert.message}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No alerts at this moment.</p>
          )}
        </Card>
      </div>

      {/* Latest Announcement */}
      <Card title="Latest Announcement">
        <p className="text-gray-700 mb-4">{mockData.latestAnnouncement}</p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Send New Announcement
        </button>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <QuickActionButton title="Register New Student" />
        <QuickActionButton title="Manage NFC Readers" />
        <QuickActionButton title="Send Emergency Notification" />
      </div>
    </div>
    </main>
    </div>

  );
};

// Overview Card Component
const OverviewCard = ({ title, value }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
    <h3 className="text-md">{title}</h3>
    <p className="mt-3 text-3xl text-blue-600">{value}</p>
  </div>
);



// Quick Action Button Component
const QuickActionButton = ({ title }) => (
  <button className="bg-gray-100 p-6 rounded-lg shadow-md flex items-center justify-center text-blue-600 hover:bg-gray-200">
    {title}
  </button>
);

export default Dashboard;
