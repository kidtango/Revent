import React, { Component } from 'react';
import { connect } from 'react-redux';
import cuid from 'cuid';
import { Grid } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import { createEvent, deleteEvent, updateEvent } from '../eventActions';

const mapState = state => ({
  events: state.events
});

const actions = {
  createEvent,
  deleteEvent,
  updateEvent
};

class EventDashboard extends Component {
  handleSelectEvent = event => {
    this.setState({
      selectedEvent: event,
      isOpen: true
    });
  };

  handleDeletedEvent = id => {
    this.props.deleteEvent(id);
  };

  render() {
    const { events } = this.props;

    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events} deleteEvent={this.handleDeletedEvent} />
        </Grid.Column>
        <Grid.Column width={6}>
          <h2>Activity Feed</h2>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  mapState,
  actions
)(EventDashboard);
