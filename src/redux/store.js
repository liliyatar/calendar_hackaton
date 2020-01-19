import { createStore } from 'redux';
import { currentDate } from './constants';

export const SET_YEAR = 'SET_YEAR';
export const SET_MONTH = 'SET_MONTH';
export const SET_DAY = 'SET_DAY';
export const SET_WEEK = 'SET_WEEK';
export const SET_EVENTS = 'SET_EVENTS';
export const SET_IS_SHOWN_EVENT_FORM = 'SET_IS_SHOWN_EVENT_FORM';
export const SET_EVENT_SELECTOR_VALUE = 'SET_EVENT_SELECTOR_VALUE';

export const getYear = state => state.year;
export const getMonth = state => state.month;
export const getDay = state => state.day;
export const getWeek = state => state.week;
export const getEvents = state => state.events;
export const getIsShownEventForm = state => state.isShownEventForm;
export const getEventSelectorValue = state => state.eventSelectorValue;

export const setYear = year => ({
    type: SET_YEAR,
    year,
});

export const setMonth = month => ({
    type: SET_MONTH,
    month,
});

export const setDay = day => ({
    type: SET_DAY,
    day,
});

export const setWeek = week => ({
    type: SET_WEEK,
    week,
});

export const setEvents = (date, title, mark) => ({
    type: SET_EVENTS,
    date,
    title,
    mark,
});

export const setIsShownEventForm = isShown => ({
    type: SET_IS_SHOWN_EVENT_FORM,
    isShown,
});

export const setEventSelectorValue = selector => ({
    type: SET_EVENT_SELECTOR_VALUE,
    selector,
});

const initialState = {
    year: currentDate.getFullYear(),
    month: '',
    day: '',
    week: '',
    events: [],
    isShownEventForm: false,
    eventSelectorValue: '',
};

const reducer = (state, action) => {
    switch (action.type) {
        case SET_YEAR:
            return {
                ...state,
                year: action.year,
            };
        case SET_MONTH:
            return {
                ...state,
                month: action.month === '' ? '' : +action.month,
            };
        case SET_DAY:
            return {
                ...state,
                day: action.day,
            };
        case SET_WEEK:
            return {
                ...state,
                week: action.week === '' ? '' : +action.week,
            };
        case SET_EVENTS:
            return {
                ...state,
                events: [
                    ...state.events,
                    {
                        id: action.date,
                        title: action.title,
                        mark: action.mark,
                    },
                ],
            };
        case SET_IS_SHOWN_EVENT_FORM:
            return {
                ...state,
                isShownEventForm: action.isShown,
            };
        case SET_EVENT_SELECTOR_VALUE:
            return {
                ...state,
                eventSelectorValue: action.selector,
            };
        default:
            return state;
    }
};

export const store = createStore(reducer, initialState);
