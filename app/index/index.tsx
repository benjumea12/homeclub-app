import { useState, useEffect } from 'react'
import { useRouter } from 'expo-router'
import { View, TouchableOpacity, ActivityIndicator } from 'react-native'
// Styles
import styles from '@/src/styles/pages/start.styles'
import { useTypedTranslation } from '@/src/translation/useTypedTranslation'
// Components
import { TextUI, ButtonUI, InputUI } from '@/src/components/ui'
import { AlertDanger, ResetPassword } from '@/src/components/blocks'
// Validation
import { Formik } from 'formik'
import * as Yup from 'yup'
// Libs
import { supabase } from '@/src/libs/initSupabase'
// Contexts
import { useAuth } from '@/src/contexts/AuthContext'
import { ModalPopup } from '@/src/components/wrappers'

const Index = () => {
  const { t } = useTypedTranslation()
  const router = useRouter()

  const { createSession } = useAuth()

  const modalPopupStore = ModalPopup.useStore()

  const [loading, setLoading] = useState(false)

  const [userType, setUserType] = useState('guest')
  const [initialValues, _] = useState({
    email: 'benjumeac22@outlook.com',
    password: 'secret123',
  })

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(t('invalid email'))
      .required(t('email is required')),
    password: Yup.string()
      .min(6, t('minimum of 6 characters'))
      .required(t('password is required')),
  })

  const sendForm = async (values: typeof initialValues) => {
    setLoading(true)
    console.log('values', values)
    const { data, error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    })

    setTimeout(() => {
      setLoading(false)
    }, 500)

    if (error) {
      sendFormError(error.message)
    } else {
      createSession({
        email: data.user?.email ?? '',
        id: data.user?.id ?? '',
      })
      router.replace('/home')
    }
  }

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession()
      if (error) {
        console.error('Error al obtener la sesión:', error.message)
      } else if (session) {
        createSession({
          email: session.user?.email ?? '',
          id: session.user?.id ?? '',
        })
        router.replace('/home')
      } else {
        console.log('No hay sesión activa')
      }
    }
    checkSession()
  }, [])

  const sendFormError = (message: string) => {
    modalPopupStore.open('danger', <AlertDanger message={t(message as any)} />)
  }

  const resetPassword = () => {
    modalPopupStore.open('danger', <ResetPassword />)
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.userTypes}>
          <TouchableOpacity onPress={() => setUserType('guest')}>
            <TextUI
              font="Editorial-New"
              variant="h1"
              decoration={userType === 'guest' ? 'underline' : 'none'}
            >
              {t('guest')}
            </TextUI>
          </TouchableOpacity>
          <TextUI font="Editorial-New" variant="h1">
            /
          </TextUI>
          <TouchableOpacity onPress={() => setUserType('owner')}>
            <TextUI
              font="Editorial-New"
              variant="h1"
              decoration={userType === 'owner' ? 'underline' : 'none'}
            >
              {t('owner')}
            </TextUI>
          </TouchableOpacity>
        </View>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={sendForm}
        >
          {({ handleChange, handleSubmit, values, errors }) => (
            <>
              <View style={styles.formContain}>
                <InputUI
                  placeholder={t('email')}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  error={errors.email}
                />
                <InputUI
                  placeholder={t('password')}
                  secureTextEntry
                  value={values.password}
                  onChangeText={handleChange('password')}
                  error={errors.password}
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
                <TouchableOpacity
                  style={styles.restorePassword}
                  onPress={resetPassword}
                >
                  <TextUI variant="body1" color="grey">
                    {t('forgot your password?')}
                  </TextUI>
                  <TextUI variant="body1" bold>
                    {t('restore')}
                  </TextUI>
                </TouchableOpacity>
              </View>
              <View style={styles.formActions}>
                {loading ? (
                  <ActivityIndicator />
                ) : (
                  <ButtonUI
                    title={t('log in')}
                    size="large"
                    onPress={() => handleSubmit()}
                    // onPress={handleNavigate}
                  />
                )}
              </View>
            </>
          )}
        </Formik>
      </View>
    </View>
  )
}

export default Index
