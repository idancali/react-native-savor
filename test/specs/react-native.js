import React, {
    View,
    Text,
    StyleSheet
} from 'react-native'
import savor from '../..'
import {
    expect
} from 'chai'
import {
    shallow
} from 'enzyme'
import BasicComponent from '../assets/react-native/BasicComponent'

const TestText = (<Text>test</Text>)
const TestComponent = (<BasicComponent/> )

  describe("React Native Tests", () => {
    beforeEach(function(done) {
        done();
    });

    afterEach(function(done) {
        savor.reset();
        done();
    });

    it("should be able to mount a React Native component", function(done) {
        const wrapper = shallow(TestComponent)
        expect(wrapper.length).to.equal(1)
        expect(wrapper).to.contain(TestText)

        // expect(wrapper.contains(TestText)).to.equal(true)
        done()
    });
});
