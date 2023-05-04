import {StyleSheet} from 'react-native';
import {colors} from '../../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  '#fefefe',
    paddingTop: 50,
  },

  title: {
    marginLeft: 24,
    fontSize: 24,
    fontWeight: '700',
    color: colors.black1,
  },

  listView: {
    marginTop: 14,
    marginBottom: 6,
    marginHorizontal: 14,
    flex: 1,
  },

  categoryItem: {
    alignItems: 'center',
    flex: 1,
    marginVertical: 10,
    backgroundColor: colors.white,
    borderRadius: 8,
    marginHorizontal: 10,
    elevation: 5

    
  },

  categoryText: {
    color: colors.black1,
    fontSize: 16,
    fontWeight: '500',
    marginTop: 8,
    marginBottom: 16
  },

  categoryImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    //resizeMode: 'cover',
    borderWidth: 1,
  },
});
