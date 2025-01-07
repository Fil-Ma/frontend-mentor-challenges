import IpTrackerInputSection from "@components/IpTracker/IpTrackerInputSection";
import LeafletMap from "@components/IpTracker/LeafletMap";
import { TMapPosition } from "@components/IpTracker/types";
import { useState } from "react";
import styled from "styled-components";

const IpTracker = () => {
  const [position, setPosition] = useState<TMapPosition>([0, 0]);
  return (
    <Main>
      <IpTrackerInputSection onSubmit={(value) => setPosition(value)} />
      <LeafletMap position={position} />
    </Main>
  );
};

export default IpTracker;

const Main = styled.main`
  font-family: "Rubik", sans-serif;
  font-style: normal;
  min-height: inherit;
`;
