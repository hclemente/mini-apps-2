import React from 'react';
import EventItem from './EventItem.jsx'

const EventList = ( { results } ) => {
  return (
    <div>
      {results.map((event, index) =>
        <EventItem key={index} event={event} />
      )}
    </div>
  );
};

export default EventList