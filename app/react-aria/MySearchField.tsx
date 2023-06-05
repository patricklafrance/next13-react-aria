"use client"

import "./MySearchField.css";

import { Input, Label, SearchField, type SearchFieldProps, Text } from "react-aria-components";

import { MyButton } from "./MyButton";

interface MySearchFieldProps extends SearchFieldProps {
    label?: string;
    description?: string;
    errorMessage?: string;
  }
  
export function MySearchField(
    { label, description, errorMessage, ...props }: MySearchFieldProps
  ) {
    return (
      <SearchField {...props}>
        <Label>{label}</Label>
        <Input />
        <MyButton>✕</MyButton>
        {description && <Text slot="description">{description}</Text>}
        {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
      </SearchField>
    );
}