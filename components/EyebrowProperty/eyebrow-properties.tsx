
import VolumeContainer from "../VolumeContainer";
import SelectingVolume from "../SelectingVolume";
import ColorsTable, { ColorsTableDynamic } from "../ColorsTable";
import  { PropertyContainer2 } from "../PropertyContainer";

function EyebrowProperties() {
  return (
    <div className="pt-[90px] transition">
    <PropertyContainer2>
      <VolumeContainer>
        <SelectingVolume title="EYEBROW STYLE" />
        <SelectingVolume title="EYEBROW THICKNESS" />
        <SelectingVolume title="EYEBROW SHADOW" />
        <SelectingVolume title="EYEBROW LINEAR" />
      </VolumeContainer>
      <ColorsTableDynamic title="EYES COLOR" />
    </PropertyContainer2>
    </div>
  );
}

export default EyebrowProperties;
