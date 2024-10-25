'use client'
// import { Badge } from "@/components/ui/badge";
import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  Home,
  LineChart,
  ListFilter,
  MoreVertical,
  MoreHorizontal,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Truck,
  Users2,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { DatePicker } from '@/app/Class-Attendance/components/DatePicker'

// import {  ChevronRight, Copy, CreditCard, File, Home, LineChart, ListFilter, MoreVertical, Package, Package2, PanelLeft, Search, Settings, ShoppingCart, Sidebar, Truck, Users2 } from "lucide-react";


// Define schema for form validation using zod
const FormSchema = z.object({
  studentName: z.string().min(1, "Student name is required"),
  uidNumber: z.string().min(1, "UID number is required"),
  parentContact: z.string().min(10, "Parent contact must be at least 10 characters"),
  parentEmail: z.string().email("Please enter a valid email"),
  class: z.string().min(1, "Class is required"),
})


  

const Management = () => {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      studentName: "",
      uidNumber: "",
      parentContact: "",
      parentEmail: "",
      class: "",
    },
  })

  function onSubmit(data) {
    console.log(data) // Handle form submission
  }
  return (
    <div className='mt-10'>  
      
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
  {/* Total Bus Rides This Month Card */}
  <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
    <CardHeader className="pb-3">
      <CardTitle>Total Bus Rides This Month</CardTitle>
      <CardDescription className="max-w-lg text-balance leading-relaxed">
        The total number of bus rides taken this month.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="text-4xl font-bold">2,500</div> {/* Replace with actual data */}
    </CardContent>
    <CardFooter>
      <Dialog>
        <DialogTrigger asChild>
          <Button>View Ride Report</Button>
        </DialogTrigger>
      </Dialog>
    </CardFooter>
  </Card>

  {/* Average Riders per Trip Card */}
  <Card x-chunk="dashboard-05-chunk-1">
    <CardHeader className="pb-2">
      <CardDescription>Average Riders per Trip</CardDescription>
      <CardTitle className="text-4xl">45</CardTitle> {/* Replace with actual data */}
    </CardHeader>
    <CardContent>
      <div className="text-xs text-muted-foreground mb-2">
        +10% from last month
      </div>
      <Progress value={10} aria-label="10% increase" />
    </CardContent>
    <CardFooter />
  </Card>

  {/* Missed Trips This Week Card */}
  <Card x-chunk="dashboard-05-chunk-2">
    <CardHeader className="pb-2">
      <CardDescription>Missed Trips This Week</CardDescription>
      <CardTitle className="text-4xl">5</CardTitle> {/* Replace with actual data */}
    </CardHeader>
    <CardContent>
      <div className="text-xs text-muted-foreground mb-2">
        -20% from last week
      </div>
      <Progress value={-20} aria-label="20% decrease" />
    </CardContent>
    <CardFooter />
  </Card>

  {/* On-Time Performance Rate Card */}
  <Card x-chunk="dashboard-05-chunk-3">
    <CardHeader className="pb-2">
      <CardDescription>On-Time Performance Rate</CardDescription>
      <CardTitle className="text-4xl">92%</CardTitle> {/* Replace with actual data */}
    </CardHeader>
    <CardContent>
      <div className="text-xs text-muted-foreground mb-2">
        +3% from last month
      </div>
      <Progress value={3} aria-label="3% increase" />
    </CardContent>
    <CardFooter />
  </Card>
</div>



      <Tabs defaultValue="1">
        <div className="flex items-center">
          <TabsList>
          
            <TabsTrigger value="1">Bus 1 </TabsTrigger>
            <TabsTrigger value="2">Bus 2 </TabsTrigger>
            <TabsTrigger value="3">Bus 3 </TabsTrigger>
            <TabsTrigger value="4">Bus 4 </TabsTrigger>
            <TabsTrigger value="5">Bus 5 </TabsTrigger>
            <TabsTrigger value="6">Bus 6 </TabsTrigger>
            <TabsTrigger value="7">Bus 7 </TabsTrigger>




    

           
          </TabsList>
          <div className="ml-auto flex items-center gap-2">
          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 gap-1 text-sm"
                >
                  <ListFilter className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only">Filter</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>
                  Fulfilled
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  Declined
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  Refunded
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              size="sm"
              variant="outline"
              className="h-7 gap-1 text-sm"
            >
              <File className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only">Export</span>
            </Button>
          </div>
        </div>







        <TabsContent value="1">
  <Card x-chunk="dashboard-05-chunk-3">
    <CardHeader className="px-7">
      <CardTitle>Bus Attendance</CardTitle>
      <CardDescription>
        Total Riders: 306
      </CardDescription>
    </CardHeader>
    <CardContent>

      <DatePicker />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Rider Name</TableHead>
            <TableHead className="hidden md:table-cell">UID Number</TableHead>
            <TableHead className="hidden md:table-cell">Date</TableHead>
            <TableHead className="hidden md:table-cell">Attendance Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Sample Bus Attendance Data with random UIDs */}
          <TableRow>
            <TableCell>
              <div className="font-medium">Liam Johnson</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">UID23856</TableCell>
            <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
            <TableCell className="hidden md:table-cell">
              <Badge className='bg-green-500'>Present</Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-medium">Olivia Smith</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">UID58934</TableCell>
            <TableCell className="hidden md:table-cell">2023-06-24</TableCell>
            <TableCell className="hidden md:table-cell">
              <Badge className='bg-green-500'>Present</Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-medium">Noah Williams</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">UID34891</TableCell>
            <TableCell className="hidden md:table-cell">2023-06-25</TableCell>
            <TableCell className="hidden md:table-cell">
              <Badge className='bg-green-500'>Present</Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-medium">Emma Brown</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">UID67239</TableCell>
            <TableCell className="hidden md:table-cell">2023-06-26</TableCell>
            <TableCell className="hidden md:table-cell">
              <Badge className='bg-green-500'>Present</Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-medium">Chris Johnson</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">UID92345</TableCell>
            <TableCell className="hidden md:table-cell">2023-06-27</TableCell>
            <TableCell className="hidden md:table-cell">
              <Badge variant="destructive">Absent</Badge>
            </TableCell>
          </TableRow>
          {/* Additional entries with random UIDs */}
          {Array(6).fill().map((_, index) => (
            <TableRow key={index}>
              <TableCell>
                <div className="font-medium">Chris Johnson</div>
              </TableCell>
              <TableCell className="hidden md:table-cell">UID{Math.floor(10000 + Math.random() * 90000)}</TableCell>
              <TableCell className="hidden md:table-cell">2023-06-27</TableCell>
              <TableCell className="hidden md:table-cell">
                <Badge variant="destructive">Absent</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
</TabsContent>





<TabsContent value="2">
  <Card x-chunk="dashboard-05-chunk-3">
    <CardHeader className="px-7">
      <CardTitle>Class 2 Attendance</CardTitle>
      <CardDescription>
        Total Students: 306
      </CardDescription>
    </CardHeader>
    <CardContent>

      <DatePicker />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Student Name</TableHead>
            <TableHead className="hidden md:table-cell">UID Number</TableHead>
            <TableHead className="hidden md:table-cell">Date</TableHead>
            <TableHead className="hidden md:table-cell">Attendance Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Class 1 Students Data */}
          <TableRow>
            <TableCell>
              <div className="font-medium">Liam Johnson</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">UID123</TableCell>
            <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
            <TableCell className="hidden md:table-cell">
            <Badge className='bg-green-500'>Present</Badge>

            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-medium">Olivia Smith</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">UID124</TableCell>
            <TableCell className="hidden md:table-cell">2023-06-24</TableCell>
            <TableCell className="hidden md:table-cell">
            <Badge className='bg-green-500'>Present</Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-medium">Noah Williams</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">UID125</TableCell>
            <TableCell className="hidden md:table-cell">2023-06-25</TableCell>
            <TableCell className="hidden md:table-cell">
            <Badge className='bg-green-500'>Present</Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-medium">Emma Brown</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">UID126</TableCell>
            <TableCell className="hidden md:table-cell">2023-06-26</TableCell>
            <TableCell className="hidden md:table-cell">
            <Badge className='bg-green-500'>Present</Badge>
              
            </TableCell>
          </TableRow>
          {/* Duplicate entries for "Chris Johnson" can be cleaned up if needed */}
          <TableRow>
            <TableCell>
              <div className="font-medium">Chris Johnson</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">UID127</TableCell>
            <TableCell className="hidden md:table-cell">2023-06-27</TableCell>
            <TableCell className="hidden md:table-cell">
              <Badge variant="destructive">Absent</Badge>
            </TableCell>
          </TableRow>
          {/* If you have multiple entries for Chris Johnson, you might want to make sure they represent different dates or statuses */}
          {Array(6).fill().map((_, index) => (
            <TableRow key={index}>
              <TableCell>
                <div className="font-medium">Chris Johnson</div>
              </TableCell>
              <TableCell className="hidden md:table-cell">UID127</TableCell>
              <TableCell className="hidden md:table-cell">2023-06-27</TableCell>
              <TableCell className="hidden md:table-cell">
                <Badge variant="destructive">Absent</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
</TabsContent>


<TabsContent value="3">
  <Card x-chunk="dashboard-05-chunk-3">
    <CardHeader className="px-7">
      <CardTitle>Class 3 Attendance</CardTitle>
      <CardDescription>
        Total Students: 306
      </CardDescription>
    </CardHeader>
    <CardContent>

      <DatePicker />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Student Name</TableHead>
            <TableHead className="hidden md:table-cell">UID Number</TableHead>
            <TableHead className="hidden md:table-cell">Date</TableHead>
            <TableHead className="hidden md:table-cell">Attendance Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Class 1 Students Data */}
          <TableRow>
            <TableCell>
              <div className="font-medium">Liam Johnson</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">UID123</TableCell>
            <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
            <TableCell className="hidden md:table-cell">
            <Badge className='bg-green-500'>Present</Badge>

            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-medium">Olivia Smith</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">UID124</TableCell>
            <TableCell className="hidden md:table-cell">2023-06-24</TableCell>
            <TableCell className="hidden md:table-cell">
            <Badge className='bg-green-500'>Present</Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-medium">Noah Williams</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">UID125</TableCell>
            <TableCell className="hidden md:table-cell">2023-06-25</TableCell>
            <TableCell className="hidden md:table-cell">
            <Badge className='bg-green-500'>Present</Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-medium">Emma Brown</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">UID126</TableCell>
            <TableCell className="hidden md:table-cell">2023-06-26</TableCell>
            <TableCell className="hidden md:table-cell">
            <Badge className='bg-green-500'>Present</Badge>
              
            </TableCell>
          </TableRow>
          {/* Duplicate entries for "Chris Johnson" can be cleaned up if needed */}
          <TableRow>
            <TableCell>
              <div className="font-medium">Chris Johnson</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">UID127</TableCell>
            <TableCell className="hidden md:table-cell">2023-06-27</TableCell>
            <TableCell className="hidden md:table-cell">
              <Badge variant="destructive">Absent</Badge>
            </TableCell>
          </TableRow>
          {/* If you have multiple entries for Chris Johnson, you might want to make sure they represent different dates or statuses */}
          {Array(6).fill().map((_, index) => (
            <TableRow key={index}>
              <TableCell>
                <div className="font-medium">Chris Johnson</div>
              </TableCell>
              <TableCell className="hidden md:table-cell">UID127</TableCell>
              <TableCell className="hidden md:table-cell">2023-06-27</TableCell>
              <TableCell className="hidden md:table-cell">
                <Badge variant="destructive">Absent</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
</TabsContent>



















      </Tabs>
    </div>
    <div>
    
    </div>
  </main></div>
  )
}

export default Management