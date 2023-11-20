import {moderateScale} from './Dimensions';

export default Theme = {
  colors: {
    primary: '#C03D29',
    secondary: '#1F1F29',
    heading: '#333333',
    description: '#858585',
  },
  fontFamily: {
    regular: 'Ubuntu-Regular',
    medium: 'Ubuntu-Medium',
    bold: 'Ubuntu-Bold',
  },
  fontSizes: {
    xxbig: moderateScale(34),
    xbig: moderateScale(26),
    big: moderateScale(22),
    xxmedium: moderateScale(19),
    xmedium: moderateScale(17),
    medium: moderateScale(15),
    small: moderateScale(13),
    verySmall: moderateScale(11),
    tinySmall: moderateScale(9),
  },
};
