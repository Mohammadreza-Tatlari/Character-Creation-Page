
import { RectangleContainerDynamic } from "../RectangleContainer";
import VolumeContainer from "../VolumeContainer";
import SelectingVolume from "../SelectingVolume";
import { SkinColorTableDynamic } from "../ColorsTable";
import PropertyContainer1 from "../PropertyContainer";
const SkinProperty = () => {
  return (
    <div className="pt-[20px]">
    <PropertyContainer1>
     <RectangleContainerDynamic />
      <VolumeContainer>
        <SelectingVolume title="Jaw" />
        <SelectingVolume title="Cheek" />
        <SelectingVolume title="Neck" />
      </VolumeContainer>
      <SkinColorTableDynamic title="SKIN COLOR" />
    </PropertyContainer1>
    </div>
  );
};

export default SkinProperty;
