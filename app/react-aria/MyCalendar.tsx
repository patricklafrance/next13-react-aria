"use client"

import "./MyCalendar.css";

import {Calendar, CalendarCell, CalendarGrid, type CalendarProps, DateValue, Heading, Text} from 'react-aria-components';

import { MyButton } from "./MyButton";

interface MyCalendarProps<T extends DateValue> extends CalendarProps<T> {
  errorMessage?: string;
}

export function MyCalendar<T extends DateValue>(
  { errorMessage, ...props }: MyCalendarProps<T>
) {
  return (
    <Calendar {...props}>
      <header>
        <MyButton slot="previous">◀</MyButton>
        <Heading />
        <MyButton slot="next">▶</MyButton>
      </header>
      <CalendarGrid>
        {(date) => <CalendarCell date={date} />}
      </CalendarGrid>
      {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
    </Calendar>
  );
}