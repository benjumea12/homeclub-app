import { StyleSheet } from 'react-native'
import { Colors } from '@/src/theme/theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
    backgroundColor: Colors.lightGrey2,
    height: 700,
  },
  form: {
    paddingVertical: 20,
    gap: 20,
  },
  texts: {
    paddingVertical: 20,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
  },
  error: {},
  actions: {},
})

export default styles
