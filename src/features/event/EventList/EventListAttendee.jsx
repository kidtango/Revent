import React from 'react';
import { List, Image } from 'semantic-ui-react';

const EventListAttendee = ({ name, photoURL }) => {
  return (
    <List.Item>
      <Image as='a' size='mini' circular src={photoURL} />
    </List.Item>
  );
};

export default EventListAttendee;
