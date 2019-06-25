import Inicio from './screens/Inicio';
import LoginClient from './screens/LoginClient';
import RegisterClient from './screens/RegisterClient';
import Home from './screens/Home';

import { createAppContainer, createStackNavigator,createDrawerNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator({
    TelaInicial: Inicio,
    LoginClient:LoginClient,
    RegisterClient:RegisterClient,
  }),
  // createDrawerNavigator({
  //   Home: {
  //     screen: Home,
  //   }
  // })
);

export default Routes;
