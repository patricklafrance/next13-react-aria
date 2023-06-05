"use client"

import "./MySelect.css"

import { Item, type ItemProps, Label, Select, type SelectProps, SelectValue, Text } from "react-aria-components";
import type { ReactNode } from "react";

import { MyButton } from "./MyButton";
import { MyListBox } from "./MyListbox";
import { MyPopover } from "./MyPopover";

interface MySelectProps<T extends object> extends SelectProps<T> {
    label?: string;
    description?: string;
    errorMessage?: string;
    children: ReactNode;
  }
  
export function MySelect<T extends object>(
    { label, description, errorMessage, children, ...props }: MySelectProps<T>
  ) {
    return (
      <Select {...props}>
        <Label>{label}</Label>
        <MyButton>
          <SelectValue />
          <span aria-hidden="true">▼</span>
        </MyButton>
        {description && <Text slot="description">{description}</Text>}
        {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
        <MyPopover>
          <MyListBox>
            {children}
          </MyListBox>
        </MyPopover>
      </Select>
    );
  }
  
export function MySelectItem(props: ItemProps) {
    return (
      <Item
        {...props}
        className={({ isFocused, isSelected }) =>
          `my-item ${isFocused ? 'focused' : ''} ${isSelected ? 'selected' : ''}`}
      />
    );
  }