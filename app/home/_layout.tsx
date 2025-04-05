import { View } from 'react-native'
import { Slot } from 'expo-router'
// Components
import { HeaderPage } from '@/src/components/blocks'
import { HeaderTabs } from '@/src/components/blocks'

// Styles
import styles from '@/src/styles/layouts/home-layout.styles'

const StartLayout = () => {
  return (
    <View style={styles.layout}>
      <HeaderPage />

      <View style={styles.tabsContent}>
        <HeaderTabs />
      </View>

      <View style={styles.pageContent}>
        <Slot />
      </View>
    </View>
  )
}

export default StartLayout
