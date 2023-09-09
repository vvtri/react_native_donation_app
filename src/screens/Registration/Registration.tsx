import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { createUser } from '../../apis/auth.api';
import BackButton from '../../components/BackButton/BackButton';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import { NonAuthenticatedStackNavigator } from '../../navigations/NonAuthenticatedNavigation';
import { Routes } from '../../navigations/Routes';
import { globalStyle } from '../../styles/global.style';
import { registrationStyle } from './style';

type Props = {} & StackScreenProps<
  NonAuthenticatedStackNavigator,
  'REGISTRATION'
>;

const Registration = ({ navigation }: Props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async () => {
    const result = await createUser(name, email, password);
    if ((result as any).error) {
      setError((result as any).error);
    } else {
      setError('');
      setSuccess('You have successfully registered!');
      navigation.push(Routes.LOGIN);
    }
  };

  return (
    <SafeAreaView style={[globalStyle.fullSpace, globalStyle.backgroundWhite]}>
      <View style={registrationStyle.backButtonContainer}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={registrationStyle.container}
      >
        <View style={registrationStyle.headerContainer}>
          <Header title="Hello and Welcome !" type={1} />
        </View>

        <View style={registrationStyle.nameContainer}>
          <Input
            label="First & Last Name"
            onChangeText={value => setName(value)}
            placeholder="Enter your name..."
          />
        </View>

        <View style={registrationStyle.emailContainer}>
          <Input
            label="Email"
            onChangeText={value => setEmail(value)}
            keyboardType="email-address"
            placeholder="Enter your email..."
          />
        </View>

        <View style={registrationStyle.passwordContainer}>
          <Input
            label="Password"
            onChangeText={value => setPassword(value)}
            placeholder="Enter your password..."
            secureTextEntry
          />
        </View>

        {Boolean(error) && (
          <Text
            style={[
              registrationStyle.registerStatus,
              registrationStyle.registerStatusFailed,
            ]}
          >
            {error}
          </Text>
        )}

        {Boolean(success) && (
          <Text
            style={[
              registrationStyle.registerStatus,
              registrationStyle.registerStatusSuccess,
            ]}
          >
            {success}
          </Text>
        )}

        <View style={registrationStyle.registerBtnContainer}>
          <Button
            isDisabled={!name || !email || !password}
            title="Register"
            onPress={handleRegister}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registration;
