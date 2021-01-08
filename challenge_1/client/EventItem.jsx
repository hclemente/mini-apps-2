import React from 'react';

const EventItem = ( { event }) => {
  return (
    <div>
      <h3>{event.date}</h3>
      <p>{event.description}</p>
    </div>
  )
};

export default EventItem