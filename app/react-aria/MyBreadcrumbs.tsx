"use client"

import "./MyBreadcrumbs.css"

import { Breadcrumbs, type BreadcrumbsProps, Item } from "react-aria-components"

export function MyBreadcrumbs({ children, ...props }: BreadcrumbsProps<typeof Item>) {
    return (
        <Breadcrumbs {...props}>
            {children}
        </Breadcrumbs>
    );
}