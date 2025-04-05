import { View } from 'react-native'
import { Slot } from 'expo-router'
// Components
import { HeaderPage } from '@/src/components/blocks'
// Styles
import styles from '@/src/styles/layouts/start-layout.styles'

const StartLayout = () => {
  return (
    <View style={styles._layout}>
      <HeaderPage />

      <View style={styles._appContainer}>
        <Slot />
      </View>
    </View>
  )
}

export default StartLayout
