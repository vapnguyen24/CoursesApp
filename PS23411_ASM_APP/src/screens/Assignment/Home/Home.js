import {
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  ScrollView,
  Keyboard,
} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './style';
import PopularAsignment from '../components/PopularAsignment';
import NewestAsignment from '../components/NewestAsignment';
import {colors} from '../../../assets/colors';
import {FlatList} from 'react-native-gesture-handler';
import {routes} from '../../../navigations/utils';
const asignmentList = [
  {
    id: 1,
    img: 'https://techtually.sirv.com/WP_www.techtually.com/2020/09/Advantages-and-disadvantages-of-HTML.jpg',
    name: 'Assignment Thiết kết trang web HTML5 & CSS3',
    language: 'HTML',
    price: '18',
  },

  {
    id: 2,
    img: 'https://techtually.sirv.com/WP_www.techtually.com/2020/09/Advantages-and-disadvantages-of-HTML.jpg',
    name: 'Assignment Thiết kết trang web HTML5 & CSS3',
    language: 'HTML',
    price: '18',
  },

  {
    id: 3,
    img: 'https://techtually.sirv.com/WP_www.techtually.com/2020/09/Advantages-and-disadvantages-of-HTML.jpg',
    name: 'Assignment Thiết kết trang web HTML5 & CSS3',
    language: 'HTML',
    price: '18',
  },

  {
    id: 4,
    img: 'https://techtually.sirv.com/WP_www.techtually.com/2020/09/Advantages-and-disadvantages-of-HTML.jpg',
    name: 'Assignment Thiết kết trang web HTML5 & CSS3',
    language: 'HTML',
    price: '18',
  },
];

const Home = ({navigation}) => {
  //   useEffect(() => {
  //     LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  // }, [])

  const navigateSearch = () => {
    Keyboard.dismiss();
    navigation.navigate(routes.searchAssignment);
  };

  const Header = () => {
    return (
      <View style={styles.headerView}>
        <Text style={styles.headerSlogan}>
          Find your{'\n'}matches assignment
        </Text>
        <Text style={styles.headerQuantity}>10 Assigments available</Text>
      </View>
    );
  };

  const renderItem = ({item}) => {
    return (
      <View style={{marginRight: 16, marginVertical: 16, marginLeft: 4}}>
        <Pressable onPress={() => navigation.navigate(routes.detailAsignment)}>
          <PopularAsignment
            uri={item.img}
            title={item.name}
            language={item.language}
            price={item.price}
          />
        </Pressable>
      </View>
    );
  };

  const renderNewestItem = ({item}) => {
    return (
      <View style={{marginBottom: 8}}>
        <Pressable>
          <NewestAsignment
            uri={item.img}
            title={item.name}
            language={item.language}
            price={item.price}
          />
        </Pressable>
      </View>
    );
  };

  const InputSearch = () => {
    return (
      <View style={styles.inputView}>
        <TextInput
          onFocus={navigateSearch}
          placeholderTextColor={colors.gray}
          placeholder="Search assignments"
          style={styles.input}
        />
        <View style={styles.inputIcon}>
          <Image source={require('../../../assets/icons/WhiteSearch.png')} />
        </View>
      </View>
    );
  };

  const ListHeaderComponent = () => {
    return (
      <View style={{}}>
        {/* header */}
        <Header />
        {/* search */}
        <InputSearch />

        {/* popular */}
        <View style={styles.popularView}>
          <Text style={styles.popularText}>Popular</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.popularList}
            data={asignmentList}
            keyExtractor={item => item.id}
            renderItem={renderItem}
          />
        </View>
        {/* newest */}
        <View style={styles.newestText}>
          <Text style={styles.popularText}>Newest</Text>
          <Pressable onPress={navigateSearch}>
            <Text style={styles.seeMore}>See more</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <ScrollView keyboardShouldPersistTaps="always">
      <View style={styles.container}>
        <ListHeaderComponent />

        {/* newest list*/}
        <View style={styles.newestList}>
          {React.Children.toArray(
            asignmentList.map((item, index) => {
              return (
                <View style={{marginBottom: 8, marginHorizontal: 16}}>
                  <Pressable>
                    <NewestAsignment
                      uri={item.img}
                      title={item.name}
                      language={item.language}
                      price={item.price}
                    />
                  </Pressable>
                </View>
              );
            }),
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
