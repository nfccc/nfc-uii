// 'use client'
// // import { Badge } from "@/components/ui/badge";
// import React, { useState, useEffect } from "react"
// import { formatInTimeZone } from "date-fns-tz"

// import Image from "next/image"
// import Link from "next/link"
// import { useForm } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { z } from "zod"
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import {
//   ChevronLeft,
//   ChevronRight,
//   Copy,
//   CreditCard,
//   File,
//   Home,
//   LineChart,
//   ListFilter,
//   MoreVertical,
//   MoreHorizontal,
//   Package,
//   Package2,
//   PanelLeft,
//   Search,
//   Settings,
//   ShoppingCart,
//   Truck,
//   Users2,
// } from "lucide-react"
// import { Badge } from "@/components/ui/badge"
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"
// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import {
//   DropdownMenu,
//   DropdownMenuCheckboxItem,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Input } from "@/components/ui/input"
// import {
//   Pagination,
//   PaginationContent,
//   PaginationItem,
// } from "@/components/ui/pagination"
// import { Progress } from "@/components/ui/progress"
// import { Separator } from "@/components/ui/separator"
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "@/components/ui/tabs"
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipTrigger,
// } from "@/components/ui/tooltip"

// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { Label } from '@/components/ui/label'
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import { DatePicker } from './DatePicker'




  

// const Management = () => {
//   const timeZone = "Africa/Nairobi"

  
//   const buses = [
//     { id: "1", bus_id: "PB", name: "P1 Bus" },
//     { id: "2", bus_id: "MB", name: "Muthaiga Bus" },
//     { id: "3", bus_id: "LB", name: "Lavington Bus" },
//     { id: "4", bus_id: "SB", name: "SSD Bus" },
//     { id: "5", bus_id: "KB", name: "Karen Bus" },
//   ]

//   const [date, setDate] = useState(null) // State to hold the selected date
//   const [busId, setBusId] = useState(buses[0].bus_id) // Default bus ID (P1 Bus as default)
//   const [attendanceData, setAttendanceData] = useState(null)


//   // Initial fetch for today's attendance when the component mounts
//   useEffect(() => {
//     const today = new Date()
//     const formattedDate = formatInTimeZone(today, timeZone, "yyyy-MM-dd")
//     fetchAttendance(formattedDate, busId)
//   }, []) // No dependencies, so this runs only on initial mount

//   // Fetch attendance data when date or busId changes
//   useEffect(() => {
//     if (date && busId) {
//       // Format date in Nairobi time zone to avoid shifts
//       const formattedDate = formatInTimeZone(date, timeZone, "yyyy-MM-dd")
//       fetchAttendance(formattedDate, busId)
//     }
//   }, [date, busId])

//   const fetchAttendance = async (formattedDate, selectedBusId) => {
//     try {
//       const response = await fetch(`https://nfc-3fdg.onrender.com/bus/bus-attendance/${selectedBusId}/?date=${formattedDate}`)
//       const data = await response.json()
//       setAttendanceData(data)
//     } catch (error) {
//       console.error("Error fetching attendance data:", error)
//     }
//   }

//   const handleBusChange = (newBusId) => {
//     setBusId(newBusId)
//     const today = new Date() // Set date to today’s date
//     setDate(today) // Update the date state to trigger the useEffect
//   }

  
//   return (
//     <div className='mt-10'>  
      
//       <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
//     <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
//     <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
//   {/* Total Bus Rides This Month Card */}
//   <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
//     <CardHeader className="pb-3">
//       <CardTitle>Total Bus Rides This Month</CardTitle>
//       <CardDescription className="max-w-lg text-balance leading-relaxed">
//         The total number of bus rides taken this month.
//       </CardDescription>
//     </CardHeader>
//     <CardContent>
//       <div className="text-4xl font-bold">2,500</div> {/* Replace with actual data */}
//     </CardContent>
//     <CardFooter>
//       <Dialog>
//         <DialogTrigger asChild>
//           <Button>View Ride Report</Button>
//         </DialogTrigger>
//       </Dialog>
//     </CardFooter>
//   </Card>

//   {/* Average Riders per Trip Card */}
//   <Card x-chunk="dashboard-05-chunk-1">
//     <CardHeader className="pb-2">
//       <CardDescription>Average Riders per Trip</CardDescription>
//       <CardTitle className="text-4xl">45</CardTitle> {/* Replace with actual data */}
//     </CardHeader>
//     <CardContent>
//       <div className="text-xs text-muted-foreground mb-2">
//         +10% from last month
//       </div>
//       <Progress value={10} aria-label="10% increase" />
//     </CardContent>
//     <CardFooter />
//   </Card>

//   {/* Missed Trips This Week Card */}
//   <Card x-chunk="dashboard-05-chunk-2">
//     <CardHeader className="pb-2">
//       <CardDescription>Missed Trips This Week</CardDescription>
//       <CardTitle className="text-4xl">5</CardTitle> {/* Replace with actual data */}
//     </CardHeader>
//     <CardContent>
//       <div className="text-xs text-muted-foreground mb-2">
//         -20% from last week
//       </div>
//       <Progress value={-20} aria-label="20% decrease" />
//     </CardContent>
//     <CardFooter />
//   </Card>

//   {/* On-Time Performance Rate Card */}
//   <Card x-chunk="dashboard-05-chunk-3">
//     <CardHeader className="pb-2">
//       <CardDescription>On-Time Performance Rate</CardDescription>
//       <CardTitle className="text-4xl">94%</CardTitle> {/* Replace with actual data */}
//     </CardHeader>
//     <CardContent>
//       <div className="text-xs text-muted-foreground mb-2">
//         +3% from last month 
//       </div>
//       <Progress value={3} aria-label="3% increase" />
//     </CardContent>
//     <CardFooter />
//   </Card>
// </div>



//       {/* Tabs for selecting the bus */}
//       <Tabs defaultValue={buses[0].id}
//   onValueChange={(value) => {
//     const selectedBus = buses.find(bus => bus.id === value)
//     if (selectedBus) {
//       setBusId(selectedBus.bus_id)
//       setDate(new Date()) // Set date to today’s date when a bus is selected
//     }
//   }}>
//         <div className="flex items-center">
//           <TabsList>
//             {buses.map((bus) => (
//               <TabsTrigger key={bus.id} value={bus.id}>
//                 {bus.name}
//               </TabsTrigger>
//             ))}
//           </TabsList>
          
//           {/* Search and Filter Options */}
//           <div className="ml-auto flex items-center gap-2">
//             <div className="relative ml-auto flex-1 md:grow-0">
//               <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//               <Input
//                 type="search"
//                 placeholder="Search..."
//                 className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
//               />
//             </div>
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   className="h-7 gap-1 text-sm"
//                 >
//                   <ListFilter className="h-3.5 w-3.5" />
//                   <span className="sr-only sm:not-sr-only">Filter</span>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end">
//                 <DropdownMenuLabel>Filter by</DropdownMenuLabel>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuCheckboxItem checked>
//                   Fulfilled
//                 </DropdownMenuCheckboxItem>
//                 <DropdownMenuCheckboxItem>
//                   Declined
//                 </DropdownMenuCheckboxItem>
//                 <DropdownMenuCheckboxItem>
//                   Refunded
//                 </DropdownMenuCheckboxItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//             <Button
//               size="sm"
//               variant="outline"
//               className="h-7 gap-1 text-sm"
//             >
//               <File className="h-3.5 w-3.5" />
//               <span className="sr-only sm:not-sr-only">Export</span>
//             </Button>
//           </div>
//         </div>

//         {buses.map((bus) => (
//           <TabsContent key={bus.id} value={bus.id}>
//             <Card x-chunk="dashboard-05-chunk-3">
//               <CardHeader className="px-7">
//                 <CardTitle>{bus.name} Attendance</CardTitle>
//                 <CardDescription>
//                   Total Riders: {attendanceData ? attendanceData.total_riders : 0}
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <DatePicker date={date} setDate={setDate} />
//                 <Table>
//                   <TableHeader>
//                     <TableRow>
//                       <TableHead>Rider Name</TableHead>
                      
//                       <TableHead className="hidden md:table-cell">Date</TableHead>
//                       <TableHead className="hidden md:table-cell">Attendance Status</TableHead>
//                     </TableRow>
//                   </TableHeader>
//                   <TableBody>
//                     {attendanceData && attendanceData.attendance.length > 0 ? (
//                       attendanceData.attendance.map((record, index) => (
//                         <TableRow key={index}>
//                           <TableCell>
//                             <div className="font-medium">{record.student_name}</div>
//                           </TableCell>
                         
//                           <TableCell className="hidden md:table-cell">{record.timestamp}</TableCell>
//                           <TableCell className="hidden md:table-cell">
//                             <Badge className='bg-green-500'>{record.status}</Badge>
//                           </TableCell>
//                         </TableRow>
//                       ))
//                     ) : (
//                       <TableRow>
//                         <TableCell colSpan="4" className="text-center">
//                           No attendance records found for this date.
//                         </TableCell>
//                       </TableRow>
//                     )}
//                   </TableBody>
//                 </Table>
//               </CardContent>
//             </Card>
//           </TabsContent>
//         ))}
//       </Tabs>
//     </div>
//     <div>
    
//     </div>
//   </main></div>
//   )
// }




// export default Management

'use client'

import React, { useState, useEffect } from "react";
import { formatInTimeZone } from "date-fns-tz";
import { Badge } from "@/components/ui/badge";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DatePicker } from './DatePicker';

