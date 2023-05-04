import {StyleSheet} from 'react-native';
import {colors} from '../../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
  },

  header: {
    marginTop: 40,
  },

  naviHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,

  },

  title: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.black1,
    marginLeft: 12
  },

  update: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.primaryBlue,
    marginRight: 16
  },

  row: {
    borderTopColor: colors.naturalLight,
    borderTopWidth: 1,
    height: 1,
    marginTop: 28
  },

  userInfor1st: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  userInforView: {

    marginTop: 24,
    marginHorizontal: 16
  },

  userImage: {
    width: 72, 
    height: 72, 
    borderRadius: 72
  },

  userName: {
    fontSize: 14,
    color: colors.black1,
    fontWeight: '700',
    marginLeft: 16
  },

  userInfor2nd: {
    marginTop: 32
  },

  sectionUser: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56
  },

  sectionUserLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  sectionTitle: {
    
    fontSize: 12,
    fontWeight: '700',
    color: colors.black1,
    marginLeft: 16
  },

  sectionValue: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.gray,
  }
})