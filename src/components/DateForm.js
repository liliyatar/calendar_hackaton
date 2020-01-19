import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    getDay, getMonth, getYear, setYear, setDay, setMonth, getWeek, setWeek,
    setEventSelectorValue, getEventSelectorValue,
} from '../redux/store';
import { namesOfMonths, years } from '../redux/constants';

const DateForm = ({
                      year,
                      month,
                      week,
                      eventSelectorValue,
                      setYear,
                      setMonth,
                      setDay,
                      setWeek,
                      setEventSelectorValue,
                  }) => {
    const setters = {
        year: setYear,
        month: setMonth,
        day: setDay,
        week: setWeek,
        eventSelectorValue: setEventSelectorValue,
    };

  const handleSelect = ({ target: { value } }, key) => {
      setters[key](value);
  };

  return (
      <header className="header">
          <select
              className="header__select"
              value={year}
              onChange={event => handleSelect(event, 'year')}
              required
          >
              <option value="">select year</option>
              {years.map(oneYear => (
                  <option value={oneYear} key={oneYear}>{oneYear}</option>
              ))}
          </select>
          <select
              className="header__select"
              value={month}
              onChange={event => handleSelect(event, 'month')}
              required
          >
              <option value="">all months</option>
              {namesOfMonths.map((oneMonth, i) => (
                  <option value={i} key={oneMonth}>{oneMonth}</option>
              ))}
          </select>
          <select
              className="header__select"
              value={week}
              onChange={event => handleSelect(event, 'week')}
              required
          >
              <option value="">all weeks</option>
              {[0, 1, 2, 3, 4].map(oneWeek => (
                  <option value={oneWeek} key={oneWeek}>{oneWeek + 1}</option>
              ))}
          </select>
          ​
          <select
              className="header__select"
              value={eventSelectorValue}
              onChange={event => handleSelect(event, 'eventSelectorValue')}
              required
          >
              <option value="">all</option>
              {['necessary', 'important', 'meeting'].map(selector => (
                  <option value={selector} key={selector}>{selector}</option>
              ))}
          </select>
      </header>
  );
};

const mapStateToProps = state => ({
    year: getYear(state),
    month: getMonth(state),
    day: getDay(state),
    week: getWeek(state),
    eventSelectorValue: getEventSelectorValue(state),
});

export default connect(mapStateToProps,
    {
        setYear,
        setMonth,
        setDay,
        setWeek,
        setEventSelectorValue,
    })(DateForm);

DateForm.propTypes = {
    year: (PropTypes.number || PropTypes.string).isRequired,
    month: (PropTypes.number || PropTypes.string).isRequired,
    week: (PropTypes.number || PropTypes.string).isRequired,
    eventSelectorValue: PropTypes.string.isRequired,
    setYear: PropTypes.func.isRequired,
    setMonth: PropTypes.func.isRequired,
    setDay: PropTypes.func.isRequired,
    setWeek: PropTypes.func.isRequired,
    setEventSelectorValue: PropTypes.func.isRequired,
};
