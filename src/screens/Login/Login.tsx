import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Pressable, Text } from 'react-native';
import { login } from '../../apis/auth.api';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import { NonAuthenticatedStackNavigator } from '../../navigations/NonAuthenticatedNavigation';
import { RootStackNavigator } from '../../navigations/RootNavigation';
import { Routes } from '../../navigations/Routes';
import { resetUserState, setUserData } from '../../redux/slices/user.slice';
import { useAppDispatch } from '../../redux/store';
import { globalStyle } from '../../styles/global.style';
import { loginStyle } from './style';

type Props = {} & StackScreenProps<RootStackNavigator, 'LOGIN'>;

const Login = ({ navigation }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useAppDispatch();

  const handleLogin = async () => {
    const result = await login(email, password);
    if (result.status) {
      setError('');
      dispatch(setUserData(result.data as any));
      navigation.push(Routes.HOME);
    } else {
      setError(result!.error as any);
    }
  };

  return (
    <SafeAreaView style={[globalStyle.fullSpace, globalStyle.backgroundWhite]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={loginStyle.container}
      >
        <View style={loginStyle.headerContainer}>
          <Header title="Welcome Back" type={1} />
        </View>

        <View style={loginStyle.emailContainer}>
          <Input
            label="Email"
            onChangeText={value => setEmail(value)}
            keyboardType="email-address"
            placeholder="Enter your email..."
          />
        </View>

        <View style={loginStyle.passwordContainer}>
          <Input
            label="Password"
            onChangeText={value => setPassword(value)}
            placeholder="Enter your password..."
            secureTextEntry
          />
        </View>

        {Boolean(error) && (
          <Text style={[loginStyle.loginStatus, loginStyle.loginStatusFailed]}>
            {error}
          </Text>
        )}

        <View style={loginStyle.loginBtnContainer}>
          <Button
            title="Login"
            onPress={handleLogin}
            isDisabled={!email || !password}
          />
        </View>

        <Pressable
          style={loginStyle.registrationTextContainer}
          onPress={() => navigation.push('REGISTRATION')}
        >
          <Header title="Don't have an account?" type={3} color="#156CF7" />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
