import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../../../assets/colors'

const NewestAsignment = (props) => {
  return (
    <View style={styles.container}>
        <Image style={styles.asmImage} resizeMode='contain' source={{uri: props.uri}}/>
        <View  style={styles.asmContent}>
            <Text  style={styles.asmTitle}>{props.title}</Text>
            <Text style={styles.asmLanguage}>Language: {props.language}</Text>
            <Text style={styles.asmPrice}>${props.price}</Text>

        </View>
      
    </View>
  )
}

export default NewestAsignment

const styles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: colors.white,
        borderRadius: 6,
        elevation: 4,
        flexDirection: 'row',
        paddingHorizontal: 8,
        paddingTop: 6,

    },

    asmImage: {
      width: 88,
      height: 88,
      borderRadius: 8,
    },

    asmContent: {
      flex: 1,
      marginLeft: 8
    },

    asmTitle: {
      color: colors.black1,
      fontSize: 15,
    },

    asmLanguage: {
      color: colors.gray,
      fontSize: 14,
    },

    asmPrice: {
      flex: 1,
      textAlign: 'right',
      color: colors.black1,
      fontSize: 18,
      fontWeight: '600'
    }
})