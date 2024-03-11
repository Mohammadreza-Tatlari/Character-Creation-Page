
import VolumeContainer from "../VolumeContainer";
import SelectingVolume from "../SelectingVolume";
import { RectangleContainerDynamic } from "../RectangleContainer";
import ColorsTable, { ColorsTableDynamic } from "../ColorsTable";
import PropertyContainer1 from "../PropertyContainer";

function HairProperties() {
  return (
    <div className="pt-[20px]">
    <PropertyContainer1 >
      <RectangleContainerDynamic />
      <VolumeContainer>
        <SelectingVolume title="Hair contrast" />
        <SelectingVolume title="Hair Reflection" />
      </VolumeContainer>
      {/* <ColorsTable title="HAIR COLOR" /> */}
      <ColorsTableDynamic title="HAIR COLOR" />
    </PropertyContainer1>
    </div>
  );
}

export default HairProperties;
