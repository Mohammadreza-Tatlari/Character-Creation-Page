import React from "react";

interface PropertyContainerProp {
  children: React.ReactNode;
}

export default function PropertyContainer1({
  children,
}: PropertyContainerProp) {
  return (
    <div className="flex flex-col items-start justify-start gap-4 py-0 px-0 overflow-hidden w-440 h-796 text-left text-mini text-white font-gilroy-bold">
      {children}
    </div>
  );
}

export function PropertyContainer2({ children }: PropertyContainerProp) {
  return (
    <div className="w-[440px] flex flex-col items-start justify-start gap-[41px_0px] max-w-full text-left text-mini text-white font-gilroy-bold mq450:gap-[41px_0px]">
      {children}
    </div>
  );
}
