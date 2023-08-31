import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Badge from '../../components/Badge/Tab';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Tab from '../../components/Tab/Tab';
import { globalStyle } from '../../styles/global.style';

type Props = {};

const Home = (props: Props) => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.fullSpace]}>
      <Header title="Azzahri A." type={1} />
      <Search onSearch={text => console.log(text)} placeholder="Search" />
    </SafeAreaView>
  );
};

export default Home;
