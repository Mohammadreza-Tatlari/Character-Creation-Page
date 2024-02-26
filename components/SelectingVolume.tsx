'use client'
import React from 'react'

interface SelectingVolumeProps{
  title: String;
  value?: number
}
export default function SelectingVolume({title , value=344}:SelectingVolumeProps) {
    
  return (
    <div className="w-[440px] h-[62px] overflow-hidden shrink-0 flex flex-col items-start justify-start py-0 pr-0 pl-px box-border gap-[1px_0px]">
        <div className="relative tracking-[0.05em] leading-[140%] uppercase">
         {title}
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[0px_3px] max-w-full text-base font-gilroy-semibold">
          <div className="rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs bg-gray-400 flex flex-row items-center justify-center p-2.5">
            <div className="h-10 w-10 relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs bg-gray-400 hidden" />
            <img
              className="h-5 w-5 relative object-contain z-[1]"
              loading="eager"
              alt=""
              src="/arrowright.svg"
            />
          </div>
          <div className="flex-1 bg-gray-400 flex flex-row items-center justify-center py-[9px] pr-[22px] pl-5 box-border min-w-[27px] max-w-full">
            <div className="h-10 w-[354px] relative bg-gray-400 hidden max-w-full" />
            <div className="relative tracking-[0.05em] leading-[140%] uppercase z-[1]">
              {value}
            </div>
          </div>
          <div className="h-10 w-10 relative">
            <div className="absolute top-[40px] left-[40px] rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs bg-gray-400 w-full h-full [transform:_rotate(180deg)] [transform-origin:0_0]" />
            <img
              className="absolute top-[10px] left-[10px] w-5 h-5 z-[1]"
              alt=""
              src="/arrowright-1.svg"
            />
          </div>
        </div>
      </div>
  )
}
