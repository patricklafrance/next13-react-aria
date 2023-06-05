"use client"

import "./MyMenu.css";

import { Item, type ItemProps, Menu, type MenuProps, MenuTrigger, type MenuTriggerProps, Popover } from "react-aria-components";

import { MyButton } from "./MyButton";

interface MyMenuButtonProps<T>
  extends MenuProps<T>, Omit<MenuTriggerProps, 'children'> {
  label?: string;
}

export function MyMenuButton<T extends object>(
  { label, children, ...props }: MyMenuButtonProps<T>
) {
  return (
    <MenuTrigger {...props}>
      <MyButton>{label}</MyButton>
      <Popover>
        <Menu {...props}>
          {children}
        </Menu>
      </Popover>
    </MenuTrigger>
  );
}

export function MyMenuItem(props: ItemProps) {
  return (
    <Item
      {...props}
      className={({ isFocused, isSelected }) =>
        `my-item ${isFocused ? 'focused' : ''}`}
    />
  );
}
