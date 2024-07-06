import type { IDateRangePicker } from "./type";

import { FC, useCallback, MouseEvent, Fragment } from "react";
import { DateRange, DefinedRange, RangeKeyDict } from "react-date-range";
import { Button } from "components";

import { defaultStaticRanges } from "./constants";
import styled from "styled-components";

const DateRangeOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

const RangePicker = styled.div`
  display: flex;
  gap: 4px;
  width: fit-content;
  padding: 12px;
  background-color: gray;
  box-shadow: 0px 4px rgb(0 0 0 / 10%);
  position: absolute;
  top: 50px;
  right: 230px;
  z-index: 4;
  min-width: 450px;
`;

const DefinedRangeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  padding-bottom: 8px;
  /* padding-top: 12px; */
`;

export const DateRangePicker: FC<IDateRangePicker> = ({
  handleSubmit,
  range,
  handleChangeRange,
  rangeColor,
  setIsVisible,
}) => {
  const handleClose = useCallback(
    (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
      e.stopPropagation();
      setIsVisible(false);
    },
    [setIsVisible]
  );

  return (
    <Fragment>
      <DateRangeOverlay onClick={handleClose} />
      {/* <div className="date-range-picker-overlay" onClick={handleClose} /> */}
      <RangePicker>
        {/* <div className="date-range-picker"> */}
        <DateRange
          // className="calender"
          editableDateInputs={true}
          onChange={(item: RangeKeyDict) => handleChangeRange(item)}
          moveRangeOnFirstSelection={false}
          ranges={range}
          showMonthAndYearPickers={false}
          rangeColors={rangeColor}
          retainEndDateOnFirstSelection={false}
          fixedHeight={false}
          maxDate={new Date()}
          showDateDisplay={false}
          showPreview={true}
        />
        {/* <div className="overlay-container"> */}
        <DefinedRangeContainer>
          <DefinedRange
            className="overlay"
            onChange={(item: RangeKeyDict) => handleChangeRange(item)}
            ranges={range}
            rangeColors={rangeColor}
            inputRanges={[]}
            staticRanges={defaultStaticRanges}
          />
          <Button
            onClick={handleSubmit}
            // handleClick={handleSubmit}
            // label="Apply"

            // type="btn btn__filled btn__filled--primary btn__large"
          >
            Apply
          </Button>
        </DefinedRangeContainer>
      </RangePicker>
    </Fragment>
  );
};
