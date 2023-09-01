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
import { resetState, selectUser } from '../../redux/slices/user.slice';
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
import { sleep } from '../../components/util/index.util';

type Props = {};

const Home = (props: Props) => {
  const user = useAppSelector(selectUser);
  const categories = useAppSelector(selectCategories);
  const selectedCategoryId = useAppSelector(selectSelectedCategoryId);
  const dispatch = useAppDispatch();

  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(0);
  const [categoriesData, setCategoriesData] = useState<Category[]>([]);
  const pageSize = 4;

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

  useEffect(() => {
    fetchMore();
  }, []);

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.fullSpace]}>
      <ScrollView>
        <View style={homeStyle.headerContainer}>
          <View>
            <Text style={homeStyle.headerIntroText}>Hello,</Text>
            <Header title={`${user.firstName} ${user.lastName}.👋`} type={1} />
          </View>

          <Image source={avtImg} style={homeStyle.headerAvtImage} />
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
