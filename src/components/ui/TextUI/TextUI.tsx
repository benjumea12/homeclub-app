import { Fragment } from 'react'
import { Text } from 'react-native'
// Styles
import { styles_variants } from './styles.TextUI'
// Theme
import { TColors, TFonts, getColor } from '@/src/theme/theme'

export type Variant = keyof typeof styles_variants

interface Props {
  children: string | number
  color?: TColors
  variant?: Variant
  align?: 'left' | 'center' | 'right' | 'justify'
  transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'sentenceCase'
  font?: TFonts
  bold?: boolean
  size?: number
  decoration?: 'none' | 'underline' | 'line-through'
}

const Typography = (props: Props) => {
  const {
    children,
    color = 'black',
    variant = 'body1',
    align = 'left',
    transform = 'sentenceCase',
    font = 'Neue-Montreal',
    bold,
    size,
    decoration = 'none',
  } = props

  const transformText = (text: string) => {
    switch (transform) {
      case 'capitalize':
        return text.toUpperCase()
      case 'uppercase':
        return text.toUpperCase()
      case 'lowercase':
        return text.toLowerCase()

      case 'sentenceCase':
        const firstLetterIndex = text.search(/[a-zA-Z]/)
        if (firstLetterIndex !== -1) {
          return (
            text.slice(0, firstLetterIndex) +
            text.charAt(firstLetterIndex).toUpperCase() +
            text.slice(firstLetterIndex + 1).toLowerCase()
          )
        }
        return text
      default:
        return text
    }
  }

  return (
    <Fragment>
      <Text
        style={[
          {
            color: getColor(color),
            textAlign: align,
            fontFamily: font,
            fontWeight: bold ? '500' : '300',
            textDecorationLine: decoration,
          },
          size
            ? {
                fontSize: size,
              }
            : styles_variants?.[variant],
        ]}
      >
        {transformText(children.toString())}
      </Text>
    </Fragment>
  )
}

export default Typography
