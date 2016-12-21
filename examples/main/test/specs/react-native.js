import React, {
    View,
    Text,
    StyleSheet
} from 'react-native'
import savor from '../../../..'
import BasicComponent from '../assets/react-native/BasicComponent'

const TestText = (<Text>test</Text>)
const TestComponent = (<BasicComponent/> )

savor.add('should mount a React Native component', function(context, done) {
  const wrapper = context.shallow(TestComponent)
  context.expect(wrapper.length).to.equal(1)
  context.expect(wrapper).to.contain(TestText)
  done()
}).

run('React Native Tests')
