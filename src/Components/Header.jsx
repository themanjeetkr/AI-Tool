import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div
      className='min-h-screen mb-4 bg-cover flex items-center w-full overflow-hidden'
      style={{
        backgroundImage: "url('/header_img.png')", // ✅ points to public/header_img.png
      }}
      id='header'
    >
      <Navbar />
    </div>
  )
}

export default Header
