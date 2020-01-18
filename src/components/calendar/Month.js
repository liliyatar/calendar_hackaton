import React from "react";
export const Month = ({ month, year }) => {
    let firstDay = new Date(year, month);
    return (
        <li>{firstDay.toDateString()}</li>
    );
};
