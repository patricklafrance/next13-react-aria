"use client"

import { RadioGroup, type RadioGroupProps, Text } from "react-aria-components";
import "./MyRadioGroup.css"
import type { ReactNode } from "react";

interface MyRadioGroupProps extends Omit<RadioGroupProps, "children"> {
    children: ReactNode,
    label?: string,
    description?: string,
    errorMessage?: string
  }
  
export function MyRadioGroup({
    label,
    description,
    errorMessage,
    children,
    ...props
  }: MyRadioGroupProps) {
    return (
      <RadioGroup {...props}>
        {label}
        {children}
        {description && <Text slot="description">{description}</Text>}
        {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
      </RadioGroup>
    );
}