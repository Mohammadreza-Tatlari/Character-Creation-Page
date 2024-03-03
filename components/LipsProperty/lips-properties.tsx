'use client'

import VolumeContainer from "../VolumeContainer";
import SelectingVolume from "../SelectingVolume";
import ColorsTable, { ColorsTableDynamic, LipstickColorTable, LipstickColorTableDynamic } from "../ColorsTable";
import { PropertyContainer2 } from "../PropertyContainer";

function LipsProperties() {
  return (
    <div className="pt-[30px] transition">
    <PropertyContainer2>
      <VolumeContainer>
        <SelectingVolume title="LIPS STYLE" />
        <SelectingVolume title="LIPS THICKNESS" />
        <SelectingVolume title="LIPSTICK" />
        <SelectingVolume title="LIPS LINEAR" />
      </VolumeContainer>
      <ColorsTableDynamic title="LIPS COLOR" />
      <LipstickColorTableDynamic />
    </PropertyContainer2>
    </div>
  );
}

export default LipsProperties;
