'use client';

import { useOnFullscreen } from "../store/useFullscreen";

const PageTitle = () => {
  const {isFullscreen} = useOnFullscreen((state) => state)
  console.log("fontsize is " , isFullscreen);
  
  return (
    <div className={`w-[419px] flex flex-col items-start justify-start max-w-full text-left  text-white font-gilroy-black`}>
      <h1 className={`${isFullscreen ? `text-12xl` : `text-11xl`} m-0 w-[223px] relative tracking-[0.15em] leading-[110%] uppercase inline-block mq850:leading-[32px] mq450:leading-[24px]`}>
        <p className="m-0">{`CHARACTER `}</p>
        <p className="m-0">{`CREATION `}</p>
      </h1>
      <div className={`${isFullscreen ? `w-[419px] text-base` : `w-[340px] text-mini`} self-stretch relative tracking-[0.02em] font-gilroy-semibold  text-gray-700 z-[5]`}>
        Hello friend, make your own character and enjoy, don't worry if there is
        a problem you can change it later.
      </div>
    </div>
  );
};

export default PageTitle;
