import React from "react";

import { cn } from "../../lib/utils";

const ScoreBadge = ({ score }: { score: number }) => {
    return (
        <div className={cn("px-2 py-0.5 flex flex-row gap-1 items-center rounded-[96px]", score > 69 ? "bg-badge-green" : score > 39 ? "bg-badge-yellow" : "bg-badge-red")}>
            <img src={score > 69 ? "/icons/check.svg" : "/icons/warning.svg"} alt={"score"} className={"size-4"} />
            <p className={cn("text-sm font-medium", score > 69 ? "text-badge-green-text" : score > 39 ? "text-badge-yellow-text" : "text-badge-red-text")}>
                { score }/100
            </p>
        </div>
    );
};

const CategoryHeader = ({ title, categoryScore }: { title: string; categoryScore: number }) => {
    return (
        <div className={"py-2 flex flex-row gap-4 items-center"}>
            <p className={"text-2xl font-semibold"}>{ title }</p>
            <ScoreBadge score={categoryScore} />
        </div>
    );
};

export default CategoryHeader;
