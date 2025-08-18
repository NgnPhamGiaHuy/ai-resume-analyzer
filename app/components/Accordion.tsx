import type { ReactNode } from "react";
import React, { useState } from "react";

import { AccordionContext } from "../../hooks/useAccordion";

interface AccordionProps {
    children: ReactNode;
    defaultOpen?: string;
    allowMultiple?: boolean;
    className?: string;
}

const Accordion: React.FC<AccordionProps> = ({ children, defaultOpen, allowMultiple = false, className = "" }) => {
    const [activeItems, setActiveItems] = useState<string[]>(
        defaultOpen ? [defaultOpen] : []
    );

    const toggleItem = (id: string) => {
        setActiveItems((prev) => {
            if (allowMultiple) {
                return prev.includes(id)
                    ? prev.filter((item) => item !== id)
                    : [...prev, id];
            } else {
                return prev.includes(id) ? [] : [id];
            }
        });
    };

    const isItemActive = (id: string) => activeItems.includes(id);

    return (
        <AccordionContext.Provider value={{ activeItems, toggleItem, isItemActive }}>
            <div className={`space-y-2 ${className}`}>{ children }</div>
        </AccordionContext.Provider>
    );
};

export default Accordion;