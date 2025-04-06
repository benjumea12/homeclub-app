import { View } from 'react-native'
// Components
import { LogoUI, ButtonUI } from '@/src/components/ui'
// Styles
import { styles } from './styles.HeaderPage'
import { useTypedTranslation } from '@/src/translation/useTypedTranslation'
import { supabase } from '@/src/libs/initSupabase'
import { useRouter } from 'expo-router'

import { useAuth } from '@/src/contexts/AuthContext'

const HeaderPage = () => {
  const { t } = useTypedTranslation()

  const { active } = useAuth()

  const router = useRouter()

  const logOut = () => {
    console.log('singOut')
    supabase.auth
      .signOut()
      .then(() => {
        router.replace('/')
        console.log('User signed out successfully')
      })
      .catch((error) => {
        console.error('Error signing out:', error.message)
      })
  }

  return (
    <View style={styles.header}>
      <LogoUI size={200} />
      {active && (
        <ButtonUI title={t('log out')} size="small" onPress={logOut} />
      )}
    </View>
  )
}

export default HeaderPage
