"use client"

import { Item, type ItemProps, ListBox, type ListBoxProps } from "react-aria-components";
import "./MyListbox.css";

export function MyListBox<T extends object>({ children, ...props }: ListBoxProps<T>) {
    return (
      <ListBox {...props} className="my-listbox">
        {children}
      </ListBox>
    );
}
  
export function MyListboxItem(props: ItemProps) {
    return (
      <Item
        {...props}
        className={({ isFocusVisible, isSelected }) =>
          `my-item ${isFocusVisible ? 'focused' : ''} ${
            isSelected ? 'selected' : ''
          }`}
      />
    );
}