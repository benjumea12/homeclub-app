import { useEffect } from 'react'
import { Slot } from 'expo-router'
import { ThemeProvider, DefaultTheme } from '@react-navigation/native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
// Styles
import styles from '@/src/styles/layouts/start-layout.styles'
// i18n
import '@/src/translation/i18n'
// Components
import { ModalPopup } from '@/src/components/wrappers'

const RootLayout = () => {
  const [loaded, error] = useFonts({
    'Editorial-New': require('@/assets/fonts/EditorialNew-UltralightItalic.otf'),
    'PPNeue-Montreal': require('@/assets/fonts/PPNeueMontreal-Book.otf'),
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <GestureHandlerRootView style={styles._layout}>
        <SafeAreaProvider>
          <SafeAreaView style={styles._appContainer}>
            <Slot />
          </SafeAreaView>
        </SafeAreaProvider>

        <StatusBar style="dark" />

        <ModalPopup.Wrapper />
      </GestureHandlerRootView>
    </ThemeProvider>
  )
}

export default RootLayout
