import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Months } from './components/calendar/Months';
import Month from './components/calendar/Month';
import DateForm from './components/DateForm';
import EventForm from './components/EventForm';
import {
    getYear,
    getMonth,
    getDay,
    setDay,
    setMonth,
    setYear,
    setWeek,
    getWeek,
    getIsShownEventForm,
} from './redux/store';

const App = ({
                 year,
                 month,
                 week,
                 setMonth,
                 setYear,
                 setWeek,
                 isShownEventForm,
             }) => {
    const changeMonth = (param) => {
        const datePlus = new Date(year, month + 1);
        const dateMinus = new Date(year, month - 1);
        const tempDate = param === -1 ? dateMinus : datePlus;
        setYear(tempDate.getFullYear());
        setMonth(tempDate.getMonth());
    };

    const changeYear = (param) => {
        setYear(param === 1 ? year + 1 : year - 1);
    };

    const changeWeek = (param) => {
        if (param === 1) {
            setWeek(week === 4 ? 0 : week + 1);
        } else {
            setWeek(week === 0 ? 4 : week - 1);
        }
    };

    return (
        <>
            {isShownEventForm
                ? <EventForm />
                : (
                    <>
                        <DateForm />
                        <div className="buttons">
                            <button
                                className="buttons__prevYear"
                                type="button"
                                onClick={() => changeYear(-1)}
                                disabled={year === ''}
                            >
                                prevYear
                            </button>
                            {(year !== '' && (month || month === 0)) && (
                                <button
                                    className="buttons__prevMonth"
                                    type="button"
                                    onClick={() => changeMonth(-1)}
                                >
                                    prevMonth
                                </button>
                            )}
                            {(year !== '' && (week || week === 0))  && (
                                <button
                                    className="buttons__prevWeek"
                                    type="button"
                                    onClick={() => changeWeek(-1)}
                                >
                                    prevWeek
                                </button>
                            )}
                            {(year !== '' && (week || week === 0)) && (
                                <button
                                    className="buttons__nextWeek"
                                    type="button"
                                    onClick={() => changeWeek(1)}
                                >
                                    nextWeek
                                </button>
                            )}
                            {(year !== '' && (month || month === 0)) && (
                                <button
                                    className="buttons__nextMonth"
                                    type="button"
                                    onClick={() => changeMonth(1)}
                                >
                                    nextMonth
                                </button>
                            )}
                            <button
                                className="buttons__nextYear"
                                type="button"
                                onClick={() => changeYear(1)}
                                disabled={year === ''}
                            >
                                nextYear
                            </button>
                        </div>
                        {year !== '' && month === '' && (
                            <div className="App">
                                <Months />
                            </div>
                        )}
                        {(year !== '' && (month || month === 0)) && <Month month={month} />}
                    </>
                )}
        </>
    );
};

const mapStateToProps = state => ({
    year: getYear(state),
    month: getMonth(state),
    day: getDay(state),
    week: getWeek(state),
    isShownEventForm: getIsShownEventForm(state),
});

const mapDispatchToProps = {
    setDay,
    setMonth,
    setYear,
    setWeek,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
