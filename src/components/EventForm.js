import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getYear, getMonth, getDay, getEvents,
    setEvents, setIsShownEventForm } from '../redux/store';

const EventForm = ({
                       year,
                       month,
                       day,
                       setEvents,
                       setIsShownEventForm,
                   }) => {
    const [title, setTitle] = useState('');
    const [mark, setMark] = useState('');

  const handleTitleChange = ({ target: { value } }) => {
      setTitle(value);
  };

  const handleSelect = ({ target: { value } }) => {
      setMark(value);
  };

  const handleSubmit = (event) => {
      event.preventDefault();

    const date = new Date(year, month, day);

    setEvents(date.toString(), title, mark);
      setIsShownEventForm(false);
      setTitle('');
      setMark('');
  };

  const goBack = () => {
      setTitle('');
      setMark('');
      setIsShownEventForm(false);
  };

  return (
      <div className="wrapper">
          <form onSubmit={handleSubmit} className="form">
              <div>
                  <input
                      type="text"
                      value={title}
                      placeholder="Enter event title"
                      onChange={handleTitleChange}
                      required
                  />
              </div>
              <div className="form__radio">
                  <input
                      type="radio"
                      name="mark"
                      value="necessary"
                      id="necessary"
                      required={mark === ''}
                      onChange={event => handleSelect(event)}
                  />
                  <label htmlFor="necessary">Necessary</label>
                  <input
                      type="radio"
                      name="mark"
                      value="important"
                      id="important"
                      required={mark === ''}
                      onChange={event => handleSelect(event)}
                  />
                  <label htmlFor="important">Important</label>
                  <input
                      type="radio"
                      name="mark"
                      value="meeting"
                      id="meeting"
                      required={mark === ''}
                      onChange={event => handleSelect(event)}
                  />
                  <label htmlFor="meeting">Meeting</label>
              </div>
              <button
                  type="button"
                  onClick={goBack}
              >
                  Go back
              </button>
              <button type="submit">Add event</button>
          </form>
      </div>
  );
};

const mapStateToProps = state => ({
    year: getYear(state),
    month: getMonth(state),
    day: getDay(state),
    events: getEvents(state),
});

export default connect(mapStateToProps, {
    setEvents,
    setIsShownEventForm,
})(EventForm);

EventForm.propTypes = {
    year: (PropTypes.number || PropTypes.string).isRequired,
    month: (PropTypes.number || PropTypes.string).isRequired,
    day: (PropTypes.number || PropTypes.string).isRequired,
    setEvents: PropTypes.func.isRequired,
    setIsShownEventForm: PropTypes.func.isRequired,
};
