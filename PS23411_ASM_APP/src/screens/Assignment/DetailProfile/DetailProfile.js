import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React, { useContext } from 'react';
import {styles} from './style';
import { routes } from '../../../navigations/utils';
import { UserContext } from '../../../components/app/user/utilities/UserContext';

const DetailProfile = ({navigation}) => {
  const {user} = useContext(UserContext);
  console.log(user)

  const userInfor = {
    id: 1,
    img: 'https://techtually.sirv.com/WP_www.techtually.com/2020/09/Advantages-and-disadvantages-of-HTML.jpg',
    name: 'Maximus Gold',
    gender: 'Male',
    dob: '12-12-2000',
    email: 'Derlaxy@yahoo.com',
    phone: '(307) 555-0133',
  };

  const Header = () => {
    return (
      <View style={styles.header}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={styles.naviHeader}>
            <Pressable onPress={() => navigation.goBack()}>
              <Image
                style={styles.sectionImage}
                source={require('../../../assets/icons/Left.png')}
              />
            </Pressable>

            <Text style={styles.title}>Profile</Text>
          </View>
          <Pressable onPress={() => navigation.navigate(routes.updateProfile)}>
            <Text style={styles.update}>Update</Text>
          </Pressable>
        </View>

        <View style={styles.row}></View>
      </View>
    );
  };

  const UserInfor = () => {
    return (
      <View style={styles.userInforView}>
        <View style={styles.userInfor1st}>
          {/* avt */}
          <Image style={styles.userImage} source={{uri: user.image == '' ? 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png' : user.image}} />
          {/* name */}
          <Text style={styles.userName}>{user.name == '' ? 'Username101' : user.name}</Text>
        </View>

        <View style={styles.userInfor2nd}>
          {/* section gender */}
          {/* <View style={styles.sectionUser}>
            <View style={styles.sectionUserLeft}>
              <Image source={require('../../../assets/icons/Gender.png')} />
              <Text style={styles.sectionTitle}>Gender</Text>
            </View> */}
            {/* gender */}
            {/* <Text style={styles.sectionValue}>{userInfor.gender}</Text>
          </View> */}

          {/* section address */}
          <View style={styles.sectionUser}>
            <View style={styles.sectionUserLeft}>
              <Image source={require('../../../assets/icons/Date.png')} />
              <Text style={styles.sectionTitle}>Address</Text>
            </View>
            {/* dob */}
            <Text style={styles.sectionValue}>{user.address == '' ? 'No address' : user.address}</Text>
          </View>

          {/* section Email */}
          <View style={styles.sectionUser}>
            <View style={styles.sectionUserLeft}>
              <Image source={require('../../../assets/icons/Message.png')} />
              <Text style={styles.sectionTitle}>Email</Text>
            </View>
            {/* email */}
            <Text style={styles.sectionValue}>{user.email}</Text>
          </View>

          {/* section phone */}
          <View style={styles.sectionUser}>
            <View style={styles.sectionUserLeft}>
              <Image source={require('../../../assets/icons/Phone.png')} />
              <Text style={styles.sectionTitle}>Phone Number</Text>
            </View>
            {/* phone */}
            <Text style={styles.sectionValue}>{user.phone == '' ? 'Unknown' : user.phone}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <UserInfor />
    </View>
  );
};

export default DetailProfile;
