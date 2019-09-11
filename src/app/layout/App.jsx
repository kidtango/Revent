import React, { Component } from 'react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import { Container } from 'semantic-ui-react';
import { Route, Switch, withRouter } from 'react-router-dom';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import HomePage from '../../features/home/HomePage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import userDetailedPage from '../../features/UserDetailed/userDetailedPage';
import SettingsDashboard from '../../features/Settings/SettingsDashboard';
import EventForm from '../../features/event/EventForm/EventForm';

class App extends Component {
  render() {
    return (
      <>
        <Route exact path='/' component={HomePage} />
        <Route
          path='/(.+)'
          render={() => (
            <>
              <NavBar />
              <Container className='main'>
                <Switch key={this.props.location.key}>
                  <Route exact path='/events' component={EventDashboard} />
                  <Route path='/events/:id' component={EventDetailedPage} />
                  <Route path='/people' component={PeopleDashboard} />
                  <Route path='/profile/:id' component={userDetailedPage} />
                  <Route path='/settings' component={SettingsDashboard} />
                  <Route
                    path={['/createEvent', '/manage/:id']}
                    component={EventForm}
                  />
                </Switch>
              </Container>
            </>
          )}
        ></Route>
      </>
    );
  }
}

export default withRouter(App);
