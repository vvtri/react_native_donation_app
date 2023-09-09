import React from 'react';
import { Image, View, Pressable } from 'react-native';
import Badge from '../Badge/Tab';
import Header from '../Header/Header';
import { singleDonationItemStyle } from './style';

type Props = {
  badgeTitle: string;
  price: number;
  donationTitle: string;
  imageUri: string;
  donationId: number;
  onPress?: () => any;
};

const SingleDonationItem = ({
  badgeTitle,
  donationTitle,
  imageUri,
  price,
  onPress,
}: Props) => {
  return (
    <Pressable onPress={onPress}>
      <View style={singleDonationItemStyle.imageContainer}>
        <Image
          source={{ uri: imageUri }}
          resizeMode="cover"
          style={singleDonationItemStyle.image}
        />
        <View style={singleDonationItemStyle.badge}>
          <Badge title={badgeTitle} />
        </View>
      </View>

      <View style={singleDonationItemStyle.informationContainer}>
        <Header
          title={donationTitle}
          type={3}
          color="#0A043C"
          numberOfLines={1}
        />

        <View style={singleDonationItemStyle.price}>
          <Header title={`$${price.toFixed(2)}`} type={3} color="#156CF7" />
        </View>
      </View>
    </Pressable>
  );
};

export default SingleDonationItem;
