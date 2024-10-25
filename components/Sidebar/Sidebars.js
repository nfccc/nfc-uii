'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link'

import { useEffect, useState } from 'react';
import {
  
  Home,
  
  Package,
  Package2,
  
  Settings,
  
  Users2,
} from "lucide-react"

import {
  Tooltip,
  TooltipContent,
  
  TooltipTrigger,
} from "@/components/ui/tooltip"

const Sidebars = () => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    // Fallback to window.location.pathname if router is not providing the path
    setCurrentPath(window.location.pathname);
    console.log('Current Path:', window.location.pathname);
  }, []);

  const isActive = (path) => {
    return currentPath === path;
  };

  return (
    <div className=''>
      <aside className="dark:bg-gray-900 fixed inset-y-0 left-0 z-10 hidden w-46 flex-col border-r sm:flex">
        <nav className="flex flex-col items-start px-4 sm:py-5">
          {/* Logo Section */}
          <Link href='/Dashboard'>
         
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-10 w-10 items-center justify-center bg-primary rounded-full">
              {/* Logo Icon */}
              <Package2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold">Peponi Sch</span>
          </div>
          </Link>
          {/* Navigation Links with Spacing */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/Dashboard"
                className={`flex w-full items-center gap-2 px-2 rounded-lg transition-colors mb-6 ${
                  isActive('/Dashboard') ? 'text-black' : 'text-muted-foreground'
                }`}
              >
                <Home className="h-5 w-5" />
                <span className="text-sm">Dashboard</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Dashboard</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/Bus-Attendance"
                className={`flex w-full items-center gap-2 px-2 rounded-lg transition-colors mb-6 ${
                  isActive('/Bus-Attendance') ? 'text-black' : 'text-muted-foreground'
                }`}
              >
                <Users2 className="h-5 w-5" />
                <span className="text-sm">Bus Attendance</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Attendance</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/Class-Attendance"
                className={`flex w-full items-center gap-2 px-2 rounded-lg transition-colors mb-6 ${
                  isActive('/Class-Attendance') ? 'text-black' : 'text-muted-foreground'
                }`}
              >
                <Users2 className="h-5 w-5" />
                <span className="text-sm">Class Attendance</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Attendance</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/Student-Management"
                className={`flex w-full items-center gap-2 px-2 rounded-lg transition-colors mb-6 ${
                  isActive('/Student-Management') ? 'text-black' : 'text-muted-foreground'
                }`}
              >
                <Package className="h-5 w-5" />
                <span className="text-sm">Student Management</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Student Management</TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/Parent-Communication"
                className={`flex w-full items-center gap-2 px-2 rounded-lg transition-colors mb-6 ${
                  isActive('/Parent-Communication') ? 'text-black' : 'text-muted-foreground'
                }`}
              >
                <Users2 className="h-5 w-5" />
                <span className="text-sm">Parent Communication</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Parent Communication</TooltipContent>
          </Tooltip>
        </nav>
        <nav className="mt-auto flex flex-col items-start px-4 sm:py-5">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/Settings"
                className={`flex w-full items-center gap-2 px-2 rounded-lg transition-colors ${
                  isActive('/Settings') ? 'text-black' : 'text-muted-foreground'
                }`}
              >
                <Settings className="h-5 w-5" />
                <span className="text-sm">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebars;