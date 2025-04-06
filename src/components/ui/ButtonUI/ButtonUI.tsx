import { useState } from 'react'
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
// Components
import TextUI from '../TextUI'
import IconUI, { IconUINames } from '../IconUI'
// Theme
import { TColors, Colors } from '@/src/theme'
// Styles
import { styles, sizes } from './styles.ButtonUI'

interface IButtonUI {
  title: string
  size?: 'small' | 'medium' | 'large'
}

const ButtonUI = (props: IButtonUI & TouchableOpacityProps) => {
  const { title, size = 'medium' } = props

  const textSizes = {
    small: 16,
    medium: 18,
    large: 22,
  }

  const [color, setColor] = useState<TColors>('black')
  const [colorText, setColorText] = useState<TColors>('white')

  return (
    <TouchableOpacity
      {...props}
      style={[styles.contain, sizes[size], { backgroundColor: Colors.black }]}
    >
      <TextUI size={textSizes[size]} color={colorText}>
        {title}
      </TextUI>
    </TouchableOpacity>
  )
}

export default ButtonUI
