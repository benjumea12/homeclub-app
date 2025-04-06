import { View } from 'react-native'
import { useTypedTranslation } from '@/src/translation/useTypedTranslation'
// Styles
import { styles } from './styles.CheckIn'
// Components
import {
  TextUI,
  ButtonUI,
  InputUI,
  DatePickerUI,
  SelectUI,
} from '@/src/components/ui'

const CheckIn = () => {
  const { t } = useTypedTranslation()

  return (
    <View style={styles.contain}>
      <TextUI variant="h2" transform="uppercase">
        {t('check - in')}
      </TextUI>
      <View style={styles.form}>
        <DatePickerUI placeholder={t('check-in date')} />
        <DatePickerUI placeholder={t('check-in time')} />
      </View>
      <View style={styles.texts}>
        <TextUI variant="body1">
          Lorem ipsum dolor sit amet consectetur adipiscing elit himenaeos
          sociosqu, lacus nisl sapien arcu scelerisque pellentesque metus.
        </TextUI>
      </View>
      <View style={styles.actions}>
        <ButtonUI title={t('save')} size="large" />
      </View>

      <View style={styles.texts}>
        <TextUI variant="body1">
          Nisi at vivamus ornare viverra dapibus natoque rutrum curabitur
          molestie curae fames.
        </TextUI>
      </View>
    </View>
  )
}

export default CheckIn
