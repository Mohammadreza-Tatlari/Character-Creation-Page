'use client';

const PageTitle = () => {
  return (
    <div className="w-[409px] flex flex-col items-start justify-start max-w-full text-left text-11xl text-white font-gilroy-bold">
      <h1 className="m-0 w-[223px] relative text-inherit tracking-[0.15em] leading-[134%] uppercase  inline-block mq850:text-5xl mq850:leading-[32px] mq450:text-lg mq450:leading-[24px]">
        <p className="font-gilroy-black m-0">{`CHARACTER `}</p>
        <p className="font-gilroy-black m-0">{`CREATION `}</p>
      </h1>
      <div className="self-stretch text-mini tracking-[0.02em] font-gilroy-bold text-darkgray z-[5]">
        Hello friend, make your own character and enjoy, don't worry if there is
        a problem you can change it later.
      </div>
    </div>
  );
};

export default PageTitle;
