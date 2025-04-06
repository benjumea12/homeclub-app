import { View, ScrollView } from 'react-native'
import { useTypedTranslation } from '@/src/translation/useTypedTranslation'
import { useRouter } from 'expo-router'
// Styles
import { styles } from './styles.HeaderTabs'
// Components
import TabItem from './TabItem'

interface Props {}

const HeaderTabs = (prosp: Props) => {
  const {} = prosp

  const router = useRouter()

  const { t } = useTypedTranslation()

  const goToTab = (path: string) => {
    router.push(path)
  }

  const pages = [
    {
      title: t('reservations'),
      path: '/home',
    },
    {
      title: t('my documents'),
      path: '/home/my-documents',
    },
    {
      title: t('my account'),
      path: '/home/my-account',
    },
    {
      title: t('favorites'),
      path: '/home/favorites',
    },
  ]

  return (
    <View style={styles.contain}>
      <ScrollView
        horizontal={true}
        style={styles.scrollContainer}
        showsHorizontalScrollIndicator={false}
      >
        {pages.map((item, index) => (
          <TabItem key={index} item={item} onPress={goToTab} />
        ))}
        {/* // <TabItem title={} onPress={handlePress} />
        // <TabItem title={t('my documents')} onPress={handlePress} />
        // <TabItem title={t('my account')} onPress={handlePress} />
        // <TabItem title={t('favorites')} onPress={handlePress} /> */}
      </ScrollView>
    </View>
  )
}

export default HeaderTabs
