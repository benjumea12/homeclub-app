import { TouchableOpacity } from 'react-native'
// Styles
import { styles } from './styles.TabItem'
// Components
import { TextUI } from '@/src/components/ui'

interface Props {
  item: {
    title: string
    path: string
  }
  onPress: (path: string) => void
}

const TabItem = (props: Props) => {
  const { item, onPress } = props

  return (
    <TouchableOpacity style={styles.box} onPress={() => onPress(item.path)}>
      <TextUI variant="h2">{item.title}</TextUI>
    </TouchableOpacity>
  )
}

export default TabItem
