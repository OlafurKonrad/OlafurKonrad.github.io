import { GiBrickPile, GiMeltingMetal } from "react-icons/gi";

export const operationTypes = [
    {
        id: 0,
        title: ["Primary Aluminum Operation"],
        icon: <GiMeltingMetal className="SmelterIcon" />,
    },
    {
        id: 1,
        title: ["Secondary Aluminum Operation", "Recycler"],
        icon: <GiBrickPile className="SmelterIcon" />,
    },
];