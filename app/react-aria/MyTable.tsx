"use client"

import "./MyTable.css";

import { Collection, Column, type ColumnProps, Row, type RowProps, TableHeader, type TableHeaderProps } from "react-aria-components";

export function MyColumn<T extends object>(props: ColumnProps<T>) {
    return (
      <Column {...props}>
        {({allowsSorting, sortDirection}) => <>
          {props.children}
          {allowsSorting && (
            <span aria-hidden="true" className="sort-indicator">
              {sortDirection === 'ascending' ? '▲' : '▼'}
            </span>
          )}
        </>}
      </Column>
    );
}

export function MyTableHeader<T extends object>(
    { columns, children }: TableHeaderProps<T>
  ) {
    return (
      <TableHeader>
        <Collection items={columns}>
          {children}
        </Collection>
      </TableHeader>
    );
  }
  
  export function MyRow<T extends object>({ id, columns, children }: RowProps<T>) {
    return (
      <Row id={id}>
        <Collection items={columns}>
          {children}
        </Collection>
      </Row>
    );
}
  