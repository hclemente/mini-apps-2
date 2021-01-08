import React from 'react';

const EventItem = ( { event }) => {
  return (
    <div>
      <h2>{event.date}</h2>
      <p>{event.description}</p>
    </div>
  )
};

export default EventItem