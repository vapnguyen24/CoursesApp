import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../../../assets/colors'

const PopularAsignment = (props) => {
  return (
    <View style={styles.container}>
        {/* <View style={styles.imageView}> */}
            <Image style={styles.asmImage} source={{uri: props.uri}}/>
        {/* </View> */}

      <Text style={styles.asmTitle}>{props.title}</Text>
      <Text style={styles.asmLanguage}>Language: {props.language}</Text>
      <View style={styles.asmPriceView}>
        <Text style={styles.asmPriceTitle}>Price</Text>
        <Text style={styles.asmPriceValue}>${props.price}</Text>
      </View>
    </View>
  )
}

export default PopularAsignment

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 230,
        backgroundColor: colors.white,
        borderRadius: 12,
        elevation: 4,
        paddingTop: 10,
        alignItems: 'center',

    },

    imageView: {
        // alignItems: 'center',

    },

    asmImage: {
        width: 180,
        height: 100,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12
    },

    asmTitle: {
        width: 180,
        textAlign: 'left',
        fontSize: 14,
        lineHeight: 22,
        marginTop: 8,
        color: colors.black1,
        fontWeight: '500'
    },

    asmLanguage: {
        width: 180,
        textAlign: 'left',
        fontSize: 14,
        marginTop: 4,
        color: colors.gray,
    },

    asmPriceView: {
        width: 180,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8
    },

    asmPriceTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: colors.black1,
    },

    asmPriceValue: {
        fontSize: 18,
        fontWeight: '500',
        color: colors.black1,
    }

})