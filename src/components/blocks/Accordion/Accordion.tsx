import { View, ScrollView, Text } from 'react-native'
import { useTypedTranslation } from '@/src/translation/useTypedTranslation'
// Styles
import { styles } from './styles.Accordion'
// Components
import AccordionItem from './AccordionItem'
import PersonalInformation from './PersonalInformation'
import CheckIn from './CheckIn'

interface Props {}

const Accordion = (prosp: Props) => {
  const {} = prosp

  const { t } = useTypedTranslation()

  const items = [
    {
      indicator: '1',
      title: t('personal information'),
      content: <PersonalInformation />,
      height: 550,
    },
    {
      indicator: '2',
      title: t('arrival and check-in'),
      height: 450,
      content: <CheckIn />,
    },
  ]

  return (
    <View style={styles.contain}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          title={item.title}
          height={item.height}
          children={item.content}
        />
      ))}
    </View>
  )
}

export default Accordion
