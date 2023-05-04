import {StyleSheet} from 'react-native';
import {colors} from '../../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
  },

  header: {
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
  },

  title: {
    fontSize: 16,
    color: colors.black1,
    fontWeight: '700',
  },

  input: {
    height: 48,
    borderRadius: 6,
    borderColor: colors.gray,
    borderWidth: 1,
    marginHorizontal: 16,
    marginTop: 16,
    paddingLeft: 12,
    fontSize: 14,
    color: colors.black1,
  },
});
