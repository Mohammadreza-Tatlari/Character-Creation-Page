import type { NextPage } from "next";

const UserTitle: NextPage = () => {
  return (
    <div className="w-[193px] flex flex-row justify-start items-center space-x-1 gap-[6px_0px] text-white font-gilroy-bold">
      <img
        className="w-1.5 h-1.5 mr-3 object-contain [transform:scale(4.267)] z-10"
        loading="eager"
        alt=""
        src="/group-1939.svg"
      />
      <div className="flex flex-col justify-start items-start text-left space-y-1.5">
        <h2 className="m-0 h-[17px] text-inherit tracking-[0.04em] leading-[100%] font-normal font-inherit inline-block shrink-0 mq450:text-xl mq450:leading-[28px]">
          <span className="capitalize text-6xl">Sarah Miller</span>
        </h2>
        <div className="self-stretch text-mid text-lawngreen-100">
          <div className="tracking-[0.04em] leading-[140%] uppercase">
            {"female"}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default UserTitle;
