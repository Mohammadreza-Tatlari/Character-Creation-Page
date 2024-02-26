import type { NextPage } from "next";

const AvatarCharacter: NextPage = () => {
  return (
    <div className="h-[923px] w-[923px] relative max-w-full text-left text-mini text-white font-gilroy-bold">
      <div className="absolute top-[257px] left-[257px] rounded-[50%] bg-lawngreen-100 [filter:blur(500px)] w-[409px] h-[409px]" />
      <img
        className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
        alt=""
        src="/dgjfhms5603f3846da0490e9fac757c3e1e90cd-1-3@2x.png"
      />
      <button className="cursor-pointer [border:none] p-0 bg-gray-400 absolute top-[826px] left-[283px] rounded-8xs w-[133px] h-[45px] z-[2]">
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-gray-400 w-full h-full hidden" />
        <img
          className="absolute top-[13px] left-[104px] w-[13px] h-[17px] z-[1]"
          alt=""
          src="/vector-a.svg"
        />
        <div className="absolute top-[12px] left-[16px] text-mini tracking-[0.05em] leading-[140%] uppercase font-gilroy-bold text-white text-left inline-block w-[78px] h-5 z-[1]">
          forward
        </div>
      </button>
      <div className="absolute top-[826px] left-[424px] rounded-8xs bg-gray-400 w-[133px] h-[45px] z-[2]">
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-gray-400 w-full h-full hidden" />
        <div className="absolute top-[12px] left-[25px] tracking-[0.05em] leading-[140%] uppercase inline-block w-3 h-5 z-[1]">
          A
        </div>
        <div className="absolute top-[12px] left-[99px] tracking-[0.05em] leading-[140%] uppercase inline-block w-3 h-5 z-[1]">
          D
        </div>
        <img
          className="absolute top-[7px] left-[52px] w-[30px] h-[30px] object-cover z-[1]"
          loading="eager"
          alt=""
          src="/rotate-1@2x.png"
        />
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-gray-400 absolute top-[826px] left-[565px] rounded-8xs w-[151px] h-[45px] z-[2]">
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-gray-400 w-full h-full hidden" />
        <div className="absolute top-[12px] left-[18px] text-mini tracking-[0.05em] leading-[140%] uppercase font-gilroy-bold text-white text-left inline-block w-[78px] h-5 z-[1]">
          forward
        </div>
        <div className="absolute top-[12px] left-[103px] w-[30px] h-5">
          <img
            className="absolute top-[5px] left-[15px] w-[15px] h-[15px] object-contain z-[1]"
            alt=""
            src="/rightarrow-1@2x.png"
          />
          <img
            className="absolute top-[0px] left-[0px] w-[15px] h-[15px] object-contain z-[1]"
            alt=""
            src="/rightarrow-2@2x.png"
          />
        </div>
      </button>
    </div>
  );
};

export default AvatarCharacter;
