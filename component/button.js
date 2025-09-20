"use client";

import React from "react";
import clsx from "clsx";


const Button = ({
    children,
    onClick,
    type = "button",
    size = "md",
    className = "",
    backgroundColor = "",
    textColor = "",
    hoverColor = "",
    width = "",
    ...rest
}) => {
    const baseStyles =
        "inline-flex items-center justify-center font-medium rounded-[8px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-sm hover:cursor-pointer";

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-5 py-2.5 text-base",
        lg: "px-7 py-3 text-lg",
    };

    // Build dynamic classes for background, text, and hover
    const dynamicClasses = [
        backgroundColor ? backgroundColor : "",
        textColor ? textColor : "",
        hoverColor ? `hover:${hoverColor}` : "",
        width ? width : "",
    ].join(" ");

    return (
        <button
            type={type}
            onClick={onClick}
            className={clsx(baseStyles, sizes[size], dynamicClasses, className)}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
