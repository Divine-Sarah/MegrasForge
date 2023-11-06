import React from 'react'
import Link from 'next/link'

export default function page() {
  return (


    <div className='flex w-full justify-evenly'>
      <Link href="/upload-button">Upload Button</Link>
      <Link href="/upload-dnd">Upload Drag n Drop</Link>
    </div>
  )
}
