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
  inputContain: {
    position: 'relative',
  },
  input: {
    fontSize: 22,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  overlay: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    left: 0,
    top: 0,
    zIndex: 2,
  },
  secureTextButton: {
    position: 'absolute',
    right: 0,
    bottom: 10,
  },
  options: {
    padding: 10,
  },
  option: {
    marginHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGrey2,
  },
  actions: {
    paddingHorizontal: 0,
    paddingBottom: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
})
