import type { NextPage } from "next";

const UserTitle: NextPage = () => {
  return (
    <div className="w-[193px] flex flex-col items-end justify-start relative gap-[6px_0px] text-left text-6xl text-white font-gilroy-bold">
      <h2 className="m-0 h-[25px] relative text-inherit tracking-[0.04em] leading-[140%] font-normal font-inherit inline-block shrink-0 mq450:text-xl mq450:leading-[28px]">
        <span className="uppercase">K</span>
        <span className="capitalize">eivan James</span>
      </h2>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[21px] text-mid text-lawngreen-100">
        <div className="h-6 w-[45px] relative">
          <div className="absolute top-[0px] left-[0px] tracking-[0.04em] leading-[140%] uppercase">
            Male
          </div>
          <div className="absolute top-[0px] left-[0px] tracking-[0.04em] leading-[140%] uppercase text-lawngreen-200 inline-block [filter:blur(18px)] w-full h-full z-[1]">
            Male
          </div>
        </div>
      </div>
      <div className="w-1.5 h-1.5 absolute !m-[0] top-[24px] left-[0px] flex items-center justify-center z-[2]">
        <img
          className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(4.267)]"
          loading="eager"
          alt=""
          src="/group-1939.svg"
        />
      </div>
    </div>
  );
};

export default UserTitle;
