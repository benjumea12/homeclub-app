import { useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
// Styles
import styles from '@/src/styles/pages/my-account.styles'
import { useTypedTranslation } from '@/src/translation/useTypedTranslation'
// Validation
import { Formik } from 'formik'
import * as Yup from 'yup'
// Components
import {
  TextUI,
  ButtonUI,
  InputUI,
  IconUI,
  SelectUI,
} from '@/src/components/ui'
import { HeaderTabs, Accordion } from '@/src/components/blocks'
import { ModalPopup } from '@/src/components/wrappers'
import i18n from '@/src/translation/i18n'

const MyAccount = () => {
  const { t } = useTypedTranslation()

  const [language, setLanguage] = useState(i18n.language)

  const [initialValues, _] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })

  const validationSchema = Yup.object().shape({
    currentPassword: Yup.string().required(t('current password is required')),
    newPassword: Yup.string().required(t('new password is required')),
    confirmPassword: Yup.string(),
  })

  const sendForm = (values: typeof initialValues) => {
    console.log('values', values)
  }

  const languages = [
    { value: 'es', label: t('spanish') },
    { value: 'en', label: t('english') },
  ]

  const setLaguage = (value: string) => {
    setLanguage(value)

    i18n.changeLanguage(value)
  }
  // setLanguage(value)

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <TextUI variant="h1">{t('language')}</TextUI>
        <View style={styles.form}>
          <SelectUI
            options={languages}
            placeholder={t('document type')}
            value={language}
            onChangeText={setLaguage}
          />
        </View>
      </View>

      <TextUI variant="h1">{t('change password')}</TextUI>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={sendForm}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <>
            <View style={styles.form}>
              <InputUI
                secureTextEntry
                placeholder={t('current password')}
                value={values.currentPassword}
                onChangeText={handleChange('currentPassword')}
              />
              <InputUI
                secureTextEntry
                placeholder={t('new password')}
                value={values.newPassword}
                onChangeText={handleChange('newPassword')}
              />
              <InputUI
                secureTextEntry
                placeholder={t('confirm password')}
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
              />
            </View>
            {Object.keys(errors).length > 0 && (
              <View style={styles.error}>
                <TextUI variant="body3" color="redDanger" bold>
                  {`• ${
                    errors[Object.keys(errors)[0] as keyof typeof errors] ?? ''
                  }`}
                </TextUI>
              </View>
            )}

            <View style={styles.texts}>
              <IconUI name="Alert" color="grey" />
              <TextUI variant="h2" color="grey">
                Nisi at vivamus ornare viverra dapibus natoque rutrum curabitur
                molestie curae fames.
              </TextUI>
            </View>

            <View style={styles.actions}>
              <ButtonUI
                title={t('save')}
                size="large"
                onPress={() => handleSubmit()}
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  )
}

export default MyAccount
