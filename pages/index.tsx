"use client";
import PageTitle from "../components/page-title";
import UserTitle from "../components/user-title";
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
import AvatarCharacter from "../components/avatar-character";

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
  const [step, setStep] = useState<PropertyComponents>(0);

  function changeStep(value: number) {
    setStep(value);
  }

  return (
    <>
      <div className="max-w-screen h-screen mx-auto min-h-screen relative bg-gray-500 pt-5 pr-11 pl-[43px] box-border">
        <div className="flex justify-between w-full">
          <div className="pl-1">
            <SlopedBars />
            <PageTitle />
          </div>
          <UserTitle />
        </div>
        <div className="flex justify-start w-full">
          <div className="flex h-fit space-x-80 flex-row justify-start pt-10">
            <div className="flex flex-col items-start justify-start mq1525:flex-1">
              <div className="flex flex-row justify-between gap-[20px] mq850:flex-wrap">
                <div className="flex flex-row space-x-16">
                  <div className=" pt-[91px] ">
                    <PropertySidebar OnChangeStep={changeStep} value={step} />
                  </div>
                  <div>
                    {step == 0 && <SkinProperty />}
                    {step == 1 && <HairProperties />}
                    {step == 2 && <BeardProperties />}
                    {step == 3 && <EyesProperties />}
                    {step == 4 && <EyebrowProperties />}
                    {step == 5 && <EarProperties />}
                    {step == 6 && <LipsProperties />}
                    {step == 7 && <NoseProperties />}
                  </div>
                </div>
              </div>
            </div>
            <div className=" self-end">
              <AvatarCharacter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
