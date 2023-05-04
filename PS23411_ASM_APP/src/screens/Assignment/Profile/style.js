import {StyleSheet} from 'react-native';
import {colors} from '../../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
  },

  title: {
    marginTop: 40,
    marginLeft: 24,
    fontSize: 24,
    fontWeight: '700',
    color: colors.black1,
  },

  row: {
    borderTopColor: colors.naturalLight,
    borderTopWidth: 1,
    height: 1,
    marginTop: 28
  },

  sectionView: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center'
  },

  sectionImage: {
    marginLeft: 16
  },

  sectionText: {
    marginLeft: 16,
    fontSize: 12,
    fontWeight: '700',
    color: colors.black1,
  }
});
