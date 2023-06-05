"use client"

import "./MyDatePicker.css";

import { CalendarCell, CalendarGrid, DateInput, DatePicker, DatePickerProps, DateSegment, DateValue, Dialog, Group, Heading, Label, Popover, Text } from "react-aria-components";

import { MyButton } from "./MyButton";
import { MyCalendar } from "./MyCalendar";

interface MyDatePickerProps<T extends DateValue> extends DatePickerProps<T> {
    label?: string;
    description?: string;
    errorMessage?: string;
  }
  
export function MyDatePicker<T extends DateValue>(
    { label, description, errorMessage, ...props }: MyDatePickerProps<T>
  ) {
    return (
      <DatePicker {...props}>
        <Label>{label}</Label>
        <Group>
          <DateInput>
            {(segment) => <DateSegment segment={segment} />}
          </DateInput>
          <MyButton>▼</MyButton>
        </Group>
        {description && <Text slot="description">{description}</Text>}
        {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
        <Popover>
          <Dialog>
            <MyCalendar>
              <header>
                <MyButton slot="previous">◀</MyButton>
                <Heading />
                <MyButton slot="next">▶</MyButton>
              </header>
              <CalendarGrid>
                {(date) => <CalendarCell date={date} />}
              </CalendarGrid>
              {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
            </MyCalendar>
          </Dialog>
        </Popover>
      </DatePicker>
    );
  }