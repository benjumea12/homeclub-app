import { useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
// Styles
import styles from '@/src/styles/pages/home.styles'
import { useTypedTranslation } from '@/src/translation/useTypedTranslation'

// Components
import { TextUI, ButtonUI } from '@/src/components/ui'
import { HeaderTabs, Accordion } from '@/src/components/blocks'
import { ModalPopup } from '@/src/components/wrappers'

const Index = () => {
  const { t } = useTypedTranslation()

  return (
    <View style={styles.container}>
      <Accordion />
    </View>
  )
}

export default Index
