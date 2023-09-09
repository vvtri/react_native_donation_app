import { createStackNavigator } from '@react-navigation/stack';
import SingleDonationItem from '../components/SingleDonationItem/SingleDonationItem';
import { Category } from '../redux/slices/category.slice';
import Home from '../screens/Home/Home';
import Login from '../screens/Login/Login';
import Payment from '../screens/Payment/Payment';
import Registration from '../screens/Registration/Registration';
import SingleDonationItemScreen from '../screens/SingleDonationItem/SingleDonationItem';
import { Routes } from './Routes';

export type AuthenticatedStackNavigator = {
  [Routes.HOME]: undefined;
  [Routes.PAYMENT]: undefined;
  [Routes.SINGLE_DONATION_ITEM]: {
    categoryInfo: Category;
  };
};

const AuthenticatedStack = createStackNavigator<AuthenticatedStackNavigator>();

export const AuthenticatedNavigation = () => {
  return (
    <AuthenticatedStack.Navigator
      screenOptions={{ header: () => null }}
      initialRouteName={Routes.HOME}
    >
      <AuthenticatedStack.Screen name={Routes.HOME} component={Home} />
      <AuthenticatedStack.Screen name={Routes.PAYMENT} component={Payment} />
      <AuthenticatedStack.Screen
        name={Routes.SINGLE_DONATION_ITEM}
        component={SingleDonationItemScreen}
      />
    </AuthenticatedStack.Navigator>
  );
};
