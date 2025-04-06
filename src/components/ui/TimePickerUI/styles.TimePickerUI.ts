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
  picker: {
    alignItems: 'center',
    position: 'relative',
  },
  actions: {
    position: 'absolute',
    right: 10,
    bottom: 10,

    //   width: '100%',
    //   paddingHorizontal: 10,
    //   paddingBottom: 10,
    //   display: 'flex',
    //   flexDirection: 'row',
    //   justifyContent: 'flex-end',
    // },
  },
})
