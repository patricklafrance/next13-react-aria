"use client"

import { Switch, type SwitchProps } from "react-aria-components";
import "./MySwitch.css"
import type { ReactNode } from "react";

interface MySwitchProps extends Omit<SwitchProps, "children"> {
    children: ReactNode;
}

export function MySwitch({children, ...props}: MySwitchProps) {
    return (
      <Switch {...props}>
        <div className="indicator" />
        {children}
      </Switch>
    );
  }