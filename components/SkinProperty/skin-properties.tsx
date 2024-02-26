import type { NextPage } from "next";
import RectangleContainer from "../RectangleContainer";
import VolumeContainer from "../VolumeContainer";
import SelectingVolume from "../SelectingVolume";
import { SkinColorTable } from "../ColorsTable";
import PropertyContainer1 from "../PropertyContainer";
const SkinProperty = () => {
  return (
    <PropertyContainer1>
      <RectangleContainer />
      <VolumeContainer>
        <SelectingVolume title="Jaw" />
        <SelectingVolume title="Cheek" />
        <SelectingVolume title="Neck" />
      </VolumeContainer>
      <SkinColorTable title="SKIN COLOR" />
    </PropertyContainer1>
  );
};

export default SkinProperty;
