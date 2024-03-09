'use client'
import { useOnFullscreen } from "../store/useFullscreen";
import AvatarCharacter from "./avatar-character";


const AvatarProperty = () => {
  const {isFullscreen} = useOnFullscreen((state) => state)
  return (
    <div className={`${isFullscreen ? `mt-36` : `mt-28`} mt-28 self-stretch flex flex-row items-start justify-start max-w-full text-left text-mini text-white font-gilroy-bold`}>
      <AvatarCharacter />
    </div>
  );
};

export default AvatarProperty;
