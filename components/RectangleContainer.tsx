import { useOnFullscreen } from "../store/useFullscreen";


// the RectangleContainer in use
export const RectangleContainerDynamic = () => {
  const {isFullscreen} = useOnFullscreen((state) => state);
  let ArrayOfContent = [
    1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1,
    2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 2, 3, 4, 5,
  ];
  // rounded-tl-lg rounded-tr-none rounded-b-none
  return (
    <div className={`${isFullscreen ? `w-[325px] h-[325px]` : `w-[310px] h-[310px]` } ml-3 shrink-0 flex flex-row items-center justify-end gap-[0px_6px]`}>
        {/* overflow-x-hidden overflow-y-auto overflow-grow are added till now*/}
      <div className="pr-0 grid grid-cols-6 items-center h-full justify-start gap-[1px_1px] overflow-y-auto overflow-x-hidden flex-grow shrink-0
       "> {/*scrollbar scrollbar-thumb-lawngreen-100 -scroll-mr-2 scrollbar-thumb-rounded-full */}
        {ArrayOfContent.map((items, index) => (
          <div
            className={`${
              index == 0 ? `rounded-tl-lg rounded-tr-none rounded-b-none` : ``
            } 
          ${index == 5 ? `rounded-tl-none rounded-tr-lg rounded-b-none` : ``}
           relative bg-gray-400 
          ${isFullscreen ? `w-[53px] h-[53px]` : `w-[50px] h-[50px]`}`}
          />
        ))}
        <div className={`${isFullscreen ? `w-[53px] h-[53px]` : `w-[50px] h-[50px]`}  relative bg-gray-400 `} />
      </div>
    </div>
  );
};
