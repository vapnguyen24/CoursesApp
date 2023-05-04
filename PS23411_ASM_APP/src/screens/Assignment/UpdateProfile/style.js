import {StyleSheet} from 'react-native';
import {colors} from '../../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
  },

  header: {
    marginTop: 40,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  title: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.black1
  },

  imgView: {
    alignItems: 'center',
    marginTop: 16
  },

  imgAva: {
    width: 140,
    height: 140,
    borderRadius: 140
  },

  imgViewIn: {
    position: 'relative'
  },

  imgIcon: {
    position: 'absolute',
    bottom: 0,
    right: 16
  },

  userTitle: {
    fontSize: 12,
    color: colors.black1
  },


  userInput: {
    height: 48,
    borderRadius: 6,
    borderColor: '#4E4B66',
    borderWidth: 1,
    marginTop: 4,
    paddingLeft: 12
  },
});