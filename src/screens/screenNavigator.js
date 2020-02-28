import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './home';
import FriendScreen from './friends';

const stackRoot = createStackNavigator(
    {
        Home: HomeScreen,
        Friend: FriendScreen
    },
    {
        initialRouteName: 'Home'

    })

export default stackRoot
