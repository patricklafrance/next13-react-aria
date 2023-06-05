"use client"

import "./MyButton.css";

import { Button, type ButtonProps } from "react-aria-components";

export function MyButton(props: ButtonProps) {
    return (
        <Button {...props} />
    );
}