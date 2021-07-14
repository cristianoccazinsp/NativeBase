import * as _ from 'lodash';

export default function mergeComponentAndThemeStyles(
  componentStyle,
  themeComponentStyle,
  themeStyle,
) {
  const componentThemedStyle = Object.assign(
    {},
    componentStyle,
    themeComponentStyle,
  );

  // Picking only required root theme style, used by component.
  // We do not want to merge whole theme to component style.
  const intersectedRootThemeStyle = _.pick(
    themeStyle,
    Object.keys(componentThemedStyle),
  );

  // Merging only common style, not all theme style with component style
  return Object.assign({}, intersectedRootThemeStyle, componentThemedStyle);
}
