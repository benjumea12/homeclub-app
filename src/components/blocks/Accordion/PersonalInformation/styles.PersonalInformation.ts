import { StyleSheet } from 'react-native'
// Theme
import { Colors } from '@/src/theme/theme'

export const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: Colors.lightGrey2,
    padding: 20,
  },
  form: {
    paddingVertical: 20,
    gap: 20,
  },
  actions: {
    marginTop: 20,
  },
  error: {},
})
