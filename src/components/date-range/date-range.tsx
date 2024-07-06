import type { RangeKeyDict } from "react-date-range";

import { useCallback, useEffect, useMemo, useState } from "react";
// import { useRecoilState } from "recoil";
import { DateRangePicker } from "components";
import { isSameDay } from "date-fns";

// import { SelectedDateRangeState } from "states";
// import { useLocalStorage } from "hooks";

// import "./date-picker.scss";
import { formatDate } from "utils";

export const DatePicker = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [selectedDateRange, setSelectedDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [range, setRange] = useState<any[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  //   const { set: setLocalStorage, get: getLocalStorage } = useLocalStorage();

  useEffect(() => {
    setRange(selectedDateRange);
  }, [selectedDateRange]);

  useEffect(() => {
    /**
     * local storage me set karna hai
     * */
    // const dateRange = getLocalStorage("date-range") as any;
    // if (dateRange) {
    //   const startDate = new Date(dateRange.startDate);
    //   const endDate = new Date(dateRange.endDate);
    //   setSelectedDateRange([{ ...dateRange, startDate, endDate }]);
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpenDatePicker = useCallback(() => {
    setIsVisible(true);
  }, [setIsVisible]);

  const handleChangeDateRange = useCallback(
    ({ selection }: RangeKeyDict) => {
      if (selection) {
        setRange([selection]);
      }
    },
    [setRange]
  );

  const handleApplyDateRange = useCallback(() => {
    setIsVisible(false);
    setSelectedDateRange(range as any);
    // setLocalStorage("date-range", range[0]);
  }, [range]);

  const renderedDate = useMemo(() => {
    const { endDate, startDate } = range[0];
    const isSame = isSameDay(startDate, endDate);
    const fromDate = formatDate(startDate);
    const toDate = formatDate(endDate);
    // const fromDate = getDate(startDate, "MMM dd, yyyy");
    // const toDate = getDate(endDate, "MMM dd, yyyy");
    if (isSame) {
      return fromDate;
    }
    return `${fromDate} - ${toDate}`;
  }, [range]);

  return (
    <>
      <div onClick={handleOpenDatePicker} className="calender-btn">
        <i className="ri-calendar-event-fill" />
        <span className="selected-range">{renderedDate}</span>
        <i className="ri-arrow-down-s-line" />
      </div>
      <div className="picker-container">
        {isVisible && (
          <DateRangePicker
            range={range}
            rangeColor={["#0c87fd"]}
            handleChangeRange={handleChangeDateRange}
            handleSubmit={handleApplyDateRange}
            setIsVisible={setIsVisible}
          />
        )}
      </div>
    </>
  );
};
