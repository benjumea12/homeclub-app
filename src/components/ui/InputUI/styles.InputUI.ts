import { StyleSheet } from 'react-native'
// Theme
import { Colors } from '@/src/theme/theme'

export const styles = StyleSheet.create({
  contain: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.black,
    position: 'relative',
    paddingBottom: 10,
  },
  inputContain: {},
  input: {
    fontSize: 22,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  secureTextButton: {
    position: 'absolute',
    right: 0,
    bottom: 10,
  },
})
