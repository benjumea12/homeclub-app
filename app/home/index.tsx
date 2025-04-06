import { useState } from 'react'
import { View, ScrollView } from 'react-native'
// Styles
import styles from '@/src/styles/pages/reservations.styles'
import { useTypedTranslation } from '@/src/translation/useTypedTranslation'

// Components
import { TextUI, ButtonUI, InputUI } from '@/src/components/ui'
import { HeaderTabs, Accordion, ReservationItem } from '@/src/components/blocks'
import { ModalPopup } from '@/src/components/wrappers'

const Reservations = () => {
  const { t } = useTypedTranslation()

  const items = [
    {
      title: 'Item 1',
      content: 'Content 1',
    },
    {
      title: 'Item 2',
      content: 'Content 2',
    },
    {
      title: 'Item 3',
      content: 'Content 3',
    },
    {
      title: 'Item 3',
      content: 'Content 3',
    },
    {
      title: 'Item 3',
      content: 'Content 3',
    },
    {
      title: 'Item 3',
      content: 'Content 3',
    },
  ]

  return (
    <View style={styles.container}>
      <TextUI variant="h1">{t('reservations')}</TextUI>
      <ScrollView style={styles.scroll}>
        <View style={styles.list}>
          {items.map((item, index) => (
            <ReservationItem key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default Reservations
