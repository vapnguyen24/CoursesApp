import {StyleSheet, Text, View, Image, Pressable, ToastAndroid} from 'react-native';
import React, { useContext, useState, useCallback } from 'react';
import {styles} from './style';
import {TextInput} from 'react-native-gesture-handler';
import { colors } from '../../../assets/colors';
import { UserContext } from '../../../components/app/user/utilities/UserContext';
import { launchImageLibrary } from 'react-native-image-picker';
const userInfor = {
  id: 1,
  img: 'https://techtually.sirv.com/WP_www.techtually.com/2020/09/Advantages-and-disadvantages-of-HTML.jpg',
  name: 'Maximus Gold',
  gender: 'Male',
  dob: '12-12-2000',
  email: 'Derlaxy@yahoo.com',
  phone: '(307) 555-0133',
};

const UpdateProfile = ({navigation}) => {


  const {user, update, uploadImage} = useContext(UserContext);

  const [image, setImage] = useState(user.image);
  const [name, setName] = useState(user.name);
  const [address, setAddress] = useState(user.address);
  const [phone, setPhone] = useState(user.phone);

  const handleUpdate = async () => {
      const res = await update(user.email, name, image, address,phone);
      if (res) ToastAndroid.show('Update successful!', 500);
  }

  const openGallery = useCallback(async () => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra: true,
    };

    const result = await launchImageLibrary(options, async response => {
      if (response.didCancel) {
        console.log('Cancel pick image');
      } else if (response.error) {
        console.log('image picker err: ', response.error);
      } else if (response.customButton) {
        console.log('tap button: ', response.customButton);
      } else {
        // setPhotoUri(response.assets[0].uri);
        // setIsHidden(false);
        response = response.assets[0];

        const formData = new FormData();
        formData.append('image', {
          uri: response.uri,
          type: response.type,
          name: response.fileName,
        });

        const res = await uploadImage(formData);
        console.log('res: ', res);
        setImage(res);
        // setIsHidden(false);
      }
    });
  }, []);

  const Header = () => {
    return (
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            resizeMode="contain"
            source={require('../../../assets/icons/close.png')}
          />
        </Pressable>
        <Text style={styles.title}>Edit Profile</Text>
        <Pressable onPress={handleUpdate}>
          <Image
            resizeMode="contain"
            source={require('../../../assets/icons/Check.png')}
          />
        </Pressable>
      </View>
    );
  };

  return (
    <View>
      <Header />

      {/* Content */}
      <View style={styles.imgView}>
        <Pressable onPress={openGallery}>
          <View style={styles.imgViewIn}>
            <Image style={styles.imgAva} source={{uri: image}} />
            <Image
              style={styles.imgIcon}
              source={require('../../../assets/icons/Camera.png')}
            />
          </View>
        </Pressable>
      </View>
      {/* input name */}
      <View style={{marginBottom: 16, marginHorizontal: 16}}>
        <Text style={styles.userTitle}>Full Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholderTextColor={colors.gray}
          placeholder="Full name"
          style={styles.userInput}
        />
      </View>

      {/* input address */}
      <View style={{marginBottom: 16, marginHorizontal: 16}}>
        <Text style={styles.userTitle}>Adress</Text>
        <TextInput
          value={address}
          onChangeText={setAddress}
          placeholderTextColor={colors.gray}
          placeholder="Address"
          style={styles.userInput}
        />
      </View>

      {/* input phone */}
      <View style={{marginBottom: 16, marginHorizontal: 16}}>
        <Text style={styles.userTitle}>Phone number</Text>
        <TextInput
          value={phone}
          onChangeText={setPhone}
          placeholderTextColor={colors.gray}
          placeholder="Phone number"
          style={styles.userInput}
        />
      </View>
    </View>
  );
};

export default UpdateProfile;
