import type { IDateRangePicker } from "./type";

import { FC, useCallback, MouseEvent, Fragment } from "react";
import { DateRange, RangeKeyDict } from "react-date-range";
import { Button } from "components";

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
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: fit-content;
  padding: 8px;
  background-color: rgb(29, 29, 65);
  border-radius: 8px;
  box-shadow: 0px 4px rgb(0 0 0 / 10%);
  position: absolute;
  bottom: 100%;
  right: 0;
  margin-bottom: -40px;
  z-index: 4;
  min-width: 450px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  .rdrCalendarWrapper {
    width: 100%;
    background-color: rgb(29, 29, 65);
  }
  .rdrWeekDay {
    color: #ffffff;
  }
  .rdrMonth {
    width: 100%;
    background-color: rgb(29, 29, 65);
  }
  .rdrMonthAndYearPickers {
    color: #ffffff;
  }
  .rdrDayNumber {
    color: #ffffff;
  }
  .rdrDayDisabled {
    background-color: rgb(29, 29, 65);
    opacity: 0.4;
  }
  .rdrDayNumber span {
    color: #ffffff;
  }
  .rdrDayPassive {
    opacity: 0.4;
  }

  @media (max-width: 450px) {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    min-width: 100%;
  }
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
      <RangePicker>
        <DateRange
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
        <Button onClick={handleSubmit} style={{ width: 150 }}>
          Apply
        </Button>
      </RangePicker>
    </Fragment>
  );
};
