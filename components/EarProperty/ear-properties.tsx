
import VolumeContainer from "../VolumeContainer";
import SelectingVolume from "../SelectingVolume";
import ColorsTable from "../ColorsTable";
import  { PropertyContainer2 } from "../PropertyContainer";
import { SkinColorTable } from "../ColorsTable";

function EarProperties() {
  return (
    <div className="pt-[180px]">
    <PropertyContainer2>
      <VolumeContainer>
        <SelectingVolume title="EAR STYLE" />
        <SelectingVolume title="EAR SIZE" />
        <SelectingVolume title="EARRINGS" />
      </VolumeContainer>
      <SkinColorTable title="EAR COLOR" />
    </PropertyContainer2>
    </div>
  );
}

export default EarProperties;
