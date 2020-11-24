import { Theme } from './theme/shoutem';
import getThemeStyle from './theme/components';

export default function setDefaultThemeStyle() {
  const theme = getThemeStyle();
  Theme.setDefaultThemeStyle(theme);
}
