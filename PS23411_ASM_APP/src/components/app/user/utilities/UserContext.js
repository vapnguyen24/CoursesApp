import React, {useContext, createContext, useState} from 'react';
import AxiosInstance from '../../axiosClient/AxiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext();

export const UserProvider = props => {
  const {children} = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [user, setUser] = useState();
  const [myAssignment, setMyAssignment] = useState();

  const login = async (email, password) => {
    try {
      const response = await AxiosInstance().post('/user/login', {
        email: email,
        password: password,
      });
      const token = response.data.token;
      const userInf = response.data.user;
      await AsyncStorage.setItem('token', token); // luu lai token

      setUser(userInf);
      setIsLoggedIn(true); // chuyen trang thai login
      return true;
    } catch (error) {
      console.log('Login error: ' + error);
    }
    return false;
  };

  const register = async (email, password) => {
    try {
      const response = await AxiosInstance().post('/user/register', {
        email: email,
        password: password,
      });
      return response.result;
    } catch (error) {
      console.log('Register error: ' + error);
    }
    return false;
  };

  const getMyAssignments = async id => {
    try {
      const response = await AxiosInstance().get(`/user/${id}/my-assignments`);
      setMyAssignment(response);
      return response;
    } catch (error) {
      console.log('Get my assignments error: ' + error);
    }
  };

  const checkBoughtAssignment = async (id, idAsm) => {
    try {
      const response = await AxiosInstance().get(
        `/user/${id}/check-buy?idAsm=${idAsm}`,
      );
      return response.result;
    } catch (error) {
      console.log('Check bought assignment error:' + error);
    }
    return false;
  };

  const checkout = async (id, idAsm) => {
    try {
      const response = await AxiosInstance().post(
        `/user/${id}/checkout?id=${idAsm}`,
      );
      console.log(response.result);
      return response.result;
    } catch (error) {
      console.log('Check out assignment error:' + error);
    }
    return false;
  };

  const update = async (email, name, image, address, phone) => {
    try {
      const response = await AxiosInstance().post(
        `user/${email}/update-profile`,
        {
          name: name,
          image: image,
          address: address,
          phone: phone,
        },
      );
      console.log('response update: ', response);
      if (response.result) {
        const userUpdate = {
          _id: user._id,
          address: address,
          cash: user.cash,
          email: user.email,
          image: image,
          myasm: user.myasm,
          name: name,
          phone: phone,
        };

        setUser(userUpdate);
        return true;
      }
    } catch (error) {
      console.log('update profile error:' + error);
    }
    return false;
  };

  const uploadImage = async formData => {
    try {
      const response = await AxiosInstance('multipart/form-data').post(
        '/products/upload',
        formData,
      );
      console.log(response);
      return response.link
    } catch (error) {
      console.log('upload error: ', error);
    }
    return null;
  };

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        login,
        register,
        getMyAssignments,
        myAssignment,
        setMyAssignment,
        checkBoughtAssignment,
        checkout,
        update,
        uploadImage
      }}>
      {children}
    </UserContext.Provider>
  );
};
