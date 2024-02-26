
import VolumeContainer from "../VolumeContainer";
import SelectingVolume from "../SelectingVolume";
import ColorsTable from "../ColorsTable";
import  { PropertyContainer2 } from "../PropertyContainer";

function EyebrowProperties() {
  return (
    <div className="pt-[90px]">
    <PropertyContainer2>
      <VolumeContainer>
        <SelectingVolume title="EYEBROW STYLE" />
        <SelectingVolume title="EYEBROW THICKNESS" />
        <SelectingVolume title="EYEBROW SHADOW" />
        <SelectingVolume title="EYEBROW LINEAR" />
      </VolumeContainer>
      <ColorsTable title="EYES COLOR" />
    </PropertyContainer2>
    </div>
  );
}

export default EyebrowProperties;
