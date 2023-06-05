"use client"

import "./MyGridList.css"

import {GridList, GridListProps, Item, ItemProps} from 'react-aria-components';

import { MyButton } from './MyButton';
import { MyCheckbox } from './MyCheckbox';

export function MyGridList<T extends object>(
  { children, ...props }: GridListProps<T>
) {
  return (
    <GridList {...props}>
      {children}
    </GridList>
  );
}

export function MyGridItem({ children, ...props }: ItemProps) {
  let textValue = typeof children === 'string' ? children : undefined;
  return (
    <Item textValue={textValue} {...props}>
      {({ selectionMode, selectionBehavior, allowsDragging }) => (
        <>
          {/* Add elements for drag and drop and selection. */}
          {allowsDragging && <MyButton slot="drag">≡</MyButton>}
          {selectionMode === 'multiple' && selectionBehavior === 'toggle' && (
            <MyCheckbox />
          )}
          {children}
        </>
      )}
    </Item>
  );
}