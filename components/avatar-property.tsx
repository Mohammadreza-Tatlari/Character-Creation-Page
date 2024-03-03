import type { NextPage } from "next";
import AvatarCharacter from "./avatar-character";

const AvatarProperty: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start max-w-full text-left text-mini text-white font-gilroy-bold">
      <AvatarCharacter />
    </div>
  );
};

export default AvatarProperty;
