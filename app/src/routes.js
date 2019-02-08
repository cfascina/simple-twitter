import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer } from 'react-navigation';

import LoginPage from './pages/Login';
import TimelinePage from './pages/Timeline';

const Routes = createAppContainer(
  createSwitchNavigator({
    LoginPage,
    TimelinePage
  })
);

export default Routes;
