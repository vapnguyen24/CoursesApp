import React, {useContext, createContext, useState} from 'react';
import AxiosInstance from '../axiosClient/AxiosInstance';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export const AsmContext = createContext();

export const AsmProvider = props => {
  const {children} = props;

  const [categories, setCategories] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [assignmentsByCategory, setAssignmentsByCategory] = useState([]);

  const getAllCategories = async () => {
    try {
      const response = await AxiosInstance().get('/products/get-all-categories');
      setCategories(response.categories);
      return response.categories;
    } catch (error) {
      console.log('error: ', error);
    }
    return null;
  };

  const getAllAssignments = async () => {
    try {
      const response = await AxiosInstance().get('/products/get-all');
      setAssignments(response.products);
      return response.products;
    } catch (error) {
      console.log('error: ', error);
    }
    return null;

  };

  const getAllAssignmentsByCategories = async (id) => {
    try {
      const response = await AxiosInstance().get(`/products/${id}/assignments-by-category`);
      setAssignmentsByCategory(response);
      return response;
    } catch (error) {
      console.log('error: ', error);
    }
    return null;

  };

  return (
    <AsmContext.Provider value={{
            getAllCategories, categories, setCategories, 
            getAllAssignments, assignments, setAssignments, 
            getAllAssignmentsByCategories, assignmentsByCategory, setAssignmentsByCategory}}>
      {children}
    </AsmContext.Provider>
  );
};
