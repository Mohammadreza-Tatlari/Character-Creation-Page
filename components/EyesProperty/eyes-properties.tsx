'use client';

import VolumeContainer from "../VolumeContainer";
import SelectingVolume from "../SelectingVolume";
import ColorsTable, { ColorsTableDynamic } from "../ColorsTable";
import { PropertyContainer2 } from "../PropertyContainer";

function EyesProperties() {
  return (
    <div className="pt-[90px] transition">
    <PropertyContainer2>
      <VolumeContainer>
        <SelectingVolume title="EYES STYLE" />
        <SelectingVolume title="EYELASH" />
        <SelectingVolume title="EYE SHADOW" />
        <SelectingVolume title="EYE LINEAR" />
      </VolumeContainer>
      <ColorsTableDynamic title="EYES COLOR" />
    </PropertyContainer2>
    </div>
  );
}

export default EyesProperties;
