import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import bannerImg from '../../../assets/images/banner.png';
import avtImg from '../../../assets/images/avt.jpg';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { globalStyle } from '../../styles/global.style';
import {
  Category,
  resetCategory,
  selectCategories,
  selectSelectedCategoryId,
  setSelectedCategoryId,
} from '../../redux/slices/category.slice';
import Tab from '../../components/Tab/Tab';
import { sleep } from '../../util/index.util';
import {
  Donation,
  selectDonations,
  selectSelectedDonation,
} from '../../redux/slices/donation.slice';
import BackButton from '../../components/BackButton/BackButton';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { NonAuthenticatedStackNavigator } from '../../navigations/NonAuthenticatedNavigation';
import { singleDonationItemScreenStyle } from './style';
import Badge from '../../components/Badge/Tab';
import Button from '../../components/Button/Button';
import { RootStackNavigator } from '../../navigations/RootNavigation';
import { Routes } from '../../navigations/Routes';

type Props = {} & StackScreenProps<RootStackNavigator, 'SINGLE_DONATION_ITEM'>;

const SingleDonationItemScreen = ({ navigation, route }: Props) => {
  const selectedDonation = useAppSelector(selectSelectedDonation) as Donation;
  const categoryInfo = route.params.categoryInfo;

  const onBackBtnPressed = () => {
    navigation.goBack();
  };

  const onDonateBtnPressed = () => {
    navigation.push(Routes.PAYMENT);
  };

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.fullSpace]}>
      <ScrollView style={[singleDonationItemScreenStyle.container]}>
        <BackButton onPress={onBackBtnPressed} />

        <Image
          source={{ uri: selectedDonation.image }}
          resizeMode="cover"
          style={singleDonationItemScreenStyle.image}
        />

        <View style={singleDonationItemScreenStyle.badgeContainer}>
          <Badge title={categoryInfo.name} />
        </View>

        <View style={singleDonationItemScreenStyle.headerContainer}>
          <Header title={selectedDonation.name} type={1} />
        </View>

        <Text style={singleDonationItemScreenStyle.descContainer}>
          {selectedDonation.description}
        </Text>
      </ScrollView>

      <View style={singleDonationItemScreenStyle.buttonContainer}>
        <Button title="Donate" onPress={onDonateBtnPressed} />
      </View>
    </SafeAreaView>
  );
};

export default SingleDonationItemScreen;
