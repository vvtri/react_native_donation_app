import { StackScreenProps } from '@react-navigation/stack';
import { CardForm, useConfirmPayment } from '@stripe/stripe-react-native';
import React, { useState } from 'react';
import { Alert, SafeAreaView, ScrollView, View } from 'react-native';
import { createPayment } from '../../apis/payment.api';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import { RootStackNavigator } from '../../navigations/RootNavigation';
import {
  Donation,
  selectSelectedDonation,
} from '../../redux/slices/donation.slice';
import { selectUser } from '../../redux/slices/user.slice';
import { useAppSelector } from '../../redux/store';
import { globalStyle } from '../../styles/global.style';
import { paymentStyle } from './style';

type Props = {} & StackScreenProps<RootStackNavigator, 'PAYMENT'>;

const Payment = ({ navigation }: Props) => {
  const selectedDonation = useAppSelector(selectSelectedDonation) as Donation;
  const user = useAppSelector(selectUser);

  const { confirmPayment, loading } = useConfirmPayment();
  const [isCreatingPayment, setIsCreatingPayment] = useState(false);

  const handlePayment = async () => {
    setIsCreatingPayment(true);

    try {
      const clientSecret = await createPayment(
        user.email as string,
        Number(selectedDonation.price),
      );
      const { error, paymentIntent } = await confirmPayment(clientSecret, {
        paymentMethodType: 'Card',
      });

      if (paymentIntent) {
        Alert.alert(`Payment successfully`, undefined, [
          { onPress: text => navigation.goBack() },
        ]);
      } else {
        Alert.alert(`Payment error: ${error.localizedMessage}`);
      }
    } catch (error) {
      console.log('error', error);
    }

    setIsCreatingPayment(false);
  };

  return (
    <SafeAreaView style={[globalStyle.fullSpace, globalStyle.backgroundWhite]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={paymentStyle.container}
      >
        <Header title="Making Donation" type={1} />

        <View style={paymentStyle.supportTextContainer}>
          <Header
            type={3}
            title={`You are about to donate ${selectedDonation.price}`}
          />
        </View>

        <CardForm style={paymentStyle.cardForm} />
      </ScrollView>

      <View style={paymentStyle.buttonContainer}>
        <Button
          title="Donate"
          onPress={handlePayment}
          isDisabled={isCreatingPayment || loading}
        />
      </View>
    </SafeAreaView>
  );
};

export default Payment;
