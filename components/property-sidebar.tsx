import type { NextPage } from "next";

const PropertySidebar: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[40px_0px] text-left text-mini text-white font-gilroy-bold">
      <div className="self-stretch flex flex-col items-start justify-start">
        <button className="cursor-pointer [border:none] p-0 bg-lawngreen-100 self-stretch h-[50px] relative rounded-t-lg rounded-b-none">
          <div className="absolute top-[0px] left-[0px] rounded-t-lg rounded-b-none bg-lawngreen-100 w-full h-full hidden" />
          <img
            className="absolute top-[14px] left-[13px] w-[23px] h-[23px] object-cover z-[1]"
            alt=""
            src="/user-2@2x.png"
          />
        </button>
        <div className="self-stretch h-[50px] relative bg-gray-300">
          <div className="absolute top-[0px] left-[0px] bg-gray-300 w-full h-full hidden" />
          <img
            className="absolute top-[15px] left-[15px] w-5 h-5 object-cover z-[1]"
            loading="eager"
            alt=""
            src="/maleshortblackhairshape-1@2x.png"
          />
        </div>
        <div className="self-stretch h-[50px] relative bg-gray-300">
          <div className="absolute top-[0px] left-[0px] bg-gray-300 w-full h-full hidden" />
          <img
            className="absolute top-[15px] left-[15px] w-5 h-5 object-cover z-[1]"
            alt=""
            src="/manwithbeard-1@2x.png"
          />
        </div>
        <div className="self-stretch h-[50px] relative bg-gray-300">
          <div className="absolute top-[0px] left-[0px] bg-gray-300 w-full h-full hidden" />
          <img
            className="absolute top-[15px] left-[15px] w-5 h-5 object-cover z-[1]"
            alt=""
            src="/eye-1@2x.png"
          />
        </div>
        <div className="self-stretch h-[50px] relative bg-gray-300">
          <div className="absolute top-[0px] left-[0px] bg-gray-300 w-full h-full hidden" />
          <img
            className="absolute top-[12px] left-[12px] w-[25px] h-[25px] object-cover z-[1]"
            alt=""
            src="/eyebrow-1@2x.png"
          />
        </div>
        <div className="self-stretch h-[50px] relative bg-gray-300">
          <div className="absolute top-[0px] left-[0px] bg-gray-300 w-full h-full hidden" />
          <img
            className="absolute top-[15px] left-[15px] w-5 h-5 object-cover z-[1]"
            loading="eager"
            alt=""
            src="/ear-1@2x.png"
          />
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-gray-300 self-stretch h-[50px] relative">
          <div className="absolute top-[0px] left-[0px] bg-gray-300 w-full h-full hidden" />
          <img
            className="absolute top-[15px] left-[15px] w-5 h-5 object-cover z-[1]"
            alt=""
            src="/lips-1@2x.png"
          />
        </button>
        <div className="self-stretch h-[50px] relative rounded-t-none rounded-b-lg bg-gray-300">
          <div className="absolute top-[0px] left-[0px] rounded-t-none rounded-b-lg bg-gray-300 w-full h-full hidden" />
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
          className="w-[50px] h-[50px] relative object-contain"
          loading="eager"
          alt=""
          src="/group-1938@2x.png"
        />
        <div className="relative tracking-[0.04em] leading-[140%] uppercase">
          SAVE
        </div>
      </div>
    </div>
  );
};

export default PropertySidebar;
