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
import axios from 'axios';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
//===import file
import {StoreContext} from '../hookContext/Store';
import {
  getDataUser,
  ErrorShow,
  add_my_favorite,
} from '../hookContext/actionCreator';
import {GetUserData, GetTemps} from '../Api/UserApi';

//=====>
const Icon_user = require('../assets/user_o.png');
const Icon_contact = require('../assets/contact.png');
const Icon_map = require('../assets/map.png');
const Icon_phone = require('../assets/phone.png');
const Icon_lock = require('../assets/lock.png');

//todo: END
const Main = () => {
  //todo: begin-set state
  const [state, dispatch] = useContext(StoreContext);
  const [user, setUser] = useState(state.user);
  const [values, setValues] = useState({
    active: false,
    index: 0,
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
    _getDataUser_api();
  }, []);

  async function _getDataUser_api() {
    // dispatch(getDataUser());
    const user_uri = 'https://randomuser.me/api/0.4/?randomapi';
    try {
      const res = await axios.get(user_uri);
      const {data} = await res;
      console.log(data);
      dispatch(getDataUser({data}));
    } catch (e) {
      setTemp('...');
      dispatch(ErrorShow('ERROR!'));
    }
    // alert('test');
  }

  function iconPress(index) {
    switch (index) {
      case 1:
        return setValues({
          ...values,
          index: index,
        });
      case 2:
        return setValues({
          ...values,
          index: index,
        });
      case 3:
        return setValues({
          ...values,
          index: index,
        });
      case 4:
        return setValues({
          ...values,
          index: index,
        });
      case 5:
        return setValues({
          ...values,
          index: index,
        });
      default:
        return setValues({...values});
    }
  }

  function _checkData() {
    console.log('Myfavorite');
    console.log(state.myFavorite);
  }
  function onSwipeLeft(gestureState) {
    // alert('onSwipeLeft');
    _getDataUser_api();
  }

  function onSwipeRight(gestureState) {
    const data = state.user;
    dispatch(add_my_favorite({data}));
  }

  function _add_favorite() {
    const data = state.user;
    dispatch(add_my_favorite({data}));
  }

  const _renderContent = () => {
    const data = state.myFavorite;
    return data.map(item => (
      <View
        key={item.id}
        style={{height: hp('8%'), margin: 5, flexDirection: 'row'}}>
        <Avatar.Image
          size={wp('10%')}
          // source={require('../assets/avatar.png')}AVATAR_SRC
          source={{uri: item.data.picture}}
          style={{marginRight: 5}}
        />
        <Text>usename :</Text>
        <Text>{item.data.username}</Text>
      </View>
    ));
  };
  //=todo: END FUNCTION
  const AVATAR_SRC = {
    uri: state.user.picture,
  };
  //todo: RENDER DATA
  const data =
    values.index === 1
      ? {
          title: 'My name is',
          content:
            state.user.name.title +
            '-' +
            state.user.name.first +
            ' ' +
            state.user.name.last,
          sub: state.user.gender,
        }
      : values.index === 2
      ? {
          title: 'My email is',
          content: state.user.email,
          sub: null,
        }
      : values.index === 3
      ? {
          title: 'My address is',
          content: state.user.location.street,
          sub: state.user.location.city,
        }
      : values.index === 4
      ? {
          title: 'My phone is',
          content: 'phone: ' + state.user.phone,
          sub: 'cellPhone: ' + state.user.cell,
        }
      : values.index === 5
      ? {
          title: 'My ...',
          content: null,
          sub: null,
        }
      : { title: null,
          content: null,
          sub: null,};

  //==todo: BEGIN RETURN
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  return (
    <GestureRecognizer
      style={styles.container}
      onSwipeLeft={onSwipeLeft}
      onSwipeRight={onSwipeRight}
      config={config}>
      <View style={styles.container}>
        <View style={styles.apbar} />
        <View style={styles.paper}>
          <Text style={{marginTop: hp('13%'), color: 'grey', fontSize: 18}}>
            {data.title}
          </Text>
          <Text style={{marginTop: 1, color: 'black', fontSize: 20}}>
            {data.content}
          </Text>
          <Text style={{marginTop: 1, color: 'grey', fontSize: 18}}>
            {data.sub}
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
                source={Icon_user}
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
                source={Icon_contact}
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
                source={Icon_map}
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
                source={Icon_phone}
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
                source={Icon_lock}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/*todo: RENDER-AVATAR*/}
        <Avatar.Image
          size={wp('45%')}
          // source={require('../assets/avatar.png')}AVATAR_SRC
          source={AVATAR_SRC}
          style={styles.avatar}
        />
        <View style={styles.paper}>
          <TouchableOpacity>
            <Text style={{color: 'red', fontSize: 20}}>My Favorites List</Text>
          </TouchableOpacity>
          <ScrollView style={{flex: 1}}>{_renderContent()}</ScrollView>
        </View>
      </View>
    </GestureRecognizer>
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
    top: hp('4%'),
    left: wp('30%'),
    right: wp('50%'),
    overflow: 'hidden',
  },
  tabIcon: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: hp('10%'),
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
    width: wp('10%'),
    height: wp('10%'),
    resizeMode: 'contain',
  },
});

export default Main;
