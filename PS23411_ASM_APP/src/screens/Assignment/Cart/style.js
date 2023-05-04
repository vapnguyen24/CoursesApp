import {StyleSheet} from 'react-native';
import {colors} from '../../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
  },

  title: {
    marginLeft: 24,
    fontSize: 24,
    fontWeight: '700',
    color: colors.black1,
    marginTop: 40,
  },

  cartView: {
    marginHorizontal: 24,
    marginTop: 16,
  },

  couponView: {
    height: 56,
    backgroundColor: colors.white,
    borderColor: colors.naturalLight,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 16
  },

  couponInput: {
    marginLeft: 12,
  },

  couponBtn: {
    height: 56,
    width: 87,
    backgroundColor: colors.primaryBlue,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },

  couponApply: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 14
  },

  resultView: {
    marginHorizontal: 24,
    marginTop: 16,
    borderRadius: 8,
    borderColor: colors.naturalLight,
    borderWidth: 1,
    padding: 16
  },

  rowResult: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12
  },

  resultLeft: {
    fontSize: 12,
    color: colors.gray
  },

  resultRight: {
    fontSize: 12,
    color: colors.black1
  },

  priceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24
  },

  totalTitle: {
    fontSize: 12,
    color: colors.black1,
    fontWeight: '600'
  },

  totalValue: {
    fontSize: 12,
    color: colors.primaryBlue,
    fontWeight: '600'
  },

  checkoutText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '700',
  },

  checkoutButton: {
    marginHorizontal: 16,
    marginTop: 16,
    height: 57,
    backgroundColor: colors.primaryBlue,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.primaryBlue,
    shadowColor: colors.primaryBlue,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    marginBottom: 16,
    elevation: 13,
  },
});
