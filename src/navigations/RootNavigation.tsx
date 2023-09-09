import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import SingleDonationItem from '../components/SingleDonationItem/SingleDonationItem';
import { Category } from '../redux/slices/category.slice';
import { selectUser } from '../redux/slices/user.slice';
import Home from '../screens/Home/Home';
import Login from '../screens/Login/Login';
import Registration from '../screens/Registration/Registration';
import SingleDonationItemScreen from '../screens/SingleDonationItem/SingleDonationItem';
import {
  AuthenticatedNavigation,
  AuthenticatedStackNavigator,
} from './AuthenticatedNavigation';
import {
  NonAuthenticatedNavigation,
  NonAuthenticatedStackNavigator,
} from './NonAuthenticatedNavigation';
import { Routes } from './Routes';

export type RootStackNavigator = NonAuthenticatedStackNavigator &
  AuthenticatedStackNavigator;

export const RootNavigation = () => {
  const user = useSelector(selectUser);
  if (user.isLoggedIn) return <AuthenticatedNavigation />;
  else return <NonAuthenticatedNavigation />;
};
