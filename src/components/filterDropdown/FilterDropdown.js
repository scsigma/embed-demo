import React from "react";
import { CheckboxCheckmark } from "../../components/CheckboxCheckmark";
import { MagnifyingGlass } from "../../icons/MagnifyingGlass";
import { SizeMediumStyleFilled1 } from "../../icons/SizeMediumStyleFilled1";
import styled from "styled-components";

const StyledFilterDropdown = styled.div`
  align-items: flex-start;
  background-color: #ffffff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  width: 285px;

  & .frame {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 8px;
    padding: var(--spacing-space2);
    position: relative;
    width: 100%;
  }

  & .div {
    align-items: center;
    align-self: stretch;
    background-color: var(--semantic-tokens-background-neutral-soft);
    border-radius: 5px;
    display: flex;
    flex: 0 0 auto;
    gap: 8px;
    padding: 4px 8px;
    position: relative;
    width: 100%;
  }

  & .magnifying-glass {
    height: 16px !important;
    position: relative !important;
    width: 16px !important;
  }

  & .text-wrapper {
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    color: var(--semantic-tokens-text-neutral-softer);
    display: -webkit-box;
    flex: 1;
    font-family: var(--paragraph-small-default-font-family);
    font-size: var(--paragraph-small-default-font-size);
    font-style: var(--paragraph-small-default-font-style);
    font-weight: var(--paragraph-small-default-font-weight);
    height: 20px;
    letter-spacing: var(--paragraph-small-default-letter-spacing);
    line-height: var(--paragraph-small-default-line-height);
    overflow: hidden;
    position: relative;
    text-overflow: ellipsis;
  }

  & .sort-descending-wrapper {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    position: relative;
  }

  & .sort-descending {
    height: 24px !important;
    position: relative !important;
    width: 24px !important;
  }

  & .frame-wrapper {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 8px;
    padding: 0px var(--spacing-space2) 8px var(--spacing-space2);
    position: relative;
    width: 100%;
  }

  & .frame-2 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    position: relative;
    width: 100%;
  }

  & .list-item {
    align-items: center;
    align-self: stretch;
    border-radius: 4px;
    display: flex;
    gap: 8px;
    height: 32px;
    overflow: hidden;
    padding: 0px var(--spacing-space1) 0px var(--spacing-space1);
    position: relative;
    width: 100%;
  }

  & .text {
    align-items: center;
    display: flex;
    flex: 1;
    flex-grow: 1;
    gap: 8px;
    position: relative;
    z-index: 0;
  }

  & .text-wrapper-2 {
    color: var(--textprimary);
    font-family: var(--presets-copy-copy-default-font-family);
    font-size: var(--presets-copy-copy-default-font-size);
    font-style: var(--presets-copy-copy-default-font-style);
    font-weight: var(--presets-copy-copy-default-font-weight);
    letter-spacing: var(--presets-copy-copy-default-letter-spacing);
    line-height: var(--presets-copy-copy-default-line-height);
    margin-top: -1px;
    position: relative;
    width: 168px;
  }

  & .list-item-2 {
    align-items: center;
    align-self: stretch;
    border-radius: 4px;
    display: flex;
    gap: 8px;
    height: 32px;
    padding: 0px var(--spacing-space1) 0px var(--spacing-space1);
    position: relative;
    width: 100%;
  }

  & .text-wrapper-3 {
    color: var(--textneutral-soft);
    font-family: var(--presets-copy-copy-default-font-family);
    font-size: var(--presets-copy-copy-default-font-size);
    font-style: var(--presets-copy-copy-default-font-style);
    font-weight: var(--presets-copy-copy-default-font-weight);
    letter-spacing: var(--presets-copy-copy-default-letter-spacing);
    line-height: var(--presets-copy-copy-default-line-height);
    margin-top: -1px;
    position: relative;
    width: 168px;
  }
`;

export const FilterDropdown = () => {
  return (
    <StyledFilterDropdown>
      <div className="frame">
        <div className="div">
          <MagnifyingGlass className="magnifying-glass" color="#B0B0B0" />
          <div className="text-wrapper">Search</div>
          <div className="sort-descending-wrapper">
            <SizeMediumStyleFilled1 className="sort-descending" />
          </div>
        </div>
      </div>
      <div className="frame-wrapper">
        <div className="frame-2">
          <div className="list-item">
            <CheckboxCheckmark size="sixteen-px" />
            <div className="text">
              <div className="text-wrapper-2">Nick Holmes</div>
            </div>
          </div>
          <div className="list-item-2">
            <CheckboxCheckmark size="sixteen-px" />
            <div className="text">
              <div className="text-wrapper-3">Lucy Daniels</div>
            </div>
          </div>
          <div className="list-item-2">
            <CheckboxCheckmark size="sixteen-px" />
            <div className="text">
              <div className="text-wrapper-3">Charlize Richardson</div>
            </div>
          </div>
          <div className="list-item-2">
            <CheckboxCheckmark size="sixteen-px" />
            <div className="text">
              <div className="text-wrapper-3">Julius Squire</div>
            </div>
          </div>
          <div className="list-item-2">
            <CheckboxCheckmark size="sixteen-px" />
            <div className="text">
              <div className="text-wrapper-3">Ethan Khan</div>
            </div>
          </div>
        </div>
      </div>
    </StyledFilterDropdown>
  );
};
