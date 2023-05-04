import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import { colors } from '../../../assets/colors';

const CartAsignment = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.asmImage} source={{uri: props.uri}} />
      <View style={styles.asmContent}>
        <Text style={styles.asmTitle}>{props.title}</Text>
        <Text style={styles.asmPrice}>${props.price}</Text>
      </View>
    </View>
  );
};

export default CartAsignment;

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: colors.white,
    borderRadius: 6,
    borderColor: '#eee',
    borderWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingTop: 6,
  },

  asmImage: {
    width: 88,
    height: 88,
    borderRadius: 8,
  },

  asmTitle: {
    color: colors.black1,
    fontSize: 16,
  },

  asmContent: {
    flex: 1,
    marginLeft: 8,
    height: 88,
    justifyContent: 'space-between'
  },

  asmPrice: {
    color: colors.primaryBlue,
    fontSize: 16,
    fontWeight: '700'
  }
});
