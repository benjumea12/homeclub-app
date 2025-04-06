import { StyleSheet } from 'react-native'
// Theme
import { Colors } from '@/src/theme'

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  tabsContent: {
    borderTopWidth: 1,
    borderTopColor: Colors.grey,
    paddingVertical: 30,
    paddingBottom: 0,
  },
  pageContent: {
    flex: 1,
  },
})

export default styles
