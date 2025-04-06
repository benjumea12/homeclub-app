import { useState } from 'react'
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
// Validation
import { Formik } from 'formik'
import * as Yup from 'yup'

const PersonalInformation = () => {
  const { t } = useTypedTranslation()

  const [initialValues, _] = useState({
    name: '',
    lastNames: '',
    documentType: '',
    birthdate: '',
  })

  const documentTypes = [
    { value: '1', label: t('DNI') },
    { value: '2', label: t('passport') },
    { value: '3', label: t('identity card') },
    { value: '4', label: t('driver license') },
  ]

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t('name is required')),
    lastNames: Yup.string().required(t('last names are required')),
    documentType: Yup.string().required(t('document type is required')),
    birthdate: Yup.string().required(t('birthdate is required')),
  })

  const sendForm = (values: typeof initialValues) => {
    console.log('values', values)
  }

  return (
    <View style={styles.contain}>
      <TextUI variant="h2" transform="uppercase">
        {t('personal data')}
      </TextUI>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={sendForm}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <>
            <View style={styles.form}>
              <InputUI
                placeholder={t('name')}
                value={values.name}
                onChangeText={handleChange('name')}
              />
              <InputUI
                placeholder={t('last names')}
                value={values.lastNames}
                onChangeText={handleChange('lastNames')}
              />
              <SelectUI
                options={documentTypes}
                placeholder={t('document type')}
                value={values.documentType}
                onChangeText={handleChange('documentType')}
              />
              <DatePickerUI
                placeholder={t('birthdate')}
                value={values.birthdate}
                onChangeText={handleChange('birthdate')}
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

export default PersonalInformation
