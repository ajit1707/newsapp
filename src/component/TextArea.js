import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';

export default class TextArea extends Component {
    render() {
        return (
            <TextInput
                ref={this.props.textAreaRef}
                {...this.props}
                placeholderTextColor="#CBCBCB"
                style={{
                    maxHeight: 100,
                    color: '#000',
                    fontSize: 16,
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingRight: 10,
                    paddingLeft: 10,
                    backgroundColor: '#F4F4F4',
                  }}
                autoCapitalize="none"
                underlineColorAndroid="transparent"
                multiline
            />
        );
    }
}

TextArea.propTypes = {
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
};