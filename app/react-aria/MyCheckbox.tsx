"use client"

import "./MyCheckbox.css"

import { Checkbox, type CheckboxProps } from "react-aria-components";

export function MyCheckbox({children, ...props}: CheckboxProps) {
    return (
      <Checkbox {...props}>
        {({isIndeterminate}) => <>
          <div className="checkbox">
            <svg viewBox="0 0 18 18" aria-hidden="true">
              {isIndeterminate
                ? <rect x={1} y={7.5} width={15} height={3} />
                : <polyline points="1 9 7 14 15 4" />
              }
            </svg>
          </div>
          {children}
        </>}
      </Checkbox>
    );
  }