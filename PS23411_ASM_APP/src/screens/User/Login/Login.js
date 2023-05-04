import {Text, View, Image, TextInput, TouchableOpacity, ToastAndroid} from 'react-native';
import React, {useContext, useState} from 'react';
import {styles} from './style';
import {routes} from '../../../navigations/utils';
import { colors } from '../../../assets/colors';
import { UserContext } from '../../../components/app/user/utilities/UserContext';
const Login = ({navigation}) => {

  const {login} = useContext(UserContext);

  const [username, setUsername] = useState('vinh@gmail.com');
  const [password, setPassword] = useState('123');

  const handleLogin = async () => {
    const res = await login(username, password);
    if (!username || !password) {
      ToastAndroid.show('Login failed', 500);
      return;
    }
  };

  const Header = () => {
    return (
      <View style={styles.header}>
        <Image source={require('../../../assets/icons/logo.png')} />
        <Text style={styles.welcomeText}>Welcome to Lafyuu</Text>
        <Text style={styles.signinText}>Sign in to continue</Text>
      </View>
    );
  };

  const LoginButton = () => {
    return (
      <TouchableOpacity
        style={styles.loginButton}
        activeOpacity={0.8}
        onPress={handleLogin}>
        <Text style={styles.loginText}>Sign In</Text>
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
            style={styles.inputText}
            placeholderTextColor={colors.gray}
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
            style={styles.inputText}
            secureTextEntry
            placeholderTextColor={colors.gray}
            placeholder="Password"
          />
        </View>
      </View>

      {/* login button */}
      <LoginButton />

      <View style={styles.forgotView}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
        <View style={styles.registerView}>
          <Text style={styles.registerText}>Don’t have a account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.register)}>
            <Text style={styles.register}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
