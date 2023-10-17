import React from "react";
import styled from "styled-components";
import { NamecandidateNameFrameScore10006 } from "./sections/NamecandidateNameFrameScore10006";
import { NamecandidateNameFrameScore10007 } from "./sections/NamecandidateNameFrameScore10007/NamecandidateNameFrameScore10007";
import { NamecandidateNameFrameScore10008 } from "./sections/NamecandidateNameFrameScore10008";

const StyledFrameScreen = styled.div`
  align-items: flex-start;
  background-color: #ffffff;
  border: 1px solid;
  border-color: #dfdfdf;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 955px;
  overflow: hidden;
  padding: 24px;
  position: relative;
  width: 791px;

  & .frame-47 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 9.41px;
    justify-content: center;
    position: relative;
    width: 100%;

    & .text-wrapper-27 {
      color: #000000;
      font-family: "Inter", Helvetica;
      font-size: 24px;
      font-weight: 600;
      letter-spacing: 0;
      line-height: 44.8px;
      margin-top: -1.18px;
      position: relative;
      white-space: nowrap;
      width: fit-content;
    }
  }
`;

export const FrameScreen = () => {
  return (
    <StyledFrameScreen>
      <div className="frame-47">
        <div className="text-wrapper-27">Overview</div>
      </div>
      <NamecandidateNameFrameScore10006 />
      <NamecandidateNameFrameScore10007 />
      <NamecandidateNameFrameScore10008 />
    </StyledFrameScreen>
  );
};