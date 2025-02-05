import './constaMyStyle/Theme.css';
import './constaMyStyle/Theme_color_gpnDefault.css';
import './constaMyStyle/Theme_color_gpnDark.css';
import './constaMyStyle/Theme_control_gpnDefault.css';
import './constaMyStyle/Theme_font_gpnDefault.css';
import './constaMyStyle/Theme_size_gpnDefault.css';
import './constaMyStyle/Theme_space_gpnDefault.css';
import './constaMyStyle/Theme_shadow_gpnDefault.css';
import './constaMyStyle/Theme_color_gpnDark.css';

import { ThemePreset } from '@consta/uikit/Theme';

export const myPreset: ThemePreset = {
  color: {
    primary: 'myDefault',
    accent: 'myDark',
    invert: 'myDark',
  },
  control: 'myDefault',
  font: 'myDefault',
  size: 'myDefault',
  space: 'myDefault',
  shadow: 'myDefault',
};
