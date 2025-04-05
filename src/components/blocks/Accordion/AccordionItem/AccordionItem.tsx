import { useState } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { MotiView, MotiTransitionProp } from 'moti'
import { Easing, ReduceMotion } from 'react-native-reanimated'
// Components
import { TextUI, IconUI } from '@/src/components/ui'
// Styles
import { styles } from './styles.AccordionItem'

interface Props {
  index: number
  title: string
  height: number
  children: React.ReactNode
}

const AccordionItem = (props: Props) => {
  const { index, title, height, children } = props

  const [open, setOpen] = useState(false)

  const duration = 300

  const transition: MotiTransitionProp = {
    type: 'timing',
    duration: duration,
    easing: Easing.bezier(0.38, 0.59, 0.35, 1.04),
    reduceMotion: ReduceMotion.Never,
  }

  return (
    <View style={styles.contain}>
      <TouchableOpacity style={styles.header} onPress={() => setOpen(!open)}>
        <View style={styles.headerLeft}>
          <View style={styles.indicator}>
            <TextUI bold>{index + 1}</TextUI>
          </View>

          <TextUI size={30}>{title}</TextUI>
        </View>

        <View
          style={{
            transform: [
              {
                rotate: open ? '180deg' : '0deg',
              },
            ],
          }}
        >
          <IconUI name="ArrowDown" size={28} />
        </View>
      </TouchableOpacity>
      <MotiView
        style={styles.animate}
        animate={{
          height: open ? height : 0,
        }}
        transition={transition}
      >
        {open && <View style={styles.content}>{children}</View>}
      </MotiView>
    </View>
  )
}

export default AccordionItem
