
const AvatarCharacter = () => {
  return (
    <div>
      <div className=" flex flex-col justify-center items-center relative max-w-full text-left text-mini text-white font-gilroy-bold">
        {/* */}
        <img
          className="h-[665px] w-[665px] object-cover z-[1] relative"
          alt=""
          src="/dgjfhms5603f3846da0490e9fac757c3e1e90cd-1-3@2x.png"
        />
        <div className="rounded-[50%] top-0 bottom-0 left-0 right-0 absolute bg-lawngreen-100 w-[409px] h-[409px] [filter:blur(500px)] -z-1" />{" "}
        {/* Buttoms under the Avatar */}
        <div className="flex flex-row space-x-10 -mt-16">
          <div className="min-w-24 flex flex-row justify-between items-center rounded-8xs bg-gray-400 z-[2] space-x-3 px-6 py-3">
            <div className="text-mini tracking-[0.05em] leading-[140%] uppercase font-gilroy-bold text-white text-left z-[1]">
              forward
            </div>
            <img
              className=" w-[13px] h-[17px] z-[1]"
              alt=""
              src="/vector-a.svg"
            />
          </div>
          <div className="min-w-20 flex flex-row justify-between items-center rounded-8xs bg-gray-400 z-[2] w-full h-full px-6 py-3">
            <div className=" tracking-[0.05em] leading-[140%] uppercase w-3 h-5 z-[1]">
              A
            </div>
            <img
              className=" w-[15px] h-full object-cover z-[1]"
              loading="eager"
              alt=""
              src="/rotate-1@2x.png"
            />
            <div className="tracking-[0.05em] leading-[140%] uppercase w-3 h-5 z-[1]">
              D
            </div>
            
          </div>
          <div className="min-w-28  flex flex-row justify-between items-center bg-gray-400 rounded-8xs z-[2]  px-6 py-3">
            <div className="text-mini tracking-[0.05em] leading-[140%] uppercase font-gilroy-bold text-white h-5 z-[1]">
              forward
            </div>
            <div className="flex ml-2">
            <img
                className="left-3 -mt-1 w-[15px] h-[15px] object-contain z-[1]"
                alt=""
                src="/rightarrow-2@2x.png"
              />
              <img
                className="w-[15px] -mb-1 h-[15px] object-contain z-[1]"
                alt=""
                src="/rightarrow-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarCharacter;
