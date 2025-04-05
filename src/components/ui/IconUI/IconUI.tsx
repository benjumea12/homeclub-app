// Theme
import { getColor, TColors } from '@/src/theme'
// Icons
import { iconsAssets } from './assets/icons.assets'

export type IconUINames = keyof typeof iconsAssets

interface Props {
  name: IconUINames
  color?: TColors
  size?: number
}

const Blank = (props: Props) => {
  const { name, color = 'black', size = 24 } = props
  return iconsAssets[name]({
    color: getColor(color),
    size,
  })
}

export default Blank
