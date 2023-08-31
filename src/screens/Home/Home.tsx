import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Header from '../../components/Header/Header';

type Props = {};

const Home = (props: Props) => {
  return (
    <SafeAreaView>
      <Header title="Azzahri A." type={1} />
    </SafeAreaView>
  );
};

export default Home;
