import React from 'react';
import PropTypes from 'prop-types';
import {Platform} from 'react-native';

import {connectStyle} from '../../theme/shoutem';
import mapPropsToStyleNames from '../../utils/mapPropsToStyleNames';
import {IconNB} from '../IconNB';

import ic from './NBIcons.json';

const IS_IOS = Platform.OS === 'ios';

function getName(props) {
  if (!props.type) {
    if (typeof ic[props.name] !== 'object') {
      return props.name;
    }
    let name;

    if (IS_IOS) {
      name = props.active
        ? ic[props.name].ios.active
        : ic[props.name].ios.default;
    } else {
      name = props.active
        ? ic[props.name].android.active
        : ic[props.name].android.default;
    }
    return name;
  }
  return props.name;
}

class Icon extends React.PureComponent {
  render() {
    let {ios, android} = this.props;

    if (ios && android) {
      return <IconNB {...this.props} name={IS_IOS ? ios : android} />;
    }
    return <IconNB {...this.props} name={getName(this.props)} />;
  }
}

Icon.propTypes = {
  ...IconNB.propTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array,
  ]),
  name: PropTypes.string,
  ios: PropTypes.string,
  android: PropTypes.string,
  active: PropTypes.bool,
  type: PropTypes.string,
};

const StyledIcon = connectStyle(
  'NativeBase.Icon',
  {},
  mapPropsToStyleNames,
)(Icon);

export {StyledIcon as Icon};
