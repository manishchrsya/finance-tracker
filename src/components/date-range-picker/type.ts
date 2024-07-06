import type { Preview, Range, RangeKeyDict } from "react-date-range";

import { Dispatch, SetStateAction } from "react";

export interface IDateRange {
  startDate: Date;
  endDate: Date;
  key: string;
}

export interface IDateRangePicker {
  range: IDateRange[];
  handleChangeRange: (item: RangeKeyDict) => void;
  rangeColor: string[];
  handleSubmit: () => void;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

export interface IDefaultStaticRanges {
  label: string;
  range: () => Preview;
  collapsed?: any;
  endContainer?: any;
  endOffset?: any;
  startContainer?: any;
  startOffset?: any;
  isSelected: (e: Range) => boolean;
}
