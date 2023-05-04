import {StyleSheet} from 'react-native';
import {colors} from '../../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  header: {
    marginTop: 68,
    alignItems: 'center',
  },
  welcomeText: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: '700',
    color: colors.black1,
  },

  signinText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '400',
    color: colors.gray,
  },

  contentInput: {
    marginTop: 20,
    marginHorizontal: 16,
  },

  inputView: {
    marginTop: 8,
    borderColor: colors.naturalLight,
    borderWidth: 1,
    backgroundColor: colors.white,
    height: 48,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },

  inputIcon: {
    marginLeft: 16,
  },

  inputText: {
    marginLeft: 12,
    fontSize: 12,
    fontWeight: '400',
    color: colors.gray,
    flex: 1,
    marginRight: 16
  },

  loginText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '700',
  },

  loginButton: {
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

    elevation: 13,
  },

  forgotView: {
    alignItems: 'center',
    marginVertical: 24
  },

  forgotText: {
    fontWeight: '700',
    fontSize: 12, 
    color: colors.primaryBlue
  }, 


  registerView: {
    flexDirection: 'row',
    alignItems: 'center'

  },
  registerText: {
    
    fontWeight: '700',
    fontSize: 12, 
    color: colors.gray,
  },


  register: {
    fontWeight: '700',
    fontSize: 12, 
    color: colors.primaryBlue,
    marginLeft: 4
  }
});
