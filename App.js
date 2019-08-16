import Inicio from './screens/Inicio';
import LoginClient from './screens/LoginClient';
import RegisterClient from './screens/RegisterClient';
import Home from './screens/Home';

/** Teste de codigo: Igor */
import RegisterProfissional from './screens/RegisterProfissional';
/** ******************* */

import { createAppContainer, createStackNavigator,createDrawerNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator({
    RegisterProfissional:RegisterProfissional,
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
