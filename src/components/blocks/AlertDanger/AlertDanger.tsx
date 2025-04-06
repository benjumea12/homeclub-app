import { View } from 'react-native'
// Styles
import { styles } from './styles.AlertDanger'
// Components
import { IconUI, TextUI } from '@/src/components/ui'

interface IProps {
  message: string
}

const AlertDanger = (props: IProps) => {
  const { message } = props
  return (
    <View style={styles.contain}>
      <IconUI name="Danger" size={50} color="redDanger" />
      <TextUI size={30} color="redDanger" align="center">
        {message}
      </TextUI>
    </View>
  )
}

export default AlertDanger
