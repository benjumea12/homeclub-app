import { StyleSheet } from 'react-native'
// Theme
import { Colors } from '@/src/theme/theme'

export const styles = StyleSheet.create({
  contain: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.black,
    height: 140,
    borderRadius: 10,
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
  },
  imageContain: {},
  image: {
    height: '100%',
    aspectRatio: 1,
    borderRadius: 6,
  },
  content: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    justifyContent: 'space-between',
  },
  list: {
    marginTop: 10,
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  status: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 3,
    marginBottom: 5,
  },
})
