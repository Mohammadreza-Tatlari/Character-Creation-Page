"use client";

import React from "react";

interface ColorsTableProp {
  title: String;
}

interface SkinColorTableProps {
  title: string;
}

export function ColorsTableDynamic({ title }: ColorsTableProp) {
  const HexCodes = [
    "#1c1f21",
    "#312e2c",
    "#35261c",
    "#5c3b24",
    "#6d4c35",
    "#6b503b",
    "#7f684e",
    "#9f7f59",
    "#99815d",
    "#d6b97b",
    "#9f7f59",
    "#845039",
    "#7c140f",
    "#a02e19",
    "#682b1f",
    "#b64b28",
    "#626262",
    "#808080",
    "#aaa",
    "#c5c5c5",
    "#463955",
    "#763c76",
    "#5a3f6b",
    "#ed74e3",
    "#eb4b93",
    "#f299bc",
    "#04959e",
    "#025f86",
    "#023974",
    "#3fa16a",
    "#217c61",
    "#763c76",
    "#b6c034",
    "#70a90b",
    "#f28831",
    "#e69102",
    "#e5b103",
    "#dcb857",
    "#439d13",
    "#fb8057",
    "#d1593c",
    "#ce3120",
    "#ad0903",
    "#880302",
    "#1f1814",
    "#37291e",
    "#2e221b",
    "#291f19",
    "#e3b896",
    "#025f86",
    "#fff",
    "#000",
  ];

  const ArrayOfColors = [
    "gray-1500",
    "darkslategray-200",
    "gray-900",
    "saddlebrown-400",
    "dimgray-500",
    "dimgray-400",
    "dimgray-200",
    "tan-400",
    "tan-200",
    "burlywood-200",
    "tan-300",
    "sienna-200",
    "saddlebrown-600",
    "maroon",
    "brown",
    "sienna-100",
    "dimgray-300",
    "gray-700",
    "darkgray-100",
    "silver",
    "dimgray-600",
    "darkslateblue-200",
    "darkslateblue-100",
    "violet",
    "hotpink",
    "palevioletred",
    "darkcyan",
    "steelblue",
    "darkslateblue-300",
    "seagreen-100",
    "seagreen-200",
    "darkslategray-100",
    "yellowgreen-100",
    "yellowgreen-200",
    "green",
    "darkkhaki",
    "goldenrod",
    "orange",
    "chocolate",
    "coral-100",
    "coral-200",
    "firebrick-100", //
    "firebrick-200",
    "darkred",
    "gray-1700",
    "gray-1300",
    "gray-1000",
    "gray-800",
    "dimgray-100",
    "tan-500",
    "black",
    "white",
  ];

  
const colorsWithoutQuotes = HexCodes.map((color) => color.replace(/"/g, ""));
const slicedhex = HexCodes.map((color) => color.slice(0, length - 1) )

console.log(colorsWithoutQuotes);

  return (
    <div className="w-[100px] h-[105px] shrink-0 flex flex-col items-start justify-start gap-[1px_0px] text-left text-mini text-white font-gilroy-bold">
      <div className="relative tracking-[0.05em] leading-[140%] uppercase mb-2">
        {title}
      </div>
      <div className="w-[345px] h-[90px] flex flex-col items-start justify-start gap-[4px_0px]">
        <div className="HairColorTable">
          {ArrayOfColors.map((color) => (
            <div
              className={`bg-${color} w-[19px] relative rounded-sm h-[19px]`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function SkinColorTableDynamic({ title }: SkinColorTableProps) {
  const ArraySkinColor = [
    "bg-sandybrown",
    "bg-peru",
    "bg-tan-200",
    "bg-sienna-200",
    "bg-gray-100",
    "bg-saddlebrown-200",
    "bg-gray-200",
    "bg-burlywood-200",
    "bg-saddlebrown-300",
    "bg-saddlebrown-100",
  ];
  return (
    <div className="w-auto h-[65px] flex flex-col items-start justify-start gap-[2px_0px]">
      <div className="relative tracking-[0.05em] leading-[100%] uppercase">
        {title}
      </div>
      <div className="mt-1 grid grid-cols-5 grid-rows-2 items-start justify-start gap-0.5">
        {ArraySkinColor.map((color) => (
          <div className={`${color} h-[18px] w-[18px] relative rounded-sm `} />
        ))}
      </div>
    </div>
  );
}

export function LipstickColorTableDynamic() {
  const ArrayOfLipstick = [
    "rose-500",
    "blue-100",
    "orange",
    "pink-400",
    "pink-800",
    "pink-900",
    "gray-200",
    "rose-900",
    "rose-800",
    "rose-500",
    "pink-800",
    "pink-500",
    "gray-200",
    "rose-700",
    "rose-600",
    "rose-300",
    "burlywood-200",
    "purple-400",
  ];

  return (
    <div className="w-[129px] h-[84px] flex flex-col items-start justify-start mt-2 gap-[1px_0px]">
      <div className="relative tracking-[0.05em] leading-[100%] uppercase">
        LIPSTICK COLOR
      </div>
      <div className="mt-1 self-stretch grid grid-cols-6 grid-rows-3 items-start justify-start gap-0.5">
        {ArrayOfLipstick.map((color) => (
          <div
            className={`h-[18px] w-[18px] relative rounded-sm bg-${color}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function ColorsTable({ title }: ColorsTableProp) {
  return (
    <div className="w-[425px] h-[150px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[1px_0px] text-left text-mini text-white font-gilroy-bold">
      <div className="relative tracking-[0.05em] leading-[140%] uppercase mb-2">
        {title}
      </div>
      <div className="w-[425px] h-32 flex flex-col items-center justify-start gap-[4px_0px]">
        <div className="w-[425px] h-[29px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[0px_4px]">
          <div className="w-[29px] relative rounded-sm bg-gray-1500 h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-darkslategray-200 h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-gray-900 h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-saddlebrown-400 h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-dimgray-500 h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-dimgray-400 h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-dimgray-200 h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-tan-400 h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-tan-200 h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-burlywood-200 h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-tan-300 h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-sienna-200 h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-saddlebrown-600 h-[29px]" />
        </div>
        <div className="w-[425px] h-[29px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[0px_4px]">
          <div className="w-[29px] relative rounded-sm bg-maroon h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-brown h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-sienna-100 h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-dimgray-300 h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-gray-700 h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-darkgray-100 h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-silver h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-dimgray-600 h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-darkslateblue-200 h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-darkslateblue-100 h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-violet h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-hotpink h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-palevioletred h-[29px]" />
        </div>
        <div className="w-[425px] h-[29px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[0px_4px]">
          <div className="w-[29px] relative rounded-sm bg-darkcyan h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-steelblue h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-darkslateblue-300 h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-seagreen-100 h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-seagreen-200 h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-darkslategray-100 h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-yellowgreen-100 h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-yellowgreen-200 h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-green h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-darkkhaki h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-goldenrod h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-orange h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-chocolate h-[29px]" />
        </div>
        <div className="w-[425px] h-[29px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[0px_4px]">
          <div className="w-[29px] relative rounded-sm bg-coral-100 h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-coral-200 h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-firebrick-100 h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-firebrick-200 h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-darkred h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-gray-1700 h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-gray-1300 h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-gray-1000 h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-gray-800 h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-dimgray-100 h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-tan-500 h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-black h-[29px]" />
          <div className="w-[29px] relative rounded-sm bg-white h-[29px]" />
        </div>
      </div>
    </div>
  );
}

export function SkinColorTable({ title }: SkinColorTableProps) {
  return (
    <div className="w-[161px] h-[84px] flex flex-col items-start justify-start gap-[1px_0px]">
      <div className="relative tracking-[0.05em] leading-[140%] uppercase">
        {title}
      </div>
      <div className="self-stretch flex-1 flex flex-row flex-wrap items-start justify-start gap-[4px_0.5px]">
        <div className="h-[29px] w-[29px] relative rounded-sm bg-sandybrown" />
        <div className="h-[29px] w-[29px] relative rounded-sm bg-peru" />
        <div className="h-[29px] w-[29px] relative rounded-sm bg-tan-200" />
        <div className="h-[29px] w-[29px] relative rounded-sm bg-sienna-200" />
        <div className="h-[29px] w-[29px] relative rounded-sm bg-gray-100" />
        <div className="h-[29px] w-[29px] relative rounded-sm bg-saddlebrown-200" />
        <div className="h-[29px] w-[29px] relative rounded-sm bg-gray-200" />
        <div className="h-[29px] w-[29px] relative rounded-sm bg-burlywood-200" />
        <div className="h-[29px] w-[29px] relative rounded-sm bg-saddlebrown-300" />
        <div className="h-[29px] w-[29px] relative rounded-sm bg-saddlebrown-100" />
      </div>
    </div>
  );
}

export function LipstickColorTable() {
  return (
    <div className="w-[161px] h-[84px] flex flex-col items-start justify-start gap-[1px_0px]">
      <div className="relative tracking-[0.05em] leading-[140%] uppercase">
        LIPSTICK COLOR
      </div>
      <div className="self-stretch grid grid-cols-6 grid-rows-3 items-start justify-start gap-[5px_30px]">
        <div className="h-[29px] w-[29px] relative rounded-sm bg-rose-500" />
        <div className="h-[29px] w-[29px] relative rounded-sm bg-blue-100" />
        <div className="h-[29px] w-[29px] relative rounded-sm bg-orange" />
        <div className="h-[29px] w-[29px] relative rounded-sm bg-pink-400" />
        <div className="h-[29px] w-[29px] relative rounded-sm bg-pink-800" />
        <div className="h-[29px] w-[29px] relative rounded-sm bg-pink-900" />
        <div className="h-[29px] w-[29px] relative rounded-sm bg-gray-200" />
        <div className="h-[29px] w-[29px] relative rounded-sm bg-rose-900" />
        <div className="h-[29px] w-[29px] relative rounded-sm bg-rose-800" />
        <div className="h-[29px] w-[29px] relative rounded-sm bg-rose-500" />
        <div className="h-[29px] w-[29px] relative rounded-sm bg-pink-800" />
        <div className="h-[29px] w-[29px] relative rounded-sm bg-pink-500" />
        <div className="h-[29px] w-[29px] relative rounded-sm bg-gray-200" />
        <div className="h-[29px] w-[29px] relative rounded-sm bg-rose-700" />
        <div className="h-[29px] w-[29px] relative rounded-sm bg-rose-600" />
        <div className="h-[29px] w-[29px] relative rounded-sm bg-rose-300" />
        <div className="h-[29px] w-[29px] relative rounded-sm bg-burlywood-200" />
        <div className="h-[29px] w-[29px] relative rounded-sm bg-purple-400" />
      </div>
    </div>
  );
}
