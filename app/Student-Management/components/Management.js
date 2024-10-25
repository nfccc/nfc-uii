'use client'
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
  {/* Total Students Card */}
  <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
      <CardHeader className="pb-3">
        <CardTitle>Total Students</CardTitle>
        <CardDescription className="max-w-lg text-balance leading-relaxed">
          The total number of students currently registered in the system.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold">500</div>
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

      <Tabs defaultValue="week">
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger value="week">All Students</TabsTrigger>
            <TabsTrigger value="1">Class 1 </TabsTrigger>
            <TabsTrigger value="2">Class 2 </TabsTrigger>
            <TabsTrigger value="3">Class 3 </TabsTrigger>
            <TabsTrigger value="4">Class 4 </TabsTrigger>
            <TabsTrigger value="5">Class 5 </TabsTrigger>
            <TabsTrigger value="6">Class 6 </TabsTrigger>
            <TabsTrigger value="7">Class 7 </TabsTrigger>




    

           
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







        <TabsContent value="week">
        <Card x-chunk="dashboard-05-chunk-3">
            <CardHeader className="px-7">
              <CardTitle>All Students</CardTitle>
              <CardDescription>
                All School studentsa
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student Name</TableHead>
                    
                    <TableHead className="hidden md:table-cell">
                      Date Registered
                    </TableHead>
                   
                  </TableRow>
                </TableHeader>
                <TableBody>
          {/* Sample Data Row 1 */}
          <TableRow className="bg-accent">
            <TableCell>
              <div className="font-medium">Liam Johnson</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              2023-06-23
            </TableCell>
          </TableRow>

          {/* Sample Data Row 2 */}
          <TableRow>
            <TableCell>
              <div className="font-medium">Olivia Smith</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              2023-06-24
            </TableCell>
          </TableRow>

          {/* Sample Data Row 3 */}
          <TableRow>
            <TableCell>
              <div className="font-medium">Noah Williams</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              2023-06-25
            </TableCell>
          </TableRow>

          {/* Sample Data Row 4 */}
          <TableRow>
            <TableCell>
              <div className="font-medium">Emma Brown</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              2023-06-26
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-medium">Olivia Smith</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              2023-06-24
            </TableCell>
          </TableRow>

          {/* Sample Data Row 3 */}
          <TableRow>
            <TableCell>
              <div className="font-medium">Noah Williams</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              2023-06-25
            </TableCell>
          </TableRow>

          {/* Sample Data Row 4 */}
          <TableRow>
            <TableCell>
              <div className="font-medium">Emma Brown</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              2023-06-26
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-medium">Olivia Smith</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              2023-06-24
            </TableCell>
          </TableRow>

          {/* Sample Data Row 3 */}
          <TableRow>
            <TableCell>
              <div className="font-medium">Noah Williams</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              2023-06-25
            </TableCell>
          </TableRow>

          {/* Sample Data Row 4 */}
          <TableRow>
            <TableCell>
              <div className="font-medium">Emma Brown</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              2023-06-26
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-medium">Olivia Smith</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              2023-06-24
            </TableCell>
          </TableRow>

          {/* Sample Data Row 3 */}
          <TableRow>
            <TableCell>
              <div className="font-medium">Noah Williams</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              2023-06-25
            </TableCell>
          </TableRow>

          {/* Sample Data Row 4 */}
          <TableRow>
            <TableCell>
              <div className="font-medium">Emma Brown</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              2023-06-26
            </TableCell>
          </TableRow>
        </TableBody>
              </Table>
            </CardContent>
          </Card>
          </TabsContent>


          <TabsContent value="1">
  <Card x-chunk="dashboard-05-chunk-3">
    <CardHeader className="px-7">
      <CardTitle>Class 1 Students</CardTitle>
      <CardDescription>
        Total Students : 5
      </CardDescription>
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
            <TableHead>
                          <span className="sr-only">Actions</span>
                        </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Class 1 Students Data */}
          <TableRow className="">
            <TableCell>
              <div className="font-medium">Liam Johnson</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">UID123</TableCell>
            <TableCell className="hidden md:table-cell">123-456-7890</TableCell>
            <TableCell className="hidden md:table-cell">liam@example.com</TableCell>
            <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
            <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
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
          <TableRow className="">
            <TableCell>
              <div className="font-medium">Liam Johnson</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">UID123</TableCell>
            <TableCell className="hidden md:table-cell">123-456-7890</TableCell>
            <TableCell className="hidden md:table-cell">liam@example.com</TableCell>
            <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
            <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
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
          </TableRow> <TableRow className="">
            <TableCell>
              <div className="font-medium">Liam Johnson</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">UID123</TableCell>
            <TableCell className="hidden md:table-cell">123-456-7890</TableCell>
            <TableCell className="hidden md:table-cell">liam@example.com</TableCell>
            <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
            <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
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
          </TableRow> <TableRow className="">
            <TableCell>
              <div className="font-medium">Liam Johnson</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">UID123</TableCell>
            <TableCell className="hidden md:table-cell">123-456-7890</TableCell>
            <TableCell className="hidden md:table-cell">liam@example.com</TableCell>
            <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
            <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
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
          </TableRow> <TableRow className="">
            <TableCell>
              <div className="font-medium">Liam Johnson</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">UID123</TableCell>
            <TableCell className="hidden md:table-cell">123-456-7890</TableCell>
            <TableCell className="hidden md:table-cell">liam@example.com</TableCell>
            <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
            <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
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
          </TableRow> <TableRow className="">
            <TableCell>
              <div className="font-medium">Liam Johnson</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">UID123</TableCell>
            <TableCell className="hidden md:table-cell">123-456-7890</TableCell>
            <TableCell className="hidden md:table-cell">liam@example.com</TableCell>
            <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
            <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
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
          </TableRow> <TableRow className="">
            <TableCell>
              <div className="font-medium">Liam Johnson</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">UID123</TableCell>
            <TableCell className="hidden md:table-cell">123-456-7890</TableCell>
            <TableCell className="hidden md:table-cell">liam@example.com</TableCell>
            <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
            <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
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
          <TableRow>
            <TableCell>
              <div className="font-medium">Olivia Smith</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">UID124</TableCell>
            <TableCell className="hidden md:table-cell">234-567-8901</TableCell>
            <TableCell className="hidden md:table-cell">olivia@example.com</TableCell>
            <TableCell className="hidden md:table-cell">2023-06-24</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-medium">Olivia Smith</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">UID124</TableCell>
            <TableCell className="hidden md:table-cell">234-567-8901</TableCell>
            <TableCell className="hidden md:table-cell">olivia@example.com</TableCell>
            <TableCell className="hidden md:table-cell">2023-06-24</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-medium">Olivia Smith</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">UID124</TableCell>
            <TableCell className="hidden md:table-cell">234-567-8901</TableCell>
            <TableCell className="hidden md:table-cell">olivia@example.com</TableCell>
            <TableCell className="hidden md:table-cell">2023-06-24</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-medium">Olivia Smith</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">UID124</TableCell>
            <TableCell className="hidden md:table-cell">234-567-8901</TableCell>
            <TableCell className="hidden md:table-cell">olivia@example.com</TableCell>
            <TableCell className="hidden md:table-cell">2023-06-24</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-medium">Olivia Smith</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">UID124</TableCell>
            <TableCell className="hidden md:table-cell">234-567-8901</TableCell>
            <TableCell className="hidden md:table-cell">olivia@example.com</TableCell>
            <TableCell className="hidden md:table-cell">2023-06-24</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-medium">Olivia Smith</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">UID124</TableCell>
            <TableCell className="hidden md:table-cell">234-567-8901</TableCell>
            <TableCell className="hidden md:table-cell">olivia@example.com</TableCell>
            <TableCell className="hidden md:table-cell">2023-06-24</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-medium">Olivia Smith</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">UID124</TableCell>
            <TableCell className="hidden md:table-cell">234-567-8901</TableCell>
            <TableCell className="hidden md:table-cell">olivia@example.com</TableCell>
            <TableCell className="hidden md:table-cell">2023-06-24</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-medium">Olivia Smith</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">UID124</TableCell>
            <TableCell className="hidden md:table-cell">234-567-8901</TableCell>
            <TableCell className="hidden md:table-cell">olivia@example.com</TableCell>
            <TableCell className="hidden md:table-cell">2023-06-24</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-medium">Olivia Smith</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">UID124</TableCell>
            <TableCell className="hidden md:table-cell">234-567-8901</TableCell>
            <TableCell className="hidden md:table-cell">olivia@example.com</TableCell>
            <TableCell className="hidden md:table-cell">2023-06-24</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-medium">Noah Williams</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">UID125</TableCell>
            <TableCell className="hidden md:table-cell">345-678-9012</TableCell>
            <TableCell className="hidden md:table-cell">noah@example.com</TableCell>
            <TableCell className="hidden md:table-cell">2023-06-25</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-medium">Emma Brown</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">UID126</TableCell>
            <TableCell className="hidden md:table-cell">456-789-0123</TableCell>
            <TableCell className="hidden md:table-cell">emma@example.com</TableCell>
            <TableCell className="hidden md:table-cell">2023-06-26</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-medium">Chris Johnson</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">UID127</TableCell>
            <TableCell className="hidden md:table-cell">567-890-1234</TableCell>
            <TableCell className="hidden md:table-cell">chris@example.com</TableCell>
            <TableCell className="hidden md:table-cell">2023-06-27</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </CardContent>
  </Card>
</TabsContent>



          <TabsContent value="2">
          </TabsContent>
          <TabsContent value="3">
          </TabsContent>
          <TabsContent value="4">
          </TabsContent>
          <TabsContent value="5">
          </TabsContent>
          <TabsContent value="6">
          </TabsContent>
          <TabsContent value="7">
          </TabsContent>











      </Tabs>
    </div>
    <div>
    
    </div>
  </main></div>
  )
}

export default Management