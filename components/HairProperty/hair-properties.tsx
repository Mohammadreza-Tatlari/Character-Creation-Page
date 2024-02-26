import type { NextPage } from "next";
import VolumeContainer from "../VolumeContainer";
import SelectingVolume from "../SelectingVolume";
import RectangleContainer from "../RectangleContainer";
import ColorsTable from "../ColorsTable";
import PropertyContainer1 from "../PropertyContainer";

function HairProperties() {
  return (
    <PropertyContainer1>
      <RectangleContainer />
      <VolumeContainer>
        <SelectingVolume title="Hair contrast" />
        <SelectingVolume title="Hair Reflection" />
      </VolumeContainer>
      <ColorsTable title="HAIR COLOR" />
    </PropertyContainer1>
  );
}

export default HairProperties;
