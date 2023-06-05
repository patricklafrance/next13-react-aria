"use client"

import { ComboBox, type ComboBoxProps, Input, Item, type ItemProps, Label, Text } from "react-aria-components";
import "./MyComboBox.css";
import { MyButton } from "./MyButton";
import { MyPopover } from "./MyPopover";
import { MyListBox } from "./MyListbox";

interface MyComboBoxProps<T extends object> extends ComboBoxProps<T> {
    label?: string;
    description?: string | null;
    errorMessage?: string | null;
    children: React.ReactNode;
  }
  
export function MyComboBox<T extends object>(
    { label, description, errorMessage, children, ...props }: MyComboBoxProps<T>
  ) {
    return (
      <ComboBox {...props}>
        <Label>{label}</Label>
        <div className="my-combobox-container">
          <Input />
          <MyButton>▼</MyButton>
        </div>
        {description && <Text slot="description">{description}</Text>}
        {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
        <MyPopover>
          <MyListBox>
            {children}
          </MyListBox>
        </MyPopover>
      </ComboBox>
    );
}
  
export function MyComboBoxItem(props: ItemProps) {
    return (
      <Item
        {...props}
        className={({ isFocused, isSelected }) =>
          `my-item ${isFocused ? 'focused' : ''} ${isSelected ? 'selected' : ''}`}
      />
    );
}