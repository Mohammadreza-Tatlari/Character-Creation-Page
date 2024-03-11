'use client'
import React from 'react'

interface VolumeContainerProps{
    children: React.ReactNode
}
export default function VolumeContainer({children}:VolumeContainerProps) {
  return (
    <div className="w-auto ml-1 flex flex-col items-start justify-start gap-[15px] mt-3 max-w-full text-left text-mini text-white font-gilroy-bold">
        {children}
    </div>
  )
}
