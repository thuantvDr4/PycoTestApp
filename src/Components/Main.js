/**
 thuantv-begin:6/9/2019
 detail: App test PYCO
 this is Main component
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
// == libs import
import {Avatar} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
//===

//todo: END
const Main = () => {
  return (
    <View style={styles.container}>
      <View style={styles.apbar} />
      <View style={styles.paper}>
        <Text style={{marginTop: 100, color: 'grey', fontSize: 18}}>
          My address is
        </Text>
        <Text style={{marginTop: 5, color: 'black', fontSize: 24}}>
          My address is
        </Text>
        <View style={styles.tabIcon}>
          <TouchableOpacity style={styles.iconContain}>
            <Text>tab1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContain}>
            <Text>tab1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContain}>
            <Text>tab1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContain}>
            <Text>tab1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContain}>
            <Text>tab1</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Avatar.Image
        size={200}
        source={require('../assets/avatar.png')}
        style={styles.avatar}
      />
      <View style={styles.paper} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  apbar: {
    flex: 1,
  },
  paper: {
    flex: 2,
    backgroundColor: '#ffffff',
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  avatar: {
    position: 'absolute',
    top: 50,
    left: wp('30%'),
    right: wp('50%'),
    overflow: 'hidden',
  },
  tabIcon: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 80,
    marginHorizontal: 50,
  },
  iconContain: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: 'grey',
  },
});

export default Main;
