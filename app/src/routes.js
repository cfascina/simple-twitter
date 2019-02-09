import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer } from 'react-navigation';

import LoginPage from './pages/Login';
import TimelinePage from './pages/Timeline';
import NewTweetPage from './pages/NewTweet';

const Routes = createAppContainer(
  createSwitchNavigator({
    LoginPage,
    App: createStackNavigator({
      TimelinePage,
      NewTweetPage
    })
  })
);

export default Routes;
