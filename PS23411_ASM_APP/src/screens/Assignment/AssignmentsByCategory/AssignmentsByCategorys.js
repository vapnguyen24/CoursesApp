import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
  FlatList,
} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import NewestAsignment from '../components/NewestAsignment';
import {styles} from '../SearchAssignment/style';
import {colors} from '../../../assets/colors';
import {AsmContext} from '../../../components/app/assignments/AsmContext';
import { routes } from '../../../navigations/utils';
const AssignmentsByCategory = props => {
  const idCategory = props.route.params.idCategory;
  console.log('idCategory: ', idCategory);

  const {getAllAssignmentsByCategories} = useContext(AsmContext);

  const [asmList, setAsmList] = useState([]);

  const fetchData = async () => {
    const data = await getAllAssignmentsByCategories(idCategory);
    console.log('data: ', data);
    setAsmList(data);
  };

  useEffect(() => {
    fetchData();

    return () => {};
  }, []);

  const {navigation} = props;

  const Header = () => {
    return (
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require('../../../assets/icons/Left.png')} />
        </Pressable>
        <Text style={styles.title}>All assignments</Text>
        <Text></Text>
      </View>
    );
  };

  const renderNewestItem = ({item}) => {
    return (
      <View style={{marginBottom: 8, marginHorizontal: 16}}>
        <Pressable
          onPress={() =>
            navigation.navigate(routes.detailAsignment, item)
          }>
          <NewestAsignment
            uri={item.image}
            title={item.name}
            language={item.describe}
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
        onRefresh={fetchData}
        style={{marginTop: 16, marginBottom: 24}}
        data={asmList}
        renderItem={renderNewestItem}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

export default AssignmentsByCategory;
