import type { NextPage } from "next";
import VolumeContainer from "../VolumeContainer";
import SelectingVolume from "../SelectingVolume";
import RectangleContainer from "../RectangleContainer";
import ColorsTable from "../ColorsTable";
import PropertyContainer1, { PropertyContainer2 } from "../PropertyContainer";

function EyesProperties() {
  return (
    <div className="pt-[90px]">
    <PropertyContainer2>
      <VolumeContainer>
        <SelectingVolume title="EYES STYLE" />
        <SelectingVolume title="EYELASH" />
        <SelectingVolume title="EYE SHADOW" />
        <SelectingVolume title="EYE LINEAR" />
      </VolumeContainer>
      <ColorsTable title="EYES COLOR" />
    </PropertyContainer2>
    </div>
  );
}

export default EyesProperties;
