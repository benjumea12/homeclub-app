import { View } from 'react-native'
// Components
import { LogoUI } from '@/src/components/ui'
// Styles
import { styles } from './styles.HeaderPage'

const HeaderPage = () => {
  return (
    <View style={styles.header}>
      <LogoUI size={200} />
    </View>
  )
}

export default HeaderPage
