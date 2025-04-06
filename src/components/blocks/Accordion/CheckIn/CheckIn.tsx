import { useState } from 'react'
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
  TimePickerUI,
} from '@/src/components/ui'
// Validation
import { Formik } from 'formik'
import * as Yup from 'yup'

const CheckIn = () => {
  const { t } = useTypedTranslation()

  const [initialValues, _] = useState({
    date: '',
    time: '',
  })

  const validationSchema = Yup.object().shape({
    date: Yup.string().required(t('date is required')),
    time: Yup.string().required(t('time is required')),
  })

  const sendForm = (values: typeof initialValues) => {
    console.log('values', values)
  }

  return (
    <View style={styles.contain}>
      <TextUI variant="h2" transform="uppercase">
        {t('check - in')}
      </TextUI>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={sendForm}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <>
            <View style={styles.form}>
              <DatePickerUI
                placeholder={t('check-in date')}
                value={values.date}
                onChangeText={handleChange('date')}
              />
              <TimePickerUI
                placeholder={t('check-in time')}
                value={values.time}
                onChangeText={handleChange('time')}
              />
              {Object.keys(errors).length > 0 && (
                <View style={styles.error}>
                  <TextUI variant="body3" color="redDanger" bold>
                    {`• ${
                      errors[Object.keys(errors)[0] as keyof typeof errors] ??
                      ''
                    }`}
                  </TextUI>
                </View>
              )}
            </View>
            <View style={styles.texts}>
              <TextUI variant="body1">
                Lorem ipsum dolor sit amet consectetur adipiscing elit himenaeos
                sociosqu, lacus nisl sapien arcu scelerisque pellentesque metus.
              </TextUI>
            </View>
            <View style={styles.actions}>
              <ButtonUI
                title={t('save')}
                size="large"
                onPress={() => handleSubmit()}
              />
            </View>

            <View style={styles.texts}>
              <TextUI variant="body1">
                Nisi at vivamus ornare viverra dapibus natoque rutrum curabitur
                molestie curae fames.
              </TextUI>
            </View>
          </>
        )}
      </Formik>
    </View>
  )
}

export default CheckIn
