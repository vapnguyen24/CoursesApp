import {StyleSheet} from 'react-native';
import {colors} from '../../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
  },

  headerView: {
    marginHorizontal: 16,
    marginTop: 50,
  },

  headerSlogan: {
    color: colors.black1,
    fontSize: 26,
    lineHeight: 35,
    fontWeight: '600',
  },

  headerQuantity: {
    marginTop: 8,
    color: colors.gray,
    fontSize: 16,
    fontWeight: '500',
  },

  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 16,
    borderColor: colors.naturalLight,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 60,
  },

  input: {
    flex: 1,
  },

  inputIcon: {
    height: 40,
    width: 40,
    borderRadius: 4,
    backgroundColor: colors.primaryBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },

  popularView: {
    marginTop: 16,
  },

  popularText: {
    color: colors.black1,
    fontSize: 20,
    fontWeight: '500',
    marginHorizontal: 16
  },

  popularList: {
    marginLeft: 12,
    marginRight: 0,
  },

  newestText: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  seeMore: {
    color: colors.gray,
    fontSize: 16,
    fontWeight: '400',
    marginRight: 16
  },

  newestList: {
    marginTop: 16,
    marginBottom: 8
  }
 
});
