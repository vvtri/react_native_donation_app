import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Pressable,
} from 'react-native';
import bannerImg from '../../../assets/images/banner.png';
import avtImg from '../../../assets/images/avt.jpg';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { globalStyle } from '../../styles/global.style';
import { homeStyle } from './style';
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
  setSelectedDonationId,
} from '../../redux/slices/donation.slice';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import { StackScreenProps } from '@react-navigation/stack';
import { Routes } from '../../navigations/Routes';
import {
  logout,
  resetUserState,
  selectUser,
} from '../../redux/slices/user.slice';
import { RootStackNavigator } from '../../navigations/RootNavigation';
import { signOutFirebase } from '../../apis/auth.api';

type Props = {} & StackScreenProps<RootStackNavigator, 'HOME'>;

const Home = ({ navigation }: Props) => {
  const user = useAppSelector(selectUser);
  const categories = useAppSelector(selectCategories);
  const selectedCategoryId = useAppSelector(selectSelectedCategoryId);
  const allDonations = useAppSelector(selectDonations);
  const dispatch = useAppDispatch();

  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(0);
  const [categoriesData, setCategoriesData] = useState<Category[]>([]);
  const [donations, setDonations] = useState<Donation[]>([]);
  const pageSize = 4;

  let selectedCategory = categories.find(
    item => item.categoryId === selectedCategoryId,
  );

  const handlePressDonationItem = (donationId: number) => {
    dispatch(setSelectedDonationId(donationId));
    navigation.push(Routes.SINGLE_DONATION_ITEM, {
      categoryInfo: selectedCategory as Category,
    });
  };

  const fetchMore = async () => {
    if (isFetching) return;
    setIsFetching(true);

    const offset = page * pageSize;
    await sleep(1000);
    setCategoriesData(prev => [
      ...prev,
      ...categories.slice(offset, offset + pageSize),
    ]);
    setPage(page => page + 1);
    setIsFetching(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    signOutFirebase();
  };

  useEffect(() => {
    fetchMore();
  }, []);

  useEffect(() => {
    setDonations(
      allDonations.filter(item =>
        item.categoryIds.includes(selectedCategoryId as number),
      ),
    );
  }, [selectedCategoryId]);

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.fullSpace]}>
      <ScrollView>
        <View style={homeStyle.headerContainer}>
          <View>
            <Text style={homeStyle.headerIntroText}>Hello,</Text>
            <Header title={`${user.displayName}.👋`} type={1} />
          </View>

          <View>
            <Pressable onPress={handleLogout}>
              <Header type={3} title="Logout" />
            </Pressable>
            <Image source={avtImg} style={homeStyle.headerAvtImage} />
          </View>
        </View>

        <View style={homeStyle.searchWrapper}>
          <Search />
        </View>

        <View style={homeStyle.bannerWrapper}>
          <Image source={bannerImg} style={homeStyle.bannerImg} />
        </View>

        <View style={homeStyle.categoryHeaderWrapper}>
          <Header title="Select category" type={2} />
        </View>
        <FlatList
          onEndReachedThreshold={0.5}
          onEndReached={fetchMore}
          style={homeStyle.categoryContainer}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categoriesData}
          renderItem={({ item }) => (
            <View style={homeStyle.categoryWrapper}>
              <Tab
                onPress={() => dispatch(setSelectedCategoryId(item.categoryId))}
                title={item.name}
                isInactivated={item.categoryId !== selectedCategoryId}
                key={item.categoryId}
              />
            </View>
          )}
        />

        {donations.length > 0 && (
          <View style={[homeStyle.donationContainer]}>
            {donations.map(item => (
              <View key={item.donationItemId} style={[homeStyle.donationItem]}>
                <SingleDonationItem
                  donationId={item.donationItemId}
                  badgeTitle={selectedCategory?.name as string}
                  donationTitle={item.name}
                  imageUri={item.image}
                  price={Number(item.price)}
                  onPress={() => handlePressDonationItem(item.donationItemId)}
                />
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
