import { Image } from 'expo-image'
import { View } from 'react-native'

// Styles
import { styles } from './styles.LogoUI'
// Assets
import LogoAsset from '@/assets/icons/logo-header.svg'

interface ILogo {
  size?: number
}

const LogoUI = (props: ILogo) => {
  const { size = 200 } = props

  return (
    <View
      style={{
        width: size,
        height: size / 8,
      }}
    >
      <Image
        style={[
          styles.image,
          {
            width: size,
            height: size / 8,
          },
        ]}
        source={LogoAsset}
        contentFit="contain"
      />
    </View>
  )
}

export default LogoUI
