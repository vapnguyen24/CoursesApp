import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import {styles} from './style';
import { AsmContext } from '../../../components/app/assignments/AsmContext';
import { routes } from '../../../navigations/utils';


const Explore = ({navigation}) => {

  const {getAllCategories} = useContext(AsmContext);
  const [categoriesList, setCategoriesList] = useState([]);

  const fetchData = async () => {
    const result = await getAllCategories();
    setCategoriesList(result);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={styles.categoryItem}>
        <Pressable onPress={() => navigation.navigate(routes.assignmentsByCategory, {idCategory: item._id})}>
          <Image style={styles.categoryImage} source={{uri: item.image}} />
          <Text style={styles.categoryText}>{item.name}</Text>
        </Pressable>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Category</Text>

      {/* list */}
      <FlatList
        refreshing={false}
        onRefresh={fetchData}
        showsVerticalScrollIndicator={false}
        data={categoriesList}
        numColumns={2}
        keyExtractor={item => item._id}
        renderItem={renderItem}
        style={styles.listView}
      />
    </View>
  );
};

export default Explore;
