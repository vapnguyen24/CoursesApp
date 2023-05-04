import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {styles} from './style';
import CartAsignment from '../components/CartAsignment';
import { colors } from '../../../assets/colors';
const asignmentList = [
  {
    id: 1,
    img: 'https://techtually.sirv.com/WP_www.techtually.com/2020/09/Advantages-and-disadvantages-of-HTML.jpg',
    name: 'Assignment Thiết kết trang web HTML5 & CSS3',
    language: 'HTML',
    price: '18',
  },

  {
    id: 2,
    img: 'https://techtually.sirv.com/WP_www.techtually.com/2020/09/Advantages-and-disadvantages-of-HTML.jpg',
    name: 'Assignment Thiết kết trang web HTML5 & CSS3',
    language: 'HTML',
    price: '18',
  },

  {
    id: 3,
    img: 'https://techtually.sirv.com/WP_www.techtually.com/2020/09/Advantages-and-disadvantages-of-HTML.jpg',
    name: 'Assignment Thiết kết trang web HTML5 & CSS3',
    language: 'HTML',
    price: '18',
  },

  {
    id: 4,
    img: 'https://techtually.sirv.com/WP_www.techtually.com/2020/09/Advantages-and-disadvantages-of-HTML.jpg',
    name: 'Assignment Thiết kết trang web HTML5 & CSS3',
    language: 'HTML',
    price: '18',
  },
];
const Cart = () => {
  const handleCheckout = () => {};

  const CheckoutButton = () => {
    return (
      <TouchableOpacity
        style={styles.checkoutButton}
        activeOpacity={0.8}
        onPress={handleCheckout}>
        <Text style={styles.checkoutText}>Check Out</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Your cart</Text>
        <View style={styles.cartView}>
          {/* cart list  */}
          {React.Children.toArray(
            asignmentList.map((item, index) => {
              return (
                <View style={{marginBottom: 8}}>
                  <Pressable>
                    <CartAsignment
                      uri={item.img}
                      title={item.name}
                      price={item.price}
                    />
                  </Pressable>
                </View>
              );
            }),
          )}

          {/* coupon */}
          <View style={styles.couponView}>
            <TextInput
              style={styles.couponInput}
              placeholderTextColor={colors.gray}
              placeholder="Enter Cupon Code"
            />
            <Pressable style={styles.couponBtn}>
              <Text style={styles.couponApply}>Apply</Text>
            </Pressable>
          </View>
        </View>
        {/* result */}

        <View style={styles.resultView}>
          <View style={styles.rowResult}>
            <Text style={styles.resultLeft}>Items (3)</Text>
            <Text style={styles.resultRight}>$598.86</Text>
          </View>
          <View style={styles.rowResult}>
            <Text style={styles.resultLeft}>Shipping</Text>
            <Text style={styles.resultRight}>$40.00</Text>
          </View>
          <View style={styles.rowResult}>
            <Text style={styles.resultLeft}>Import charges</Text>
            <Text style={styles.resultRight}>$128.00</Text>
          </View>

          <View style={styles.priceView}>
            <Text style={styles.totalTitle}>Total Price</Text>
            <Text style={styles.totalValue}>$766.86</Text>
          </View>
        </View>
        <CheckoutButton />
      </ScrollView>
    </View>
  );
};

export default Cart;
