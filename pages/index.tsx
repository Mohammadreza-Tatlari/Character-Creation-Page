'use client'
import PageTitle from "../components/page-title";
import UserTitle from "../components/user-title";
import AvatarProperty from "../components/avatar-property";
import SlopedBars from "../components/color-bars";
import NoseProperties from "../components/NoseProperty/nose-properties";
import PropertySidebar from "../components/property-sidebar";
import { useState } from "react";
import HairProperties from "../components/HairProperty/hair-properties";
import SkinProperty from "../components/SkinProperty/skin-properties";
import BeardProperties from "../components/BeardPropety/beard-properties";
import EyesProperties from "../components/EyesProperty/eyes-properties";
import EyebrowProperties from "../components/EyebrowProperty/eyebrow-properties";
import EarProperties from "../components/EarProperty/ear-properties";
import LipsProperties from "../components/LipsProperty/lips-properties";

enum PropertyComponents {
  Skin = 0,
  Hair = 1,
  Beard = 2,
  Eyes = 3,
  Eyebow = 4,
  Ears = 5,
  Lips = 6,
  Nose = 7,
}


const MainPage = () => {

const [step , setStep] = useState<PropertyComponents>(0);

  function changeStep(value:number) {
    setStep(value)
  }

  return (
    <div className="w-full relative bg-gray-500 overflow-hidden flex flex-row items-start justify-start pt-[34px] pb-0 pr-11 pl-[43px] box-border gap-[0px_188px] tracking-[normal] mq850:gap-[0px_188px] mq1225:gap-[0px_188px] mq1225:pl-[21px] mq1225:pr-[22px] mq1225:box-border mq1525:flex-wrap">
      <SlopedBars />
      <div className="w-[579px] flex flex-col items-start justify-start gap-[41px_0px] min-w-[579px] max-w-full mq850:gap-[41px_0px] mq850:min-w-full mq1525:flex-1">
        <PageTitle />
        <div className="m-0 self-stretch flex flex-row items-start justify-between gap-[20px] max-w-full mq850:flex-wrap">
          <div className="w-[50px] flex flex-col items-start justify-start pt-[91px] px-0 pb-0 box-border mq850:pt-[59px] mq850:box-border">
            <PropertySidebar OnChangeStep={changeStep} value={step}/>
          </div>
          {step == 0 && (
            <SkinProperty />
          )}
          {step == 1 && (
            <HairProperties />
          )}
          {step == 2 && (
            <BeardProperties />
          )}
          {step == 3 && (
            <EyesProperties />
          )}
          {step == 4 && (
            <EyebrowProperties />
          )}
          {step == 5 && (
            <EarProperties />
          )}
          {step == 6 && (
            <LipsProperties />
          )}
          {step == 7 && (
           <NoseProperties />
            
          )}
        </div>
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
