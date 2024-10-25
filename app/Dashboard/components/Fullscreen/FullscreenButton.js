"use client"; // This tells Next.js that this is a client component
import React from 'react'
import { enterFullscreen } from './Fullscreen'

const FullscreenButton = () => {
  return (
    <button
    onClick={enterFullscreen}
    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
  >
    Go Fullscreen
  </button>
  )
}

export default FullscreenButton