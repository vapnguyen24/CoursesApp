import {StyleSheet} from 'react-native';
import {colors} from '../../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    position: 'relative',
  },

  back: {
    marginLeft: 16,
    marginTop: 40,
  },

  img: {
    height: 238,
    width: '100%',
    marginTop: 16,
  },

  priceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    height: 70,
    position: 'absolute',
    bottom: 3,
    width: '100%',
    elevation: 40,
  },

  priceViewLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  priceTitle: {
    fontSize: 18,
    color: colors.black1,
    fontWeight: '700',
  },

  priceText: {
    fontSize: 18,
    color: colors.black1,
    fontWeight: '700',
    marginLeft: 4,
  },

  applyView: {
    height: 55,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primaryBlue,
    borderRadius: 6
  },

  applyViewDisable: {
    height: 55,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bdbdbd',
    borderRadius: 6
  },

  applyText: {
    fontSize: 16,
    color: colors.white,
    fontWeight: '700',
  },

  asmTitle: {
    fontSize: 18,
    color: colors.black1,
    fontWeight: '700'
  },

  asmLanguage: {
    marginTop: 16,

    fontSize: 14,
    color: colors.black1,
    fontWeight: '400'
  },

  asmDesTitle: {
    marginTop: 16,

    fontSize: 16,
    color: colors.black1,
    fontWeight: '600'
  },

  asmDes: {
    marginTop: 4,

    fontSize: 14,
    color: colors.black1,
    fontWeight: '400'
  },

  imgView: {
    marginTop: 4,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  imgOther: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 12,
    marginBottom: 12
  }
});
