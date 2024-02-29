"use client";

import { useState } from "react";

interface PropertySidebarProps {
  OnChangeStep: (value: number) => void;
  value: number;
}

const PropertySidebar = ({ OnChangeStep, value }: PropertySidebarProps) => {
  function handleClick(value: number) {
    OnChangeStep(value);
  }
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[40px_0px] text-left text-mini text-white font-gilroy-bold">
    <div className="w-[50px] h-[50px] ">
      <div className="self-stretch flex flex-col items-start justify-start">
        <div
          onClick={() => handleClick(0)}
          className="cursor-pointer [border:none] p-0 self-stretch h-[50px] relative rounded-t-lg rounded-b-none group"
        >
          <div
            className={`${
              value == 0 ? `bg-lawngreen-100` : `bg-gray-300`
            } absolute top-[0px] left-[0px] rounded-t-lg rounded-b-none group-hover:bg-lawngreen-200 w-full h-full`}
          />
          <img
            className="absolute top-[14px] left-[13px] w-[23px] h-[23px] object-cover z-[1]"
            alt=""
            src="/user-2@2x.png"
          />
        </div>
        <div
          onClick={() => handleClick(1)}
          className="cursor-pointer self-stretch h-[50px] relative bg-gray-300 group"
        >
          <div
            className={`${
              value == 1 ? `bg-lawngreen-100` : `bg-gray-300`
            } absolute top-[0px] left-[0px] w-full h-full group-hover:bg-lawngreen-200 transition`}
          />
          <img
            className="absolute top-[15px] left-[15px] w-5 h-5 object-cover z-[1]"
            loading="eager"
            alt=""
            src="/maleshortblackhairshape-1@2x.png"
          />
        </div>
        <div
          onClick={() => handleClick(2)}
          className="cursor-pointer self-stretch h-[50px] relative bg-gray-300 group"
        >
          <div
            className={`${
              value == 2 ? `bg-lawngreen-100` : `bg-gray-300`
            } absolute top-[0px] left-[0px] w-full h-full group-hover:bg-lawngreen-200 transition`}
          />
          <img
            className="absolute top-[15px] left-[15px] w-5 h-5 object-cover z-[1]"
            loading="eager"
            alt=""
            src="/manwithbeard-1@2x.png"
          />
        </div>
        <div
          onClick={() => handleClick(3)}
          className="cursor-pointer self-stretch h-[50px] relative bg-gray-300 group"
        >
          <div
            className={`${
              value == 3 ? `bg-lawngreen-100` : `bg-gray-300`
            } absolute top-[0px] left-[0px] bg-gray-300 w-full h-full group-hover:bg-lawngreen-200 transition `}
          />
          <img
            className="absolute top-[15px] left-[15px] w-5 h-5 object-cover z-[1]"
            loading="eager"
            alt=""
            src="/eye-1@2x.png"
          />
        </div>
        <div
          onClick={() => handleClick(4)}
          className="cursor-pointer self-stretch h-[50px] relative bg-gray-300 group"
        >
          <div
            className={`${
              value == 4 ? `bg-lawngreen-100` : `bg-gray-300`
            }  absolute top-[0px] left-[0px] w-full h-full group-hover:bg-lawngreen-200 transition `}
          />
          <img
            className="absolute top-[12px] left-[12px] w-[25px] h-[25px] object-cover z-[1]"
            loading="eager"
            alt=""
            src="/eyebrow-1@2x.png"
          />
        </div>
        <div
          onClick={() => handleClick(5)}
          className="cursor-pointer self-stretch h-[50px] relative bg-gray-300 group"
        >
          <div
            className={`${
              value == 5 ? `bg-lawngreen-100` : `bg-gray-300`
            } absolute top-[0px] left-[0px] w-full h-full group-hover:bg-lawngreen-200 transition`}
          />
          <img
            className="absolute top-[15px] left-[15px] w-5 h-5 object-cover z-[1]"
            loading="eager"
            alt=""
            src="/ear-1@2x.png"
          />
        </div>
        <button
          onClick={() => handleClick(6)}
          className="cursor-pointer [border:none] p-0 bg-gray-300 self-stretch h-[50px] relative group"
        >
          <div
            className={`${
              value == 6 ? `bg-lawngreen-100` : `bg-gray-300`
            } absolute top-[0px] left-[0px] w-full h-full group-hover:bg-lawngreen-200 transition`}
          />
          <img
            className="absolute top-[15px] left-[15px] w-5 h-5 object-cover z-[1]"
            loading="eager"
            alt=""
            src="/lips-1@2x.png"
          />
        </button>
        <div
          onClick={() => handleClick(7)}
          className="cursor-pointer self-stretch h-[50px] relative rounded-t-none rounded-b-lg bg-gray-300 group "
        >
          <div
            className={`${
              value == 7 ? `bg-lawngreen-100` : `bg-gray-300`
            } absolute top-[0px] left-[0px] rounded-t-none rounded-b-lg w-full h-full group-hover:bg-lawngreen-200 transition`}
          />
          <img
            className="absolute top-[16px] left-[16px] w-[18px] h-[18px] object-cover z-[1]"
            loading="eager"
            alt=""
            src="/nose-1@2x.png"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-start gap-[6px_0px]">
        <img
          className="w-[100px] h-[100px] relative "
          loading="eager"
          alt=""
          src="/group-1938@2x.png"
        />
        <div className="relative tracking-[0.04em] leading-[140%] uppercase">
          SAVE
        </div>
      </div>
    </div>
  </div>
  );
};

export default PropertySidebar;
