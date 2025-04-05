import { StyleSheet } from 'react-native'
import { Colors } from '@/src/theme/theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userTypes: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    marginBottom: 50,
  },
  content: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    backgroundColor: Colors.lightGrey2,
  },
  formContain: {
    gap: 20,
    marginBottom: 50,
  },
  restorePassword: {
    flexDirection: 'row',
    gap: 5,
    marginTop: 30,
  },
  formActions: {},
})

export default styles
