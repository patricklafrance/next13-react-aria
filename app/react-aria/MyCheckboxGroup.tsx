"use client"

import type { ReactNode } from "react";
import "./MyCheckboxGroup.css";

import { CheckboxGroup, type CheckboxGroupProps, Text } from "react-aria-components";

interface MyCheckboxGroupProps extends Omit<CheckboxGroupProps, "children"> {
    children: ReactNode;
    label?: string,
    description?: string,
    errorMessage?: string
  }
  
export function MyCheckboxGroup({
    label,
    description,
    errorMessage,
    children,
    ...props
  }: MyCheckboxGroupProps) {
    return (
      <CheckboxGroup {...props}>
        {label}
        {children}
        {description && <Text slot="description">{description}</Text>}
        {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
      </CheckboxGroup>
    );
}