import { View } from 'react-native'
// Styles
import { styles } from './styles.SeparatorUI'
// Theme
import { TColors, getColor } from '@/src/theme/theme'

interface ISeparatorUI {
  color?: TColors
}

const SeparatorUI = (props: ISeparatorUI) => {
  const { color = 'gray2' } = props
  return (
    <View
      style={[
        styles.contain,
        {
          backgroundColor: getColor(color),
        },
      ]}
    ></View>
  )
}

export default SeparatorUI
