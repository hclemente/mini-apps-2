import React from 'react';

const EventItem = ( { event }) => {
  return (
    <div>
      <h4>Date:{event.date}</h4>
      <p>{event.description}</p>
    </div>
  )
};

export default EventItem