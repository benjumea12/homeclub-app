import { StyleSheet } from 'react-native'
import { Colors } from '@/src/theme/theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGrey2,
    padding: 20,
    marginTop: 30,
  },
  scroll: {
    marginTop: 20,
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    minHeight: 700,
  },
})

export default styles
