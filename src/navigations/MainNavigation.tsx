import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import { Routes } from './Routes';

type MainStackNavigator = {
  [Routes.HOME]: undefined;
};

const MainStack = createStackNavigator<MainStackNavigator>();

export const MainNavigation = () => {
  return (
    <MainStack.Navigator
      screenOptions={{ header: () => null }}
      initialRouteName={Routes.HOME}
    >
      <MainStack.Screen name={Routes.HOME} component={Home} />
    </MainStack.Navigator>
  );
};
