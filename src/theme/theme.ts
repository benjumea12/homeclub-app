export const Colors = {
  black: '#000000',
  white: '#ffffff',
  grey: '#929292',
  lightGrey: '#c9c9c9',
  lightGrey2: '#f2f2f2',
  redDanger: '#cc1313',
  redLight: '#ffecec',
  blue: '#4a809d',
  blueLight: '#e4f5fd',
  greenDark: '#046974',
  greenLight: '#defff9',
  backdrop: 'rgba(0,0,0,0.5)',
}

export type TFonts = 'Editorial-New' | 'Neue-Montreal'

export type TColors = keyof typeof Colors

export const getColor = (color: TColors) => Colors[color]
