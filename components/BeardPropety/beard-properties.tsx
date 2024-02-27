import type { NextPage } from "next";
import VolumeContainer from "../VolumeContainer";
import SelectingVolume from "../SelectingVolume";
import RectangleContainerDynamic from "../RectangleContainer";
import ColorsTable from "../ColorsTable";
import PropertyContainer1 from "../PropertyContainer";

function BeardProperties() {
  return (
    <div className="pt-[20px]">
      <PropertyContainer1>
        <RectangleContainerDynamic />
        <VolumeContainer>
          <SelectingVolume title="Beard contrast" />
          <SelectingVolume title="Beard Reflection" />
        </VolumeContainer>
        <ColorsTable title="Beard COLOR" />
      </PropertyContainer1>
    </div>
  );
}

export default BeardProperties;
