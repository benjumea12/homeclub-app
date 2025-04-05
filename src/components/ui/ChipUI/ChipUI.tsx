import { View } from 'react-native'
// Components
import TextUI from '../TextUI'
// Styles
import { styles } from './styles.ChipUI'

interface IChip {
  title: string
  value: string
}

const Chip = (props: IChip) => {
  const { title, value } = props
  return (
    <View style={styles.contain}>
      <TextUI variant="h4" color="white">
        {title}
      </TextUI>
    </View>
  )
}

export default Chip
