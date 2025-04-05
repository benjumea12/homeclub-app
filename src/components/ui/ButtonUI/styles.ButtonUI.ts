import { StyleSheet } from 'react-native'
// Theme
import { Colors } from '@/src/theme/theme'

export const styles = StyleSheet.create({
  contain: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderRadius: 8,
  },
  iconLeft: {
    paddingLeft: 18,
    paddingRight: 22,
  },
  iconRight: {
    paddingLeft: 22,
    paddingRight: 18,
  },
})

export const sizes = StyleSheet.create({
  small: {
    height: 30,
    paddingHorizontal: 14,
  },
  medium: {
    height: 40,
    paddingHorizontal: 16,
  },
  large: {
    height: 46,
    paddingHorizontal: 18,
  },
})
