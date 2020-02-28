
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import {connect} from 'react-redux'
class HomeScreen extends React.Component{
    
  render(){
      console.log('props in home screen ',this.props.friends.friends.current);
      const currentProps = this.props.friends.friends.current
    return(
      <View style={styles.container}>
        <Text>we have {currentProps.length} Friend !</Text>
        <Button title='Add some Friends' onPress={() => this.props.navigation.navigate('Friend')} />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  textStyle: {
    fontSize: 16
  }
})

const mapStateToProps = (state) => {
    return {
        friends: state
    }
}
export default connect (mapStateToProps) (HomeScreen)