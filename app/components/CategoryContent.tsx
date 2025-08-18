import React from "react";

import { cn } from "../../lib/utils";

const CategoryContent = ({ tips }: { tips: { type: "good" | "improve"; tip: string; explanation: string }[] }) => {
    return (
        <div className={"w-full flex flex-col gap-4 items-center"}>
            <div className={"w-full px-5 py-4 grid grid-cols-2 gap-4 rounded-lg bg-gray-50"}>
                { tips.map((tip, index) => (
                    <div className={"flex flex-row gap-2 items-center"} key={index}>
                        <img src={tip.type === "good" ? "/icons/check.svg" : "/icons/warning.svg"} alt={"score"} className={"size-5"} />
                        <p className={"text-xl text-gray-500"}>{ tip.tip }</p>
                    </div>
                )) }
            </div>
            <div className={"w-full flex flex-col gap-4"}>
                { tips.map((tip, index) => (
                    <div key={index + tip.tip} className={cn("flex flex-col gap-2 rounded-lg p-4", tip.type === "good" ? "bg-green-50 border border-green-200 text-green-700" : "bg-yellow-50 border border-yellow-200 text-yellow-700")}>
                        <div className={"flex flex-row gap-2 items-center"}>
                            <img src={tip.type === "good" ? "/icons/check.svg" : "/icons/warning.svg"} alt={"score"} className={"size-5"} />
                            <p className={"text-xl font-semibold"}>{tip.tip}</p>
                        </div>
                        <p>{ tip.explanation }</p>
                    </div>
                )) }
            </div>
        </div>
    );
};

export default CategoryContent;
