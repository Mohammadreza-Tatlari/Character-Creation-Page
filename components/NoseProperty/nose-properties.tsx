'use client'

import VolumeContainer from "../VolumeContainer";
import SelectingVolume from "../SelectingVolume";
import { PropertyContainer2 } from "../PropertyContainer";
import { SkinColorTable } from "../ColorsTable";

function NoseProperties() {
  return (
    <div className="pt-[230px] transition">
    <PropertyContainer2>
      <VolumeContainer>
        <SelectingVolume title="NOSE STYLE" />
        <SelectingVolume title="NOSE SIZE" />
      </VolumeContainer>
      <SkinColorTable title="NOSE COLOR"/>
    </PropertyContainer2>
    </div>
  );
}

export default NoseProperties;
