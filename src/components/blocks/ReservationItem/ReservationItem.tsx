import { View } from 'react-native'
import { Image } from 'expo-image'
// Styles
import { styles } from './styles.ReservationItem'
import { TextUI, ButtonUI, InputUI, IconUI } from '@/src/components/ui'

interface IProps {}

const ReservationItem = (props: IProps) => {
  return (
    <View style={styles.contain}>
      <View style={styles.imageContain}>
        <Image
          style={styles.image}
          source="https://albura.allpereirahotels.com/data/Images/OriginalPhoto/10573/1057332/1057332523/image-pereira-albura-hotel-1.JPEG"
          contentFit="cover"
          transition={1000}
        />
      </View>
      <View style={styles.content}>
        <View>
          <TextUI size={26} bold>
            Title
          </TextUI>
          <TextUI variant="body2">Lorem ipsum dolor</TextUI>

          <View style={styles.list}>
            <View style={styles.listItem}>
              <IconUI name="MapPin" size={15} />
              <TextUI variant="body2">Ubication</TextUI>
            </View>
          </View>
        </View>

        <View style={styles.status}>
          <TextUI variant="body2" bold color="greenDark" decoration="underline">
            reserved
          </TextUI>
          <TextUI variant="body2" bold>
            -
          </TextUI>
          <TextUI variant="body2" bold>
            $200.000
          </TextUI>
        </View>
      </View>

      {/*  */}
    </View>
  )
}

export default ReservationItem
