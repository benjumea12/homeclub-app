import { StyleSheet } from 'react-native'
// Theme
import { Colors } from '@/src/theme/theme'

export const styles = StyleSheet.create({
  contain: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGrey,
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  animate: {
    height: 0,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
  },
  indicator: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: '100%',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {},
})
