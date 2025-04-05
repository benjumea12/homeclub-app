import { useState } from 'react'
import { View, ScrollView } from 'react-native'
// Styles
import styles from '@/src/styles/pages/start.styles'
import { useTranslation } from 'react-i18next'
// Components
import { LogoUI, TextUI, ButtonUI } from '@/src/components/ui'
import { HeaderTabs, Accordion } from '@/src/components/blocks'
import { ModalPopup } from '@/src/components/wrappers'

const Index = () => {
  const { t } = useTranslation()

  const modalPopupStore = ModalPopup.useStore()

  const openModal = () => {
    modalPopupStore.open(
      t('find a plan'),
      <View style={{ padding: 20 }}>
        <TextUI font="Neue-Montreal" align="center" variant="h1">
          Modal Popup Example
        </TextUI>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <HeaderTabs />
        <LogoUI />
        <TextUI font="Editorial-New" variant="h1">
          Your Way Of Living
        </TextUI>
        <TextUI font="Neue-Montreal" variant="h1">
          Your Way Of Living
        </TextUI>
        <TextUI font="Neue-Montreal" bold variant="h1">
          Your Way Of Living
        </TextUI>

        <View style={{ flexDirection: 'row', gap: 10 }}>
          <ButtonUI title="Button" size="small" />
          <ButtonUI title="Button" size="medium" />
          <ButtonUI title="Button" size="large" />
        </View>

        <View style={{ flexDirection: 'row', gap: 10 }}>
          <ButtonUI title="Modal" size="large" onPress={openModal} />
        </View>

        <Accordion />
      </ScrollView>
    </View>
  )
}

export default Index
