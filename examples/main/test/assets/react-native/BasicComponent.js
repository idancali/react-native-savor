import React from 'react'
import {
  StyleSheet,
  PropTypes,
  View,
  Text,
} from 'react-native'

export default class BasicComponent extends React.Component {
  render() {
    return (
      <View>
        <Text>test</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
})
