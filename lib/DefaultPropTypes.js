import { ViewPropTypes, ColorPropType } from 'react-native'
import PropTypes from 'prop-types'

const propTypes = {
  ...ViewPropTypes,
  source: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.number.isRequired,
  color: ColorPropType,
  scale: PropTypes.number,
  onLoadModelStart: PropTypes.func,
  onLoadModelSuccess: PropTypes.func,
  onLoadModelError: PropTypes.func
}

export default propTypes