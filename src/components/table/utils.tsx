import { ITableCellFormat } from "./types";

export const getValueComponent = (format: ITableCellFormat, value: any) => {
  switch (format) {
    case "number":
      break;
    case "date":
      value = "";
      break;
    case "jsx":
      value = value();
      break;
    case "price":
      value = `$${value}`;
      break;
    default:
      break;
  }
};

//               switch (format) {
//                 case 'number':
//                   break;
//                 case 'date':
//                   value = getDate(value);
//                   break;
//                 case 'jsx':
//                   value = value();
//                   break;
//                 case 'price':
//                   value = `$${value}`;
//                   break;
//                 case 'percentage':
//                   value = `${value}%`;
//                   break;
//                 default:
//                   break;
//               }
//             }
