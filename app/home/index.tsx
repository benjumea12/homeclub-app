import { useState, useEffect } from 'react'
import { View, ScrollView, ActivityIndicator } from 'react-native'
// Styles
import styles from '@/src/styles/pages/reservations.styles'
import { useTypedTranslation } from '@/src/translation/useTypedTranslation'

// Components
import { TextUI, ButtonUI, InputUI } from '@/src/components/ui'
import { HeaderTabs, Accordion, ReservationItem } from '@/src/components/blocks'
import { ModalPopup } from '@/src/components/wrappers'
// Libs
import { supabase } from '@/src/libs/initSupabase'

import { MotiView } from 'moti'

const Reservations = () => {
  const { t } = useTypedTranslation()

  const [reservations, setReservations] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  const getReservations = async () => {
    const { data, error } = await supabase.from('reservations').select('*')

    if (error) {
      console.error('Error fetching reservations:', error)
      return []
    }

    return data
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const reservations = await getReservations()
      console.log('reservations', reservations)

      setTimeout(() => {
        setReservations(reservations)
        setLoading(false)
      }, 500)
    }
    fetchData()
  }, [])

  return (
    <View style={styles.container}>
      <TextUI variant="h1">{t('reservations')}</TextUI>
      <ScrollView style={styles.scroll}>
        {loading && <ActivityIndicator />}
        <View style={styles.list}>
          {reservations.map((item, index) => (
            <MotiView
              key={index}
              from={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                delay: index * 100,
                type: 'timing',
                duration: 400,
              }}
            >
              <ReservationItem item={item} />
            </MotiView>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default Reservations
