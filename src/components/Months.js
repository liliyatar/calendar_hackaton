import React from "react";
import { Month } from "./calendar/Month";
export const Months = () => {
    const months = [0,1,2,3,4,5,6,7,8,9,10,11];
    return (
        months.map((month) => (
            <Month month={month} year={2020}/>
        ))
    );
};
