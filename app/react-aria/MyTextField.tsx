"use client"

import { Input, Label, Text, TextField, type TextFieldProps } from "react-aria-components";
import "./MyTextField.css"

interface MyTextFieldProps extends TextFieldProps {
    label?: string;
    description?: string;
    errorMessage?: string;
  }
  
export function MyTextField(
    { label, description, errorMessage, ...props }: MyTextFieldProps
  ) {
    return (
      <TextField {...props}>
        <Label>{label}</Label>
        <Input />
        {description && <Text slot="description">{description}</Text>}
        {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
      </TextField>
    );
}