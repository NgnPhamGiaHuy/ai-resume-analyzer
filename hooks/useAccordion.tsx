import { createContext, useContext } from "react";

interface AccordionContextType {
    activeItems: string[];
    toggleItem: (id: string) => void;
    isItemActive: (id: string) => boolean;
}

export const AccordionContext = createContext<AccordionContextType | undefined>(
    undefined
);

const useAccordion = () => {
    const context = useContext(AccordionContext);

    if (!context) {
        throw new Error("Accordion components must be used within an Accordion");
    }

    return context;
};

export default useAccordion;