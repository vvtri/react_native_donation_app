import { createStackNavigator } from '@react-navigation/stack';
import SingleDonationItem from '../components/SingleDonationItem/SingleDonationItem';
import { Category } from '../redux/slices/category.slice';
import Home from '../screens/Home/Home';
import Login from '../screens/Login/Login';
import Registration from '../screens/Registration/Registration';
import SingleDonationItemScreen from '../screens/SingleDonationItem/SingleDonationItem';
import { Routes } from './Routes';

export type NonAuthenticatedStackNavigator = {
  [Routes.LOGIN]: undefined;
  [Routes.REGISTRATION]: undefined;
};

const NonAuthenticatedStack =
  createStackNavigator<NonAuthenticatedStackNavigator>();

export const NonAuthenticatedNavigation = () => {
  return (
    <NonAuthenticatedStack.Navigator
      screenOptions={{ header: () => null }}
      initialRouteName={Routes.LOGIN}
    >
      <NonAuthenticatedStack.Screen name={Routes.LOGIN} component={Login} />
      <NonAuthenticatedStack.Screen
        name={Routes.REGISTRATION}
        component={Registration}
      />
    </NonAuthenticatedStack.Navigator>
  );
};
