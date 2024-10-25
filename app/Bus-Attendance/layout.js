"use client";
import Navbar from "../../components/Navbar/Navbar"
import Sidebar from "../../components/Sidebar/Sidebars"



// import Login from "../../components/Login"; // Import your Login component

export default function RootLayout({ children }) {
  // If user is logged in, render the main content
  return (

    <>
<Navbar />
      
<div className="ml-[220px]">{children}</div>

<Sidebar />
      
      
    </>
  );
}