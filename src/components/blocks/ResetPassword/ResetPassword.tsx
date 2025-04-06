import { View } from 'react-native'
// Styles
import { styles } from './styles.ResetPassword'
// Components
import { TextUI, InputUI, ButtonUI } from '@/src/components/ui'
import { useTypedTranslation } from '@/src/translation/useTypedTranslation'

interface IProps {}

const ResetPassword = (props: IProps) => {
  const { t } = useTypedTranslation()

  return (
    <View style={styles.contain}>
      <TextUI size={25} bold align="center">
        {t('reset password')}
      </TextUI>
      <TextUI variant="body2" align="center">
        {t('enter your email to reset your password')}
      </TextUI>
      <InputUI placeholder={t('email')} />
      <ButtonUI title={t('send')} />
    </View>
  )
}

export default ResetPassword
