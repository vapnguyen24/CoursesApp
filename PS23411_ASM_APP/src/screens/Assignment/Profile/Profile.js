import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {styles} from './style';
import {routes} from '../../../navigations/utils';

const Profile = ({navigation}) => {
  const SectionProfile = () => {
    return (
      <Pressable onPress={() => navigation.navigate(routes.detailProfile)}>
        <View style={styles.sectionView}>
          <Image
            style={styles.sectionImage}
            source={require('../../../assets/icons/UserActive.png')}
          />
          <Text style={styles.sectionText}>Profile</Text>
        </View>
      </Pressable>
    );
  };

  const SectionOrder = () => {
    return (
      <Pressable onPress={() => navigation.navigate(routes.myAssignment)}>
        <View style={styles.sectionView}>
          <Image
            style={styles.sectionImage}
            source={require('../../../assets/icons/bag.png')}
          />
          <Text style={styles.sectionText}>Order</Text>
        </View>
      </Pressable>
    );
  };

  const SectionLogout = () => {
    return (
      <Pressable onPress={() => {}}>
        <View style={styles.sectionView}>
          <Image
            style={styles.sectionImage}
            source={require('../../../assets/icons/logout.png')}
          />
          <Text style={styles.sectionText}>Log out</Text>
        </View>
      </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account</Text>
      <View style={styles.row}></View>
      {/* profile */}
      <SectionProfile />
      <SectionOrder />
      <SectionLogout />
    </View>
  );
};

export default Profile;
