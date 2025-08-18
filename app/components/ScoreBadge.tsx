import React from "react";

interface ScoreBadgeProps {
    score: number;
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
    let badgeText = "";
    let badgeColor = "";

    if (score > 70) {
        badgeText = "Strong";
        badgeColor = "bg-badge-green text-green-600";
    } else if (score > 49) {
        badgeText = "Good Start";
        badgeColor = "bg-badge-yellow text-yellow-600";
    } else {
        badgeText = "Needs Work";
        badgeColor = "bg-badge-red text-red-600";
    }

    return (
        <div className={`px-3 py-1 rounded-full ${badgeColor}`}>
            <p className={"text-sm font-medium"}>{ badgeText }</p>
        </div>
    );
};

export default ScoreBadge;