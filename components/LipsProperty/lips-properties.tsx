
import VolumeContainer from "../VolumeContainer";
import SelectingVolume from "../SelectingVolume";
import ColorsTable, { LipstickColorTable } from "../ColorsTable";
import PropertyContainer1, { PropertyContainer2 } from "../PropertyContainer";

function LipsProperties() {
  return (
    <div className="pt-[30px]">
    <PropertyContainer2>
      <VolumeContainer>
        <SelectingVolume title="LIPS STYLE" />
        <SelectingVolume title="LIPS THICKNESS" />
        <SelectingVolume title="LIPSTICK" />
        <SelectingVolume title="LIPS LINEAR" />
      </VolumeContainer>
      <ColorsTable title="LIPS COLOR" />
      <LipstickColorTable />
    </PropertyContainer2>
    </div>
  );
}

export default LipsProperties;
