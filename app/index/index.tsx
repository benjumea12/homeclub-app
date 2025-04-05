import { useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
// Styles
import styles from '@/src/styles/pages/start.styles'
import { useTypedTranslation } from '@/src/translation/useTypedTranslation'

// Components
import { TextUI, ButtonUI, InputUI } from '@/src/components/ui'
import { HeaderTabs, Accordion } from '@/src/components/blocks'
import { ModalPopup } from '@/src/components/wrappers'

import { useRouter } from 'expo-router'

const Index = () => {
  const { t } = useTypedTranslation()

  const [userType, setUserType] = useState('guest')

  const router = useRouter()

  const handleLogin = () => {
    router.push('home')
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
        <View style={styles.formContain}>
          <InputUI placeholder={t('email')} />
          <InputUI placeholder={t('password')} secureTextEntry />
          <TouchableOpacity style={styles.restorePassword}>
            <TextUI variant="body1" color="grey">
              {t('forgot your password?')}
            </TextUI>
            <TextUI variant="body1" bold>
              {t('restore')}
            </TextUI>
          </TouchableOpacity>
        </View>
        <View style={styles.formActions}>
          <ButtonUI title={t('log in')} size="large" onPress={handleLogin} />
        </View>
      </View>
    </View>
  )
}

export default Index
