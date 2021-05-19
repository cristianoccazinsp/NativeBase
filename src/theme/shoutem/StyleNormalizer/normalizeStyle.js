import _ from 'lodash';
import StyleNormalizer from './StyleNormalizer';

const styleNormalizer = new StyleNormalizer();

/**
 * Normalize style properties shorthands.
 *
 * @param style
 * @returns {*}
 */
export default function normalizeStyle(style) {
  return _.reduce(
    style,
    (normalizedStyle, val, prop) => {
      if (_.isPlainObject(val)) {
        normalizedStyle[prop] = normalizeStyle(val);
      } else if (styleNormalizer.canNormalize(prop)) {
        normalizedStyle = {
          ...normalizedStyle,
          ...styleNormalizer.normalize(prop, val),
        };
      } else {
        normalizedStyle[prop] = val;
      }

      return normalizedStyle;
    },
    {},
  );
}
