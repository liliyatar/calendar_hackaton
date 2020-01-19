import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import { getDay, getMonth, getYear, getWeek, getIsShownEventForm, setIsShownEventForm, setDay, getEvents, getEventSelectorValue, setMonth } from '../../redux/store';
import { namesOfMonths, daysNames } from '../../redux/constants';

const Month = ({ month, year, week, setDay, setIsShownEventForm, events, eventSelectorValue, setMonth }) => {
    const firstDay = new Date(year, month);
    const currentDay = firstDay.getDay();
    const emptyDays = [];

    for (let i = 0; i < currentDay; i += 1) {
        emptyDays.push('');
    }

    const currentMonth = firstDay.getMonth();
    const name = namesOfMonths[currentMonth];
    const dayOfMonths = [];
    const tempDate = firstDay;

    for (let i = 1; i <= 31; i += 1) {
        if (tempDate.getMonth() === month) {
            dayOfMonths.push(i);
        }
        tempDate.setDate(tempDate.getDate() + 1);
    }

    const openEventForm = (dayNumber, monthNumber) => {
        setMonth(monthNumber);
        setDay(dayNumber);
        setIsShownEventForm(true);
    };

    const getId = (day) => {
        const id = new Date(year, month, day);
        return id.toString();
    };

    return (
        <table className="table">
            <caption className="table__caption">
                {name}
            </caption>
            <thead>
            <tr className="table__caption--days">
                {daysNames.map(dayName => <th>{dayName}</th>)}
            </tr>
            </thead>
            <tbody>
            <tr>
                {(week === 0 || week === '') && emptyDays
                    .map(day => <td className="table__td table__td--empty">{day}</td>)}
                {(week === 0 || week === '') && dayOfMonths
                    .slice(0, 7 - emptyDays.length)
                    .map(day => (
                        <td
                            className="table__td"
                            onClick={() => openEventForm(day, month)}
                        >
                            <div className="wrapper__td">
                                {day}
                            </div>
                            <ul>
                                {events.find(elem => elem.id === getId(day))
                                && events
                                    .filter(elem => elem.id === getId(day && elem.mark.includes(eventSelectorValue)
                                    ))
                                    .map(ev => (
                                        <li className={cn(
                                            'table__li',
                                            { 'table__li--necessary': ev.mark === 'necessary' },
                                            { 'table__li--important': ev.mark === 'important' },
                                            { 'table__li--meeting ': ev.mark === 'meeting' },
                                        )}
                                        >
                                            {ev.title}
                                        </li>
                                    ))}
                            </ul>
                        </td>
                    ))}
            </tr>
            <tr>
                {(week === 1 || week === '') && dayOfMonths
                    .slice(7 - emptyDays.length, 14 - emptyDays.length)
                    .map(day => (
                        <td
                            className="table__td"
                            onClick={() => openEventForm(day, month)}
                        >
                            <div className="wrapper__td">
                                {day}
                            </div>
                            <ul>
                                {events.find(elem => elem.id === getId(day))
                                && events
                                    .filter(elem => elem.id === getId(day) && elem.mark.includes(eventSelectorValue)
                                    )
                                    .map(ev => (
                                        <li className={cn(
                                            'table__li',
                                            { 'table__li--necessary': ev.mark === 'necessary' },
                                            { 'table__li--important': ev.mark === 'important' },
                                            { 'table__li--meeting ': ev.mark === 'meeting' },
                                        )}
                                        >
                                            {ev.title}
                                        </li>
                                    ))}
                            </ul>
                        </td>
                    ))}
            </tr>
            <tr>
                {(week === 2 || week === '') && dayOfMonths
                    .slice(14 - emptyDays.length, 21 - emptyDays.length)
                    .map(day => (
                        <td
                            className="table__td"
                            onClick={() => openEventForm(day, month)}
                        >
                            <div className="wrapper__td">
                                {day}
                            </div>
                            <ul>
                                {events.find(elem => elem.id === getId(day))
                                && events
                                    .filter(elem => elem.id === getId(day) && elem.mark.includes(eventSelectorValue)
                                    )
                                    .map(ev => (
                                        <li className={cn(
                                            'table__li',
                                            { 'table__li--necessary': ev.mark === 'necessary' },
                                            { 'table__li--important': ev.mark === 'important' },
                                            { 'table__li--meeting ': ev.mark === 'meeting' },
                                        )}
                                        >
                                            {ev.title}
                                        </li>
                                    ))}
                            </ul>
                        </td>
                    ))}
            </tr>
            <tr>
                {(week === 3 || week === '') && dayOfMonths
                    .slice(21 - emptyDays.length, 28 - emptyDays.length)
                    .map(day => (
                        <td
                            className="table__td"
                            onClick={() => openEventForm(day, month)}
                        >
                            <div className="wrapper__td">
                                {day}
                            </div>
                            <ul>
                                {events.find(elem => elem.id === getId(day))
                                && events
                                    .filter(elem => elem.id === getId(day) && elem.mark.includes(eventSelectorValue)
                                    )
                                    .map(ev => (
                                        <li className={cn(
                                            'table__li',
                                            { 'table__li--necessary': ev.mark === 'necessary' },
                                            { 'table__li--important': ev.mark === 'important' },
                                            { 'table__li--meeting ': ev.mark === 'meeting' },
                                        )}
                                        >
                                            {ev.title}
                                        </li>
                                    ))}
                            </ul>
                        </td>
                    ))}
            </tr>
            <tr>
                {(week === 4 || week === '') && dayOfMonths
                    .slice(28 - emptyDays.length, 35 - emptyDays.length)
                    .map(day => (
                        <td
                            className="table__td"
                            onClick={() => openEventForm(day, month)}
                        >
                            <div className="wrapper__td">
                                {day}
                            </div>
                            <ul>
                                {events.find(elem => elem.id === getId(day))
                                && events
                                    .filter(elem => elem.id === getId(day) && elem.mark.includes(eventSelectorValue)
                                    )
                                    .map(ev => (
                                        <li className={cn(
                                            'table__li',
                                            { 'table__li--necessary': ev.mark === 'necessary' },
                                            { 'table__li--important': ev.mark === 'important' },
                                            { 'table__li--meeting ': ev.mark === 'meeting' },
                                        )}
                                        >
                                            {ev.title}
                                            </li>))}
                            </ul>
                        </td>
                    ))}
            </tr>
            </tbody>
        </table>
    );
};

const mapStateToProps = state => ({
    year: getYear(state),
    currentMonthOfYear: getMonth(state),
    day: getDay(state),
    week: getWeek(state),
    isShownEventForm: getIsShownEventForm(state),
    events: getEvents(state),
    eventSelectorValue: getEventSelectorValue(state),
});

export default connect(mapStateToProps, { setIsShownEventForm, setDay, setMonth })(Month);
