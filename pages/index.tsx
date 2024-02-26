import type { NextPage } from "next";
import PageTitle from "../components/page-title";
import PropertyBar from "../components/property-bar";
import UserTitle from "../components/user-title";
import AvatarProperty from "../components/avatar-property";
import SlopedBars from "../components/color-bars";
import SkinProperty from "../components/SkinProperty/skin-properties";
import HairProperties from "../components/HairProperty/hair-properties";
import BeardProperties from "../components/BeardPropety/beard-properties";
import EyesProperties from "../components/EyesProperty/eyes-properties";
import EyebrowProperties from "../components/EyebrowProperty/eyebrow-properties";
import EarProperties from "../components/EarProperty/ear-properties";
import LipsProperties from "../components/LipsProperty/lips-properties";
import NoseProperties from "../components/NoseProperty/nose-properties";

const MainPage: NextPage = () => {
  return (
    <div className="w-full relative bg-gray-500 overflow-hidden flex flex-row items-start justify-start pt-[34px] pb-0 pr-11 pl-[43px] box-border gap-[0px_188px] tracking-[normal] mq850:gap-[0px_188px] mq1225:gap-[0px_188px] mq1225:pl-[21px] mq1225:pr-[22px] mq1225:box-border mq1525:flex-wrap">
      <SlopedBars />
      <div className="w-[579px] flex flex-col items-start justify-start gap-[41px_0px] min-w-[579px] max-w-full mq850:gap-[41px_0px] mq850:min-w-full mq1525:flex-1">
        <PageTitle />
        <form className="m-0 self-stretch flex flex-row items-start justify-between gap-[20px] max-w-full mq850:flex-wrap">
          <div className="w-[50px] flex flex-col items-start justify-start pt-[91px] px-0 pb-0 box-border mq850:pt-[59px] mq850:box-border">
            <PropertyBar />
          </div>
           {/* <HairProperties /> */}
           {/* <SkinProperty /> */}
           {/* <BeardProperties /> */}
           {/* <EyesProperties /> */}
           {/* <EyebrowProperties /> */}
           {/* <EarProperties /> */}
           {/* <LipsProperties /> */}
           <NoseProperties />
        </form>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border min-w-[693px] max-w-full mq850:min-w-full">
        <div className="self-stretch flex flex-col items-end justify-start gap-[63px_0px] max-w-full mq850:gap-[63px_0px] mq1225:gap-[63px_0px]">
          <UserTitle />
          <AvatarProperty />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
