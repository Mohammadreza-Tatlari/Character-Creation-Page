import type { NextPage } from "next";
import VolumeContainer from "../VolumeContainer";
import SelectingVolume from "../SelectingVolume";
import RectangleContainer from "../RectangleContainer";
import ColorsTable from "../ColorsTable";
import PropertyContainer1 from "../PropertyContainer";

function HairProperties() {
  return (
    <div className="transition">
    <PropertyContainer1 >
      <RectangleContainer />
      <VolumeContainer>
        <SelectingVolume title="Hair contrast" />
        <SelectingVolume title="Hair Reflection" />
      </VolumeContainer>
      <ColorsTable title="HAIR COLOR" />
    </PropertyContainer1>
    </div>
  );
}

export default HairProperties;