const Management = () => {
  const timeZone = "Africa/Nairobi";
  const buses = [
    { id: "1", bus_id: "PB", name: "P1 Bus" },
    { id: "2", bus_id: "MB", name: "Muthaiga Bus" },
    { id: "3", bus_id: "LB", name: "Lavington Bus" },
    { id: "4", bus_id: "SB", name: "SSD Bus" },
    { id: "5", bus_id: "KB", name: "Karen Bus" },
  ];

  const [date, setDate] = useState(new Date()); // Default to today's date
  const [busId, setBusId] = useState(buses[0].bus_id);
  const [attendanceData, setAttendanceData] = useState({}); // Tracks attendance by busId
  
  // Fetch attendance records for selected date and bus
  const fetchAttendance = async (formattedDate, selectedBusId) => {
    try {
      const response = await fetch(`https://nfc-3fdg.onrender.com/bus/bus-attendance/${selectedBusId}/?date=${formattedDate}`);
      const data = await response.json();
      setAttendanceData((prevData) => ({
        ...prevData,
        [selectedBusId]: data,
      }));
    } catch (error) {
      console.error("Error fetching attendance data:", error);
    }
  };

  // Fetch attendance for today's date on initial load and when date/busId changes
  useEffect(() => {
    const formattedDate = formatInTimeZone(date, timeZone, "yyyy-MM-dd");
    fetchAttendance(formattedDate, busId);
  }, [date, busId]);

  // WebSocket connection for real-time updates
  useEffect(() => {
    let ws;
    const connectWebSocket = () => {
      ws = new WebSocket(`wss://nfc-3fdg.onrender.com/ws/bus-attendance/${busId}/`);
      ws.onopen = () => console.log("WebSocket connected");

      ws.onmessage = (event) => {
        const newAttendance = JSON.parse(event.data);
        setAttendanceData((prevData) => ({
          ...prevData,
          [busId]: {
            total_riders: (prevData[busId]?.total_riders || 0) + 1,
            attendance: [newAttendance, ...(prevData[busId]?.attendance || [])],
          },
        }));
      };

      ws.onclose = (e) => {
        console.log("WebSocket closed, reconnecting...", e.reason);
        setTimeout(() => connectWebSocket(), 3000);
      };

      ws.onerror = (err) => {
        console.error("WebSocket encountered error:", err, "Closing socket");
        ws.close();
      };
    };

    connectWebSocket();

    return () => {
      if (ws) {
        ws.onclose = null;
        ws.close();
      }
    };
  }, [busId]);

  const handleBusChange = (newBusId) => {
    setBusId(newBusId);
    setDate(new Date()); // Reset to today's date on bus change
  };

  return (
    <div className="mt-10">
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <Tabs
            defaultValue={buses[0].id}
            onValueChange={(value) => {
              const selectedBus = buses.find((bus) => bus.id === value);
              if (selectedBus) handleBusChange(selectedBus.bus_id);
            }}
          >
            <TabsList>
              {buses.map((bus) => (
                <TabsTrigger key={bus.id} value={bus.id}>
                  {bus.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {buses.map((bus) => (
              <TabsContent key={bus.id} value={bus.id}>
                <Card>
                  <CardHeader className="px-7">
                    <CardTitle>{bus.name} Attendance</CardTitle>
                    <CardDescription>
                      Total Riders: {attendanceData[bus.bus_id]?.total_riders || 0}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <DatePicker date={date} setDate={setDate} />
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Rider Name</TableHead>
                          <TableHead className="hidden md:table-cell">Date</TableHead>
                          <TableHead className="hidden md:table-cell">Attendance Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {attendanceData[bus.bus_id]?.attendance?.length > 0 ? (
                          attendanceData[bus.bus_id].attendance.map((record, index) => (
                            <TableRow key={index}>
                              <TableCell>{record.student_name}</TableCell>
                              <TableCell className="hidden md:table-cell">{record.timestamp}</TableCell>
                              <TableCell className="hidden md:table-cell">
                                <Badge className="bg-green-500">{record.status}</Badge>
                              </TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell colSpan="3" className="text-center">
                              No attendance records found for this date.
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Management;
