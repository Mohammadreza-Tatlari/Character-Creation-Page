"use client";
import React, { useState } from "react";

interface SelectingVolumeProps {
  title: String;
  value?: number;
}
export default function SelectingVolume({
  title,
}: SelectingVolumeProps) {
  const [volumeValue, setVolumeValue] = useState(350);

  function handleDecrease() {
    if (volumeValue > 1) {
      setVolumeValue(volumeValue - 1);
    }
  }

  function handleIncrease() {
    if (volumeValue < 355) {
      setVolumeValue(volumeValue + 1);
    }
  }

  return (
    <div className="w-[250px] h-[36px] overflow-hidden shrink-0 flex flex-col items-start justify-start py-0 pr-0 pl-px box-border gap-[1px_0px]">
      <div className="relative tracking-[0.05em] text-mini leading-[100%] uppercase">
        {title}
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[0px_2px] max-w-full text-base font-gilroy-semibold">
        <button onClick={handleDecrease} disabled={volumeValue == 1}
        className="disabled:opacity-25 cursor-pointer rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs bg-gray-400 hover:bg-lawngreen-200 active:bg-lawngreen-100/70 group flex flex-row items-center justify-center p-1.5 ">
          <img
            className="h-3 w-3 relative object-contain z-[1]"
            loading="eager"
            alt=""
            src="/arrowright.svg"
          />
        </button>
        <div className="self-stretch flex-1 bg-gray-400 flex flex-row items-center justify-center py-[4px] pr-[18px] pl-5 box-border min-w-[21px] max-w-full">
          {/* <div className="h-7 w-[354px] relative bg-gray-400 hidden max-w-full" /> */}
          <div className="relative text-mini tracking-[0.05em] leading-[100%] - uppercase z-[1]">
            {volumeValue}
          </div>
        </div>
        <button onClick={handleIncrease} disabled={volumeValue == 355}
        className="disabled:opacity-25 cursor-pointer rounded-tr-8xs rounded-tl-none rounded-bl-none rounded-br-8xs bg-gray-400 hover:bg-lawngreen-200 active:bg-lawngreen-100/70 group flex flex-row items-center justify-center p-1.5 ">
          <img
            className="h-3 w-3 relative object-contain z-[1]"
            loading="eager"
            alt=""
            src="/arrowright-1.svg"
          />
        </button>
        {/* <div className="h-10 w-10 relative group">
          <div className="cursor-pointer absolute top-[40px] left-[40px] rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs bg-gray-400 hover:bg-lawngreen-200 active:bg-lawngreen-100/70 w-full h-full [transform:_rotate(180deg)] [transform-origin:0_0] group" />
          <img
            className=" relative top-[10px] left-[10px] w-5 h-5 z-[1] cursor-pointer"
            alt=""
            src="/arrowright-1.svg"
          />
        </div> */}
      </div>
    </div>
  );
}
