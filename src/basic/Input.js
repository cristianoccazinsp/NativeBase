import React from 'react';
import PropTypes from 'prop-types';
import {TextInput} from 'react-native';

import {connectStyle} from '../theme/shoutem';
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
import variable from '../theme/variables/platform';

class Input extends React.Component {
  static contextTypes = {
    theme: PropTypes.object,
  };

  render() {
    const variables = this.context.theme
      ? this.context.theme['@@shoutem.theme/themeStyle'].variables
      : variable;
    return (
      <TextInput
        ref={(c) => {
          this._textInput = c;
          this._root = c;
        }}
        editable={!this.props.disabled}
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholderTextColor={
          this.props.placeholderTextColor
            ? this.props.placeholderTextColor
            : variables.inputColorPlaceholder
        }
        {...this.props}
      />
    );
  }
}

Input.propTypes = {
  ...TextInput.propTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array,
  ]),
};

const StyledInput = connectStyle(
  'NativeBase.Input',
  {},
  mapPropsToStyleNames,
)(Input);

export {StyledInput as Input};
