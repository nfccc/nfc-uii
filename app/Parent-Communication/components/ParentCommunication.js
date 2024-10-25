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

const mockParentData = [
  { id: 1, studentName: 'Liam Johnson', parentNumber: '+1234567890', email: 'parent1@example.com', status: 'Delivered' },
  { id: 2, studentName: 'Olivia Smith', parentNumber: '+1234567891', email: 'parent2@example.com', status: 'Failed' },
  { id: 3, studentName: 'Noah Williams', parentNumber: '+1234567892', email: 'parent3@example.com', status: 'Delivered' },
  { id: 3, studentName: 'Noah Williams', parentNumber: '+1234567892', email: 'parent3@example.com', status: 'Delivered' },
  { id: 3, studentName: 'Noah Williams', parentNumber: '+1234567892', email: 'parent3@example.com', status: 'Delivered' },
  { id: 3, studentName: 'Noah Williams', parentNumber: '+1234567892', email: 'parent3@example.com', status: 'Delivered' },
  { id: 3, studentName: 'Noah Williams', parentNumber: '+1234567892', email: 'parent3@example.com', status: 'Delivered' },

  { id: 4, studentName: 'Emma Brown', parentNumber: '+1234567893', email: 'parent4@example.com', status: 'Failed' },
  { id: 5, studentName: 'Sophia Johnson', parentNumber: '+1234567894', email: 'parent5@example.com', status: 'Delivered' },
  { id: 6, studentName: 'James Taylor', parentNumber: '+1234567895', email: 'parent6@example.com', status: 'Delivered' },
]

  

const ParentCommunication = () => {
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
  {/* Total Parents Notified This Month Card */}
  <Card className="sm:col-span-2" x-chunk="parent-communication-01-chunk-0">
    <CardHeader className="pb-3">
      <CardTitle>Total Parents Notified This Month</CardTitle>
      <CardDescription className="max-w-lg text-balance leading-relaxed">
        The total number of parents notified via the system this month.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="text-4xl font-bold">1,200</div> {/* Replace with actual data */}
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
      <CardTitle className="text-4xl">60</CardTitle> {/* Replace with actual data */}
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

          <div className="mt-6">
            <Tabs defaultValue="1">
              <div className="flex items-center">
                <TabsList>
                  <TabsTrigger value="1">Class 1</TabsTrigger>
                  <TabsTrigger value="2">Class 2</TabsTrigger>
                  <TabsTrigger value="3">Class 3</TabsTrigger>
                  <TabsTrigger value="4">Class 4</TabsTrigger>
                  <TabsTrigger value="5">Class 5</TabsTrigger>
                  <TabsTrigger value="6">Class 6</TabsTrigger>
                  <TabsTrigger value="7">Class 7</TabsTrigger>
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
                      <Button variant="outline" size="sm" className="h-7 gap-1 text-sm">
                        <ListFilter className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only">Filter</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem checked>
                        Delivered
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Failed
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button size="sm" variant="outline" className="h-7 gap-1 text-sm">
                    <File className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only">Export</span>
                  </Button>
                </div>
              </div>

              {/* Tabs Content for each class */}
              <TabsContent value="1">
                <Card>
                  <CardHeader className="px-7">
                    <CardTitle>Class 1 Parent Communication</CardTitle>
                    <CardDescription>Total Students: 30</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <DatePicker />
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Student Name</TableHead>
                          <TableHead>Parent Contact Number</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {mockParentData.map((parent) => (
                          <TableRow key={parent.id}>
                            <TableCell>
                              <div className="font-medium">{parent.studentName}</div>
                            </TableCell>
                            <TableCell>{parent.parentNumber}</TableCell>
                            <TableCell>{parent.email}</TableCell>
                            <TableCell>
                              <Badge
                                className={`${
                                  parent.status === 'Delivered' ? 'bg-green-500' : 'bg-red-500'
                                } w-20 text-center`}
                              >
                                {parent.status}
                              </Badge>
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
        </div>
      </main>
    </div>
  );
};

export default ParentCommunication;
