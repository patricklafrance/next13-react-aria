"use client"

import { ToggleButton, type ToggleButtonProps } from "react-aria-components";
import "./MyToggleButton.css";

export function MyToggleButton(props: ToggleButtonProps) {
    return (
        <ToggleButton {...props} />
    );
}