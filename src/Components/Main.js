/**
 thuantv-begin:6/9/2019
 detail: App test PYCO
 this is Main component
 */

import React, {Component, useState, useEffect, useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';

// == libs import
import {Avatar} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
//===import file
import {StoreContext} from '../hookContext/Store';
import {getDataUser, ErrorShow} from '../hookContext/actionCreator';
import {GetUserData} from '../Api/UserApi';

//=====>
const ImageSrc = require('../assets/home.png');

//todo: END
const Main = () => {
  //todo: begin-set state
  const [state, dispatch] = useContext(StoreContext);
  const [values, setValues] = useState({
    active: false,
    index: 3,
    title: null,
    content: null,
  });
  const [temp, setTemp] = useState('...');

  const ACTIVE_COLOR = 'green';
  const inACTIVE_COLOR = 'grey';
  const ICON_1 =
    values.index === 1
      ? {color: ACTIVE_COLOR, borderTopWidth: 2}
      : {color: inACTIVE_COLOR, borderTopWidth: 0};
  const ICON_2 =
    values.index === 2
      ? {color: ACTIVE_COLOR, borderTopWidth: 2}
      : {color: inACTIVE_COLOR, borderTopWidth: 0};
  const ICON_3 =
    values.index === 3
      ? {color: ACTIVE_COLOR, borderTopWidth: 2}
      : {color: inACTIVE_COLOR, borderTopWidth: 0};
  const ICON_4 =
    values.index === 4
      ? {color: ACTIVE_COLOR, borderTopWidth: 2}
      : {color: inACTIVE_COLOR, borderTopWidth: 0};
  const ICON_5 =
    values.index === 5
      ? {color: ACTIVE_COLOR, borderTopWidth: 2}
      : {color: inACTIVE_COLOR, borderTopWidth: 0};

  //todo: BEGIN functions

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
    dispatch(getDataUser());
  }, [dispatch]);

  function _pressMe() {
    // dispatch(getDataUser());
    let cityName = 'saigon';
    GetUserData()
      .then(_temp => {
        setTemp(_temp);
        dispatch(getDataUser(_temp));
      })
      .catch(err => {
        setTemp('...');
        dispatch(ErrorShow('ERROR!'));
      });

    // alert('test');
  }

  function iconPress(index) {
    switch (index) {
      case 1:
        return setValues({
          ...values,
          index: index,
          title: 'index 1',
          content: 'content 1',
        });
      case 2:
        return setValues({
          ...values,
          index: index,
          title: 'index 2',
          content: 'content 2',
        });
      case 3:
        return setValues({
          ...values,
          index: index,
          title: 'index 3',
          content: 'content 3',
        });
      case 4:
        return setValues({
          ...values,
          index: index,
          title: 'index 4',
          content: 'content 4',
        });
      case 5:
        return setValues({
          ...values,
          index: index,
          title: 'index 5',
          content: 'content 5',
        });
      default:
        return setValues({...values});
    }
  }

  //=todo: END FUNCTION
  return (
    <View style={styles.container}>
      <View style={styles.apbar} />
      <View style={styles.paper}>
        <Text style={{marginTop: 100, color: 'grey', fontSize: 18}}>
          {values.title}
        </Text>
        <Text style={{marginTop: 5, color: 'black', fontSize: 24}}>
          {values.content}
        </Text>
        <View style={styles.tabIcon}>
          {/*ICON 1*/}
          <TouchableOpacity
            style={[
              styles.iconContain,
              {
                borderTopWidth: ICON_1.borderTopWidth,
                borderColor: ICON_1.color,
              },
            ]}
            onPress={() => iconPress(1)}>
            <Image
              style={[
                styles.iconImage,
                {
                  tintColor: ICON_1.color,
                },
              ]}
              source={ImageSrc}
            />
          </TouchableOpacity>

          {/*ICON 2*/}
          <TouchableOpacity
            style={[
              styles.iconContain,
              {
                borderTopWidth: ICON_2.borderTopWidth,
                borderColor: ICON_2.color,
              },
            ]}
            onPress={() => iconPress(2)}>
            <Image
              style={[
                styles.iconImage,
                {
                  tintColor: ICON_2.color,
                },
              ]}
              source={ImageSrc}
            />
          </TouchableOpacity>
          {/*ICON 3*/}
          <TouchableOpacity
            style={[
              styles.iconContain,
              {
                borderTopWidth: ICON_3.borderTopWidth,
                borderColor: ICON_3.color,
              },
            ]}
            onPress={() => iconPress(3)}>
            <Image
              style={[
                styles.iconImage,
                {
                  tintColor: ICON_3.color,
                },
              ]}
              source={ImageSrc}
            />
          </TouchableOpacity>
          {/*ICON 4*/}
          <TouchableOpacity
            style={[
              styles.iconContain,
              {
                borderTopWidth: ICON_4.borderTopWidth,
                borderColor: ICON_4.color,
              },
            ]}
            onPress={() => iconPress(4)}>
            <Image
              style={[
                styles.iconImage,
                {
                  tintColor: ICON_4.color,
                },
              ]}
              source={ImageSrc}
            />
          </TouchableOpacity>
          {/*ICON 5*/}
          <TouchableOpacity
            style={[
              styles.iconContain,
              {
                borderTopWidth: ICON_5.borderTopWidth,
                borderColor: ICON_5.color,
              },
            ]}
            onPress={() => iconPress(5)}>
            <Image
              style={[
                styles.iconImage,
                {
                  tintColor: ICON_5.color,
                },
              ]}
              source={ImageSrc}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Avatar.Image
        size={200}
        source={require('../assets/avatar.png')}
        style={styles.avatar}
      />
      <View style={styles.paper}>
        <Text style={{color: 'black'}}>{`state itest ${state.isTest}`}</Text>
        <Text style={{color: 'black'}}>{state.temp}</Text>
        <TouchableOpacity onPress={() => _pressMe()}>
          <Text>PRESS ME !</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'grey',
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default Main;
