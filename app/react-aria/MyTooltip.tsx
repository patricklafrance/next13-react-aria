"use client"

import { OverlayArrow, Tooltip, TooltipTrigger, type TooltipProps } from "react-aria-components";
import "./MyTooltip.css";
import type { ReactNode } from "react";

interface MyTooltipProps extends Omit<TooltipProps, "children"> {
    children: ReactNode;
}

export const MyTooltipTrigger = TooltipTrigger;

export function MyTooltip({children, ...props}: MyTooltipProps) {
    return (
      <Tooltip {...props}>
        <OverlayArrow>
          <svg width={8} height={8}><path d="M0 0,L4 4,L8 0" /></svg>
        </OverlayArrow>
        {children}
      </Tooltip>
    );
}