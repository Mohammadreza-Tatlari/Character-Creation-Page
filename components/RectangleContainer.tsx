import React from "react";

interface RectangleContainerProp {}

// the RectangleContainer in use
export const RectangleContainerDynamic = () => {

  let ArrayOfContent = [1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5];
  // rounded-tl-lg rounded-tr-none rounded-b-none
  return (
    <div className="w-[437px] h-[425px] overflow-hidden shrink-0 flex flex-row items-center justify-end gap-[0px_9px]">
      <div className="grid grid-cols-6 items-center justify-start gap-[1px_1px] overflow-hidden shrink-0">
       {
        ArrayOfContent.map((items , index) => (
          <div className={`${index == 0 ? `rounded-tl-lg rounded-tr-none rounded-b-none` : ``} 
          ${index == 5 ? `rounded-tl-none rounded-tr-lg rounded-b-none` : ``}
          w-[70px] relative bg-gray-400 h-[70px]`} />
        ))
       }
        <div className="w-[70px] relative bg-gray-400 h-[70px]" />
      </div>
      <div className="w-[3px] relative rounded-4xl bg-gray-600 h-[423px]">
        <div className="absolute top-[27px] left-[0px] rounded-4xl bg-lawngreen-100 w-[3px] h-[52px]" />
      </div>
    </div>
  );
};


export default function RectangleContainer({}: RectangleContainerProp) {
  return (
    <div className="w-[437px] h-[425px] overflow-hidden shrink-0 flex flex-row items-center justify-end gap-[0px_9px]">
      <div className="w-[425px] h-[425px] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[1px_0px]">
        <div className="w-[425px] h-[70px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[0px_1px]">
          <div className="w-[70px] relative rounded-tl-lg rounded-tr-none rounded-b-none bg-gray-400 h-[70px]" />
          <div className="w-[70px] relative bg-gray-400 h-[70px]" />
          <div className="w-[70px] relative bg-gray-400 h-[70px]" />
          <div className="w-[70px] relative bg-gray-400 h-[70px]" />
          <div className="w-[70px] relative bg-gray-400 h-[70px]" />
          <div className="w-[70px] relative rounded-tl-none rounded-tr-lg rounded-b-none bg-gray-400 h-[70px]" />
        </div>
        <div className="w-[425px] h-[70px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[0px_1px]">
          <div className="w-[70px] relative bg-gray-400 h-[70px]" />
          <div className="w-[70px] relative bg-gray-400 h-[70px]" />
          <div className="w-[70px] relative bg-gray-400 h-[70px]" />
          <div className="w-[70px] relative bg-gray-400 h-[70px]" />
          <div className="w-[70px] relative bg-gray-400 h-[70px]" />
          <div className="w-[70px] relative bg-gray-400 h-[70px]" />
        </div>
        <div className="w-[425px] h-[70px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[0px_1px]">
          <div className="w-[70px] relative bg-gray-400 h-[70px]" />
          <div className="w-[70px] relative bg-gray-400 h-[70px]" />
          <div className="w-[70px] relative bg-gray-400 h-[70px]" />
          <div className="w-[70px] relative bg-gray-400 h-[70px]" />
          <div className="w-[70px] relative bg-gray-400 h-[70px]" />
          <div className="w-[70px] relative bg-gray-400 h-[70px]" />
        </div>
        <div className="w-[425px] h-[70px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[0px_1px]">
          <div className="w-[70px] relative bg-gray-400 h-[70px]" />
          <div className="w-[70px] relative bg-gray-400 h-[70px]" />
          <div className="w-[70px] relative bg-gray-400 h-[70px]" />
          <div className="w-[70px] relative bg-gray-400 h-[70px]" />
          <div className="w-[70px] relative bg-gray-400 h-[70px]" />
          <div className="w-[70px] relative bg-gray-400 h-[70px]" />
        </div>
        <div className="w-[425px] h-[70px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[0px_1px]">
          <div className="w-[70px] relative bg-gray-400 h-[70px]" />
          <div className="w-[70px] relative bg-gray-400 h-[70px]" />
          <div className="w-[70px] relative bg-gray-400 h-[70px]" />
          <div className="w-[70px] relative bg-gray-400 h-[70px]" />
          <div className="w-[70px] relative bg-gray-400 h-[70px]" />
          <div className="w-[70px] relative bg-gray-400 h-[70px]" />
        </div>
        <div className="w-[425px] h-[70px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[0px_1px]">
          <div className="w-[70px] relative rounded-t-none rounded-br-none rounded-bl-lg bg-gray-400 h-[70px]" />
          <div className="w-[70px] relative bg-gray-400 h-[70px]" />
          <div className="w-[70px] relative bg-gray-400 h-[70px]" />
          <div className="w-[70px] relative bg-gray-400 h-[70px]" />
          <div className="w-[70px] relative bg-gray-400 h-[70px]" />
          <div className="w-[70px] relative rounded-t-none rounded-br-lg rounded-bl-none bg-gray-400 h-[70px]" />
        </div>
      </div>
      <div className="w-[3px] relative rounded-4xl bg-gray-600 h-[423px]">
        <div className="absolute top-[27px] left-[0px] rounded-4xl bg-lawngreen-100 w-[3px] h-[52px]" />
      </div>
    </div>
  );
}

