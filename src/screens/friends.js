
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addFriend} from '../redux/actions'
class FriendScreen extends React.Component{
  render(){
      console.log('friends page' ,this.props.friends.friends.possible)
    return(
      <View style={styles.container}>
        <Text> Add friends here! </Text>
        {
          this.props.friends.friends.possible.map((friend, index) => (
            <Button
              key={ friend }
              title={ `Add ${ friend }` }
              onPress={() =>
                this.props.addFriend(index)
              }
            />
          )
        )
        }
        <Button
          title="Back to home"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />
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
const mapDispatchToProps = dispatch => (
    bindActionCreators({
      addFriend,
    }, dispatch)
)
export default connect (mapStateToProps, mapDispatchToProps) (FriendScreen)