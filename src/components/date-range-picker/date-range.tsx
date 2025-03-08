import type { RangeKeyDict } from "react-date-range";
import type { IDateRange } from "./type";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import { isSameDay } from "date-fns";
import styled from "styled-components";

import { SelectedDateRangeState } from "../../store";
import { DateRangePicker } from "./date-range-picker";
import { formatDate } from "../../utils";

const DateRangeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-width: 192px;
  width: "auto";
  border: 2px solid #2f303d;
  background: rgba(255, 255, 255, 0.03);
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  border-radius: 8px;
  padding: 8px 16px;
  color: #ffffff;
  gap: 12px;
`;

const DateIcon = styled.i`
  font-size: 24px;
`;

const DateRangeText = styled.span`
  white-space: nowrap;
`;

const DateRangeModal = styled.div``;

export const DatePicker = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [selectedDateRange, setSelectedDateRange] = useRecoilState(
    SelectedDateRangeState
  );

  const [range, setRange] = useState<IDateRange[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  useEffect(() => {
    setRange(selectedDateRange);
  }, [selectedDateRange]);

  useEffect(() => {
    const dateRangeString = localStorage.getItem("date-range");
    if (dateRangeString) {
      const dateRange: IDateRange = JSON.parse(dateRangeString);
      const startDate = new Date(dateRange.startDate);
      const endDate = new Date(dateRange.endDate);
      setSelectedDateRange([{ ...dateRange, startDate, endDate }]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpenDatePicker = useCallback(() => {
    setIsVisible(true);
  }, [setIsVisible]);

  const handleChangeDateRange = useCallback(
    ({ selection }: RangeKeyDict) => {
      if (selection) {
        setRange([selection as IDateRange]);
      }
    },
    [setRange]
  );

  const handleApplyDateRange = useCallback(() => {
    setIsVisible(false);
    setSelectedDateRange(range as any);
    localStorage.setItem("date-range", JSON.stringify(range[0]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [range]);

  const renderedDate = useMemo(() => {
    const { endDate, startDate } = range[0];
    const isSame = isSameDay(startDate, endDate);
    const fromDate = formatDate(startDate, "dd-MMM-yyyy");
    const toDate = formatDate(endDate, "dd-MMM-yyyy");
    if (isSame) {
      return fromDate;
    }
    return `${fromDate} - ${toDate}`;
  }, [range]);

  return (
    <>
      <DateRangeContainer>
        <DateIcon className="ri-calendar-event-fill" />
        <DateRangeText onClick={handleOpenDatePicker}>
          {renderedDate}
        </DateRangeText>
      </DateRangeContainer>
      <DateRangeModal>
        {isVisible && (
          <DateRangePicker
            range={range}
            rangeColor={["#6359e9"]}
            handleChangeRange={handleChangeDateRange}
            handleSubmit={handleApplyDateRange}
            setIsVisible={setIsVisible}
          />
        )}
      </DateRangeModal>
    </>
  );
};
