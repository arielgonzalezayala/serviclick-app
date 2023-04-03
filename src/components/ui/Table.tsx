import {
  ITable,
  ITableHeader,
  ITableDetail,
  IconT,
} from "../../interfaces/Table";
import Icon from "./Icon/Icon";

const Table = (data: ITable) => {
  return (
    <table className="flex content-center rounded-sm border-solid border-2 border-gray-400 flex-col gap-0 ">
      <thead className="tableHeader">
        <tr className="flex gap-0.5">
          {data.header?.map((header, idx: number) => (
            <TableHeader text={header.text} width={header.width} />
          ))}
        </tr>
      </thead>
      <TableDetail header={data.header} detail={data.detail} />
    </table>
  );
};

const TableHeader = ({ text, width }: ITableHeader) => {
  return (
    <th
      className="bg-gray-300 h-[40px] p-[9px] text-gray-500 font-normal text-xl leading-[1]"
      style={{ width }}
    >
      {text}
    </th>
  );
};

const TableDetail = ({ header, detail }: any) => {
  return (
    <tbody className=" overflow-y-hidden">
      {detail?.map((row: any, idx: any) => (
        <tr className="even:bg-blue-50 flex flex-row">
          {row.rowData.map((data: any, idx: any) => (
            <td
              className=" text-gray-400 text-xl font-[Oswald] font-thin p-[9px]"
              style={{ width: header[idx].width, textAlign: header[idx].align }}
            >
              {data}
            </td>
          ))}
          <Icon className=" pl-[40px] font-semibold text-gray-400" iconName="edit" />
          <Icon className=" pl-[10px] font-semibold text-gray-400" iconName="delete" />
        </tr>
      ))}
    </tbody>
  );
};

export { Table, TableHeader, TableDetail };
