import { StyleSheet } from 'react-native'
// Theme
import { Colors } from '@/src/theme/theme'

export const styles = StyleSheet.create({
  box: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
  },
  selected: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.black,
  },
})
