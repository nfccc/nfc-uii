'use client'
import { useState, useEffect } from 'react';
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

// import {  ChevronRight, Copy, CreditCard, File, Home, LineChart, ListFilter, MoreVertical, Package, Package2, PanelLeft, Search, Settings, ShoppingCart, Sidebar, Truck, Users2 } from "lucide-react";


// Define schema for form validation using zod
const FormSchema = z.object({
  studentName: z.string().min(1, "Student name is required"),
  uidNumber: z.string().min(1, "UID number is required"),
  parentContact: z.string().min(10, "Parent contact must be at least 10 characters"),
  parentEmail: z.string().email("Please enter a valid email"),
  class: z.string().min(1, "Class is required"),
})


  
// Function to fetch students by class from the backend
const fetchStudentsByClass = async (classValue) => {
  try {
    const response = await fetch(`https://nfc-3fdg.onrender.com/students/class/${classValue}/`);
    if (response.ok) {
      const data = await response.json();
      return data.students;  // Return only the students array for this class
    } else {
      console.error("Failed to fetch students by class:", response.statusText);
      return [];
    }
  } catch (error) {
    console.error("Error fetching students by class:", error);
    return [];
  }
};

const Management = () => {
  const [allStudents, setAllStudents] = useState([]); // Separate state for "All" students
  const [classStudents, setClassStudents] = useState([]); // Separate state for class-specific students
  const [classFilter, setClassFilter] = useState('All'); // Track selected class filter
  const [totalStudents, setTotalStudents] = useState(0);

  // Fetch all students only once when the component mounts
  useEffect(() => {
    const fetchAllStudents = async () => {
      try {
        const response = await fetch('https://nfc-3fdg.onrender.com/students/all/');
        if (response.ok) {
          const data = await response.json();
          setAllStudents(data.students);
          setTotalStudents(data.total_students);
        } else {
          console.error("Failed to fetch all students:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching all students:", error);
      }
    };

    fetchAllStudents();
  }, []);

  // Fetch students by class whenever classFilter changes to a specific class
// Fetch students by class whenever classFilter changes to a specific class
useEffect(() => {
  if (classFilter === 'All') {
    setClassStudents([]); // Clear class-specific data when showing "All"
    return;
  }

  const fetchStudentsByClass = async () => {
    try {
      const url = `https://nfc-3fdg.onrender.com/students/class/${classFilter}/`; // Use classFilter directly as a number
      
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setClassStudents(data.students);
        setTotalStudents(data.total_students);
      } else {
        console.error(`Failed to fetch students for class ${classFilter}:`, response.statusText);
      }
    } catch (error) {
      console.error(`Error fetching students for class ${classFilter}:`, error);
    }
  };

  fetchStudentsByClass();
}, [classFilter]);


  
  
  

  // Determine which data to display based on classFilter
  const displayedStudents = classFilter === 'All' ? allStudents : classStudents;




 
const form = useForm();



const onSubmit = async (data) => {
  const studentData = {
    student_name: data.studentName,
    uid_number: data.uidNumber,
    parent_contact: data.parentContact,
    parent_email: data.parentEmail,
    student_class: data.class,
  };

  try {
    const response = await fetch('https://nfc-3fdg.onrender.com/students/add/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(studentData),
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Student added:", result);
      alert("Student added successfully!");
      form.reset(); // Reset form after submission
    } else {
      console.error("Failed to add student:", response.statusText);
    }
  } catch (error) {
    console.error("Error adding student:", error);
  }
};



  return (
    <div className='mt-10'>  
      
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
  {/* Total Students Card */}
  <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
      <CardHeader className="pb-3">
        <CardTitle>Total Students</CardTitle>
        <CardDescription className="max-w-lg text-balance leading-relaxed">
          The total number of students currently registered in the system.
        </CardDescription>
      </CardHeader>
      <CardContent>
      <div className="text-4xl font-bold">{allStudents.length}</div>
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
          <Button>Add New Student</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md bg-white">
            <DialogHeader>
              <DialogTitle>Add New Student</DialogTitle>
              <DialogDescription>
                Enter the details below to register a new student.
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="studentName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Student Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter student name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="uidNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>UID Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter UID number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="parentContact"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Parent Contact</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter parent phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="parentEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Parent Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter parent email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="class"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Class</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select class" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Class 1">Class 1</SelectItem>
                          <SelectItem value="Class 2">Class 2</SelectItem>
                          <SelectItem value="Class 3">Class 3</SelectItem>
                          <SelectItem value="Class 4">Class 4</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
               <Button type="submit">Submit</Button>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>


  {/* Students Registered This Week Card */}
  <Card x-chunk="dashboard-05-chunk-1">
    <CardHeader className="pb-2">
      <CardDescription>New Students This Week</CardDescription>
      <CardTitle className="text-4xl">45</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-xs text-muted-foreground mb-2">
        +15% from last week
      </div>
      <Progress value={15} aria-label="15% increase" />
    </CardContent>
    <CardFooter />
  </Card>

  {/* Total Active Students Card */}
  <Card x-chunk="dashboard-05-chunk-2">
    <CardHeader className="pb-2">
      <CardDescription>Total Active Students</CardDescription>
      <CardTitle className="text-4xl">1,500</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-xs text-muted-foreground mb-2">
        +5% from last month
      </div>
      <Progress value={5} aria-label="5% increase" />
    </CardContent>
    <CardFooter />
  </Card>



</div>

      <Tabs defaultValue="All">
        <div className="flex items-center">
        <TabsList>
  <TabsTrigger value="All" onClick={() => setClassFilter('All')}>All Students</TabsTrigger>
  {[...Array(7)].map((_, i) => (
    <TabsTrigger key={i} value={`${i + 1}`} onClick={() => setClassFilter(i + 1)}>
      Class {i + 1}
    </TabsTrigger>
  ))}
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







        <TabsContent value="All">
        <Card>
          <CardHeader className="px-7">
            <CardTitle>All Students</CardTitle>
            <CardDescription>All School students</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student Name</TableHead>
                  <TableHead className="hidden md:table-cell">Date Registered</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allStudents?.map((student, index) => (
                  <TableRow key={student.id || index}>
                    <TableCell>
                      <div className="font-medium">{student.student_name}</div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {student.date_registered || "N/A"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>

      {[...Array(7)].map((_, i) => (
  <TabsContent key={i} value={`${i + 1}`}>
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Class {i + 1} Students</CardTitle>
        <CardDescription>Total Students: {totalStudents}</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student Name</TableHead>
              <TableHead className="hidden md:table-cell">UID</TableHead>
              <TableHead className="hidden md:table-cell">Parent Number</TableHead>
              <TableHead className="hidden md:table-cell">Parent Email</TableHead>
              <TableHead className="hidden md:table-cell">Date Registered</TableHead>
              <TableHead><span className="sr-only">Actions</span></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {classStudents?.map((student, index) => (
              <TableRow key={student.id || index}>
                <TableCell><div className="font-medium">{student.student_name}</div></TableCell>
                <TableCell className="hidden md:table-cell">{student.uid_number}</TableCell>
                <TableCell className="hidden md:table-cell">{student.parent_contact}</TableCell>
                <TableCell className="hidden md:table-cell">{student.parent_email}</TableCell>
                <TableCell className="hidden md:table-cell">{student.date_registered || "N/A"}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </TabsContent>
))}











      </Tabs>
    </div>
    <div>
    
    </div>
  </main></div>
  )
}

export default Management