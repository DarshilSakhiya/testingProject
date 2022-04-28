import React from 'react';
import {View, Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Mydiary from '../Mydiary/Mydiary';
import Profile from '../Profile/Profile';
import Daiting from '../Daiting/Daiting';
import Training from '../Training/Training';
import Post from '../Post/Post';
import 'react-native-gesture-handler'
const Tab = createBottomTabNavigator();
const Home = () => {

  return (
    <Tab.Navigator screenOptions={{
      headerShown: false, 
      tabBarStyle: {
      borderTopLeftRadius: 30, 
      borderTopRightRadius: 30, 
      position: 'absolute', 
      bottom: 1,  
      height: 80, 
      backgroundColor: 'white',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,
      elevation: 8}}}
      tabBarOptions={{showLabel: false }}>
    <Tab.Screen name="My Diary" component={Mydiary} 
    options={{tabBarIcon: ({focused}) => (
      <View>
      <Image
      source={require('../../assets/diary.png')}
      resizeMode='contain'
      style={{width:25,height:25,tintColor:focused? '#5730c2':'black'}}
      ></Image>
   </View>
    
    ),}}/>
    <Tab.Screen name="Training" component={Training} 
    options={{tabBarIcon: ({focused}) => (
      <View>
      <Image
      source={require('../../assets/shoes.png')}
      resizeMode='contain'
      style={{width:25,height:25,tintColor:focused? '#5730c2':'black'}}
      ></Image>
   </View>
    
    )}}/>
     <Tab.Screen name="Post" component={Post}
     options={{tabBarIcon: ({focused}) => (
       <View>
            {/* <View style={{ backgroundColor: '#f2f2f2',padding:20}}></View> */}
            <View style={{backgroundColor: '#f2f2f2',shadowColor: "#000000",
            top:-15,
            paddingHorizontal:10,
            borderBottomLeftRadius:100,
            borderBottomRightRadius:100,
              }}>
              <Image
              source={require('../../assets/plus.png')}
              resizeMode='contain'
              style={{width:50,height:50,tintColor:focused? '#5730c2':'#5730c2', top: -13}}
              ></Image>
            </View>
       </View>
      
    
    ),}}/>
    <Tab.Screen name="Daiting" component={Daiting} 
    options={{tabBarIcon: ({focused}) => (
      <View>
      <Image
      source={require('../../assets/apple.png')}
      resizeMode='contain'
      style={{width:25,height:25,tintColor:focused? '#5730c2':'black'}}
      ></Image>
   </View>
    
    ),}}/>
    <Tab.Screen name="Profile" component={Profile} 
    options={{tabBarIcon: ({focused}) => (
      <View>
      <Image
      source={require('../../assets/user.png')}
      resizeMode='contain'
      style={{width:25,height:25,tintColor:focused? '#5730c2':'black'}}
      ></Image>
   </View>
    
    ),}}/>
  </Tab.Navigator>
  )
}

export default Home;