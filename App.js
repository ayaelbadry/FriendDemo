/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createAppContainer } from 'react-navigation'
import stackRoot from './src/screens/screenNavigator'
import {Provider} from 'react-redux'
import store from './src/redux/store'

const AppContainer = createAppContainer(stackRoot)

export default class App extends React.Component{
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <Provider store={store}>
      <AppContainer />
      </Provider>
    )
  }
}
