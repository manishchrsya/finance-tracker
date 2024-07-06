import { FC } from "react";
import { DateRangePicker } from "react-dates";

interface IDateRangePicker {
  startDate: any;
  endDate: any;
  onDateChange: any;
  focusedInput: null;
  onFocusChange: any;
}

export const DateRange: FC<IDateRangePicker> = ({
  endDate,
  focusedInput,
  onDateChange,
  onFocusChange,
  startDate,
}) => {
  return (
    <DateRangePicker
      startDate={startDate} // momentPropTypes.momentObj or null,
      startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
      endDate={endDate} // momentPropTypes.momentObj or null,
      endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
      onDatesChange={onDateChange}
      //   onDatesChange={({ startDate, endDate }) =>
      //     this.setState({ startDate, endDate })
      //   } // PropTypes.func.isRequired,
      focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
      onFocusChange={onFocusChange} // PropTypes.func.isRequired,
    />
  );
};
