import React, { type ReactNode } from "react";

import { cn } from "../../lib/utils";
import useAccordion from "../../hooks/useAccordion";

interface AccordionHeaderProps {
    itemId: string;
    children: ReactNode;
    className?: string;
    icon?: ReactNode;
    iconPosition?: "left" | "right";
}

const AccordionHeader: React.FC<AccordionHeaderProps> = ({ itemId, children, className = "", icon, iconPosition = "right" }) => {
    const { toggleItem, isItemActive } = useAccordion();
    const isActive = isItemActive(itemId);

    const defaultIcon = (
        <svg className={cn("w-5 h-5 transition-transform duration-200", { "rotate-180": isActive, })} fill={"none"} stroke={"#98A2B3"} viewBox={"0 0 24 24"} xmlns={"http://www.w3.org/2000/svg"}>
            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={2} d={"M19 9l-7 7-7-7"}/>
        </svg>
    );

    const handleClick = () => {
        toggleItem(itemId);
    };

    return (
        <button onClick={handleClick} className={`w-full px-4 py-3 flex items-center justify-between text-left focus:outline-none transition-colors duration-200 cursor-pointer ${className}`}>
            <div className={"flex items-center space-x-3"}>
                { iconPosition === "left" && (icon || defaultIcon) }
                <div className={"flex-1"}>{ children }</div>
            </div>
            { iconPosition === "right" && (icon || defaultIcon) }
        </button>
    );
};

export default AccordionHeader;
