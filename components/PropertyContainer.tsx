'use client'
import React from "react";

interface PropertyContainerProp {
  children: React.ReactNode;
}

export default function PropertyContainer1({
  children,
}: PropertyContainerProp) {
  return (
    <div className="flex flex-col items-start justify-start gap-2 py-0 px-0 w-[260px] h-456 text-left text-mini text-white font-gilroy-bold">
      {children}
    </div>
  );
}

export function PropertyContainer2({ children }: PropertyContainerProp) {
  return (
    <div className="flex flex-col items-start justify-start gap-2 py-0 max-w-full w-[260px] h-456 text-left text-mini text-white font-gilroy-bold mq450:gap-[41px_0px]">
      {children}
    </div>
  );
}
