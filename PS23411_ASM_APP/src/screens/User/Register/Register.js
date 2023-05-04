import {Text, View, Image, TextInput, TouchableOpacity, ToastAndroid} from 'react-native';
import React, {useContext, useState} from 'react';
import {styles} from './style';
import {routes} from '../../../navigations/utils';
import {colors} from '../../../assets/colors';
import { UserContext } from '../../../components/app/user/utilities/UserContext';
const Register = ({navigation}) => {

  const {register} = useContext(UserContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    const result = await register(username, password);
    if (result) {
      ToastAndroid.show("register success", 500);
      navigation.navigate(routes.singin);
    } else {
      ToastAndroid.show("register failed", 500);
    }
  };

  const Header = () => {
    return (
      <View style={styles.header}>
        <Image source={require('../../../assets/icons/logo.png')} />
        <Text style={styles.welcomeText}>Let’s Get Started</Text>
        <Text style={styles.signinText}>Create an new account</Text>
      </View>
    );
  };

  const RegisternButton = () => {
    return (
      <TouchableOpacity
        style={styles.loginButton}
        activeOpacity={0.8}
        onPress={handleRegister}>
        <Text style={styles.loginText}>Sign Up</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Header />

      {/* input */}
      <View style={styles.contentInput}>
        {/* email */}
        <View style={styles.inputView}>
          <Image
            style={styles.inputIcon}
            source={require('../../../assets/icons/MailIcon.png')}
          />
          <TextInput
            value={username}
            onChangeText={setUsername}
            placeholderTextColor={colors.gray}
            style={styles.inputText}
            placeholder="Your Email"
          />
        </View>

        {/* password */}
        <View style={styles.inputView}>
          <Image
            style={styles.inputIcon}
            source={require('../../../assets/icons/PasswordIcon.png')}
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor={colors.gray}
            style={styles.inputText}
            placeholder="Password"
          />
        </View>

        {/* retype password */}
        <View style={styles.inputView}>
          <Image
            style={styles.inputIcon}
            source={require('../../../assets/icons/PasswordIcon.png')}
          />
          <TextInput
            // value={password}
            // onChangeText={setPassword}
            placeholderTextColor={colors.gray}
            style={styles.inputText}
            placeholder="Password Again"
            secureTextEntry
          />
        </View>
      </View>

      {/* login button */}
      <RegisternButton />

      <View style={styles.forgotView}>
        <View style={styles.registerView}>
          <Text style={styles.registerText}>Don’t have a account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate(routes.singin)}>
            <Text style={styles.register}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;
