import React, { type ReactNode } from "react";

interface AccordionItemProps {
    id: string;
    children: ReactNode;
    className?: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ id, children, className = "", }) => {
    return (
        <div className={`overflow-hidden border-b border-gray-200 ${className}`}>
            { children }
        </div>
    );
};

export default AccordionItem;
