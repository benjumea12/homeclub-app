import { StyleSheet, Dimensions } from 'react-native'
// Theme
import { Colors } from '@/src/theme/theme'

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    zIndex: 10000,
    justifyContent: 'center',
    height: screenHeight,
    width: screenWidth,
  },
  backdropSafe: {
    height: screenHeight * 0.5,
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  backdrop: {
    backgroundColor: Colors.backdrop,
    position: 'absolute',
    height: '100%',
    width: '100%',
    left: 0,
    top: 0,
  },
  close: {
    position: 'absolute',
    right: 5,
    top: 5,
    zIndex: 2,
    padding: 5,
  },
  content: {
    backgroundColor: Colors.white,
    paddingHorizontal: 18,
    paddingVertical: 20,
    position: 'relative',
    marginHorizontal: 20,
  },
  children: {},
})
