import type { ITable } from "./types";

import { FC, useMemo } from "react";
import styled from "styled-components";

const TableWrapper = styled.table`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TableHeader = styled.thead`
  width: 100%;
  border-bottom: 1px solid lightgray;
  padding-bottom: 12px;
`;

const TableBody = styled.tbody`
  width: 100%;
`;

const TableRow = styled.tr`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TableHeading = styled.div`
  /*  */
`;

const TableData = styled.div`
  /*  */
`;

export const Table: FC<ITable> = ({ header, rows = [] }) => {
  const renderColumn = useMemo(
    () =>
      header.map(({ label, key, width }: any, index: number) => (
        <TableHeading key={index}>{label}</TableHeading>
        // <th
        //   className="table__head-data"
        //   key={`renderColumns__${label}_${index}-${key}`}
        //   style={{ width }}
        // >
        //   <div className="table__head-data--label">
        //     <span>{label} </span>
        //   </div>
        // </th>
      )),
    [header]
  );

  const renderRows = useMemo(() => {
    const renderingRows = rows;
    return renderingRows.map((rowData: any, index: number) => (
      <TableRow key={`renderRows__${index}`}>
        {header.map(({ key, width }: any, idx: number) => {
          const value = rowData[key as keyof any];
          return (
            <TableData key={`renderRows__${index}_${idx}`}>{value}</TableData>
            // <td key={`renderColumn_${index}__${idx}__${key}`} style={{ width }}>
            //   <div>{value}</div>
            // </td>
          );
        })}
      </TableRow>
      //   <tr key={`renderRows_${rowData.documentName}__${index}`}>
      //     {header.map(({ key, width }: any, idx: number) => {
      //       const value = rowData[key as keyof any];
      //       return (
      //         <td key={`renderColumn_${index}__${idx}__${key}`} style={{ width }}>
      //           <div>{value}</div>
      //         </td>
      //       );
      //     })}
      //   </tr>
    ));
  }, [header, rows]);

  return (
    <TableWrapper>
      <TableHeader>
        <TableRow>{renderColumn}</TableRow>
      </TableHeader>
      <TableBody>{renderRows}</TableBody>
    </TableWrapper>
  );
  //   {
  /* <div className="react-table-responsive-container">
        <div className="react-table-responsive-wrapper">
          <table className={`react-table-responsive fl-table`}>
            <thead className="react-table-responsive__head">
              <tr
                className="react-table-responsive__head-row"
                style={{ backgroundColor: "#d9e1f2" }}
              >
                {renderColumn}
              </tr>
            </thead>
            {!!rows.length && !!renderRows.length && (
              <tbody className="react-table-responsive__body ">
                {renderRows}
              </tbody>
            )}
          </table>
        </div>
      </div> */
  //   };
};
