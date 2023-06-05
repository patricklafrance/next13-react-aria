"use client"

import { OverlayArrow, Popover, type PopoverProps } from "react-aria-components";
import "./MyPopover.css";
import { MyDialog } from "./MyDialog";
import type { ReactNode } from "react";

interface MyPopoverProps extends Omit<PopoverProps, "children"> {
    children: ReactNode
}

export function MyPopover({children, ...props}: MyPopoverProps) {
    return (
      <Popover {...props}>
        <OverlayArrow>
          <svg width={12} height={12}><path d="M0 0,L6 6,L12 0" /></svg>
        </OverlayArrow>
        <MyDialog>
          {children}
        </MyDialog>
      </Popover>
    );
}