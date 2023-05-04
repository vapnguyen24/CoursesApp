import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  FlatList,
} from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import {styles} from './style';
import NewestAsignment from '../components/NewestAsignment';
import {colors} from '../../../assets/colors';
import { UserContext } from '../../../components/app/user/utilities/UserContext';
import { routes } from '../../../navigations/utils';


const MyAssignment = ({navigation}) => {

  const {getMyAssignments, user} = useContext(UserContext);
  const [asmList, setAsmList] = useState([]);

  const fetchData = async () => {
    const result = await getMyAssignments(user._id);
    setAsmList(result);
  }

  useEffect(() => {
    fetchData();
  }, [])

  const Header = () => {
    return (
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require('../../../assets/icons/Left.png')} />
        </Pressable>
        <Text style={styles.title}>My order</Text>
        <Text></Text>
      </View>
    );
  };

  const renderNewestItem = ({item}) => {
    return (
      <View style={{marginBottom: 8, marginHorizontal: 16}}>
        <Pressable onPress={() => navigation.navigate(routes.detailAsignment, item)}>
          <NewestAsignment
            uri={item.image}
            title={item.name}
            language={item.category}
            price={item.price}
          />
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      {/* Search */}
      <TextInput
        placeholderTextColor={colors.gray}
        placeholder="Search my assignments"
        style={styles.input}
      />
      <FlatList
        refreshing={false}
        onRefresh={() => fetchData()}
        style={{marginTop: 16, marginBottom: 24}}
        data={asmList}
        renderItem={renderNewestItem}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

export default MyAssignment;
