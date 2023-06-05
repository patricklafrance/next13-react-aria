"use client"

import "./MyDateField.css";

import {DateField, DateInput, DateSegment, Label, type DateFieldProps, type DateValue, Text } from 'react-aria-components';

interface MyDateFieldProps<T extends DateValue> extends DateFieldProps<T> {
  label?: string;
  description?: string;
  errorMessage?: string;
}

export function MyDateField<T extends DateValue>(
  { label, description, errorMessage, ...props }: MyDateFieldProps<T>
) {
  return (
    <DateField {...props}>
      <Label>{label}</Label>
      <DateInput>
        {(segment) => <DateSegment segment={segment} />}
      </DateInput>
      {description && <Text slot="description">{description}</Text>}
      {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
    </DateField>
  );
}