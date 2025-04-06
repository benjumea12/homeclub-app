import { View } from 'react-native'
import { useTypedTranslation } from '@/src/translation/useTypedTranslation'
// Styles
import { styles } from './styles.PersonalInformation'
// Components
import {
  TextUI,
  ButtonUI,
  InputUI,
  DatePickerUI,
  SelectUI,
} from '@/src/components/ui'

const PersonalInformation = () => {
  const { t } = useTypedTranslation()

  return (
    <View style={styles.contain}>
      <TextUI variant="h2" transform="uppercase">
        {t('personal data')}
      </TextUI>
      <View style={styles.form}>
        <InputUI placeholder={t('email')} />
        <InputUI placeholder={t('last names')} />
        <InputUI placeholder={t('type of document')} />
        <DatePickerUI placeholder={t('birthdate')} />
        <SelectUI />
      </View>
      <View style={styles.actions}>
        <ButtonUI title={t('save')} size="large" />
      </View>
    </View>
  )
}

export default PersonalInformation
