import React from 'react'

interface VolumeContainerProps{
    children: React.ReactNode
}
export default function VolumeContainer({children}:VolumeContainerProps) {
  return (
    <div className="w-[440px] overflow-x-auto flex flex-col items-start justify-start gap-[15px] max-w-full text-left text-mini text-white font-gilroy-bold">
        {children}
    </div>
  )
}
