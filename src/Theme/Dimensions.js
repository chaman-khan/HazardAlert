import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

export const scale = size => Math.round((width / guidelineBaseWidth) * size);

export const verticalScale = size =>
  Math.round((height / guidelineBaseHeight) * size);

export const moderateScale = (size, factor = 0.5) =>
  Math.round(size + (scale(size) - size) * factor);
