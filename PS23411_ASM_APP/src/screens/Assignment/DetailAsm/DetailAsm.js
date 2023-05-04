import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {styles} from './style';
import {UserContext} from '../../../components/app/user/utilities/UserContext';
import { routes } from '../../../navigations/utils';

const asm = {
  id: 1,
  img: 'https://techtually.sirv.com/WP_www.techtually.com/2020/09/Advantages-and-disadvantages-of-HTML.jpg',
  name: 'Assignment Thiết kết trang web HTML5 & CSS3',
  language: 'HTML',
  describe: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also`,
  imgOther: [
    {
      id: 1,
      img: 'https://techtually.sirv.com/WP_www.techtually.com/2020/09/Advantages-and-disadvantages-of-HTML.jpg',
    },
    {
      id: 2,
      img: 'https://techtually.sirv.com/WP_www.techtually.com/2020/09/Advantages-and-disadvantages-of-HTML.jpg',
    },
    {
      id: 3,
      img: 'https://techtually.sirv.com/WP_www.techtually.com/2020/09/Advantages-and-disadvantages-of-HTML.jpg',
    },
  ],
  price: '18',
};
const DetailAsm = props => {
  const asmItem = props.route.params;

  const {navigation} = props;

  const [isBought, setIsBought] = useState(false);
  const {checkBoughtAssignment, user, checkout} = useContext(UserContext);

  const fetchData = async () => {
    const result = await checkBoughtAssignment(user._id, asmItem._id);
    setIsBought(result);
  };

  useEffect(() => {
    fetchData();

    return () => {};
  }, []);

  const handleCheckOut = async () => {
    const result = await checkout(user._id, asmItem._id);
    if (result) {
      ToastAndroid.show('Buy success', 500);
      navigation.navigate(routes.home);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Pressable style={styles.back} onPress={() => navigation.goBack()}>
          <Image source={require('../../../assets/icons/Left.png')} />
        </Pressable>

        {/* img */}
        <Image style={styles.img} source={{uri: asmItem.image}} />

        <View style={{marginHorizontal: 16, marginTop: 16, marginBottom: 64}}>
          {/* name */}
          <Text style={styles.asmTitle}>{asmItem.name}</Text>

          {/* language */}
          <Text style={styles.asmLanguage}>Laguage: {asmItem.category}</Text>

          {/*  */}
          <Text style={styles.asmDesTitle}>Description</Text>

          {/* language */}
          <Text style={styles.asmDes}>{asmItem.describe}</Text>

          {isBought ? (
            <View>
              {/*  */}
              <Text style={styles.asmDesTitle}>Source</Text>

              {/* source */}
              <Text style={styles.asmDes}>{asmItem.source}</Text>
            </View>
          ) : (
            <></>
          )}

          {/*  */}
          <Text style={styles.asmDesTitle}>Other images</Text>

          {/* Other images */}
          <View style={styles.imgView}>
            {React.Children.toArray(
              asm.imgOther.map((item, index) => {
                return (
                  <Image style={styles.imgOther} source={{uri: item.img}} />
                );
              }),
            )}
          </View>
        </View>
      </ScrollView>
      {/* price & check out */}
      <View style={styles.priceView}>
        <View style={styles.priceViewLeft}>
          <Text style={styles.priceTitle}>Price:</Text>
          <Text style={styles.priceText}>${asmItem.price}</Text>
        </View>

        <Pressable
          onPress={handleCheckOut}
          disabled={isBought}
          style={!isBought ? styles.applyView : styles.applyViewDisable}>
          <Text style={styles.applyText}>
            {!isBought ? 'Apply' : 'Ordered'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default DetailAsm;
