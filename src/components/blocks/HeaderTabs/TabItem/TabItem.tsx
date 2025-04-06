import { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
// Styles
import { styles } from './styles.TabItem'
// Components
import { TextUI } from '@/src/components/ui'
import { usePathname } from 'expo-router'

interface Props {
  item: {
    title: string
    path: string
  }
  onPress: (path: string) => void
}

const TabItem = (props: Props) => {
  const { item, onPress } = props

  const [selected, setSelected] = useState(false)

  const pathname = usePathname()

  useEffect(() => {
    setSelected(pathname === item.path)
  }, [pathname])

  return (
    <TouchableOpacity
      style={[styles.box, selected && styles.selected]}
      onPress={() => onPress(item.path)}
    >
      <TextUI variant="h2" bold={selected}>
        {item.title}
      </TextUI>
    </TouchableOpacity>
  )
}

export default TabItem
