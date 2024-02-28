'use client'

export default function UserTitle () {
  return (
    <div className="w-[193px] flex flex-row justify-between relative gap-[1px_0px] text-6xl text-white font-gilroy-bold">
      <div className="ml-1">
        <img
          className="w-1.5 h-1.5 object-contain [transform:scale(4.267)]"
          loading="eager"
          alt=""
          src="/group-1939.svg"
        />
      </div>
      <div>
        <h2 className="my-auto capitalize relative text-inherit font-normal font-inherit shrink-0">
          Keivan James
        </h2>
        <div className="text-mid text-lawngreen-100 left-0 uppercase">Female</div>
      </div>
    </div>
  );
};

