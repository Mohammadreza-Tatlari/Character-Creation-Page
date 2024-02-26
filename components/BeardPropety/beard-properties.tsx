import type { NextPage } from "next";
import VolumeContainer from "../VolumeContainer";
import SelectingVolume from "../SelectingVolume";
import RectangleContainer from "../RectangleContainer";
import ColorsTable from "../ColorsTable";
import PropertyContainer1 from "../PropertyContainer";

function BeardProperties() {
  return (
    <PropertyContainer1>
      <RectangleContainer />
      <VolumeContainer>
        <SelectingVolume title="Beard contrast" />
        <SelectingVolume title="Beard Reflection" />
      </VolumeContainer>
      <ColorsTable title="Beard COLOR" />
    </PropertyContainer1>
  );
}

export default BeardProperties;
