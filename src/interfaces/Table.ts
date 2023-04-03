export interface ITableRow {
  link?: boolean;
  onClick?: any;
  children: any;
}

export interface ITableCell {
  width: string;
  align?: string;
  children: any;
}

export interface ITable {
  header: ITableHeader[];
  detail: ITableDetail[];
}

export interface ITableHeader {
  text: string;
  align?: "left" | "center" | "right";
  type?: "text" | "number";
  width: string;
}

export interface ITableDetail {
  rowData: string[];
}

export interface IconT  {
  iconName: string;
  className?: string;
  onClick?: any;
  size?: string;
};