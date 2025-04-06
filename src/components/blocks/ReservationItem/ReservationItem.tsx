import { View } from 'react-native'
import { Image } from 'expo-image'
// Styles
import { styles } from './styles.ReservationItem'
import { TextUI, ButtonUI, InputUI, IconUI } from '@/src/components/ui'

interface IProps {
  item: any
}

const ReservationItem = (props: IProps) => {
  const { item } = props
  return (
    <View style={styles.contain}>
      <View style={styles.imageContain}>
        <Image
          style={styles.image}
          source={item.image}
          contentFit="cover"
          transition={1000}
        />
      </View>
      <View style={styles.content}>
        <View>
          <TextUI size={26} bold>
            {item.name}
          </TextUI>
          <TextUI variant="body2">Lorem ipsum dolor</TextUI>

          <View style={styles.list}>
            <View style={styles.listItem}>
              <IconUI name="MapPin" size={15} />
              <TextUI variant="body2">{item.location}</TextUI>
            </View>
          </View>
        </View>

        <View style={styles.status}>
          <TextUI
            variant="body2"
            bold
            color={item.status === 'free' ? 'greenDark' : 'redDanger'}
            decoration="underline"
          >
            {item.status}
          </TextUI>
          <TextUI variant="body2" bold>
            -
          </TextUI>
          <TextUI variant="body2" bold>
            {`$${item.price.toLocaleString()}`}
          </TextUI>
        </View>
      </View>

      {/*  */}
    </View>
  )
}

export default ReservationItem
