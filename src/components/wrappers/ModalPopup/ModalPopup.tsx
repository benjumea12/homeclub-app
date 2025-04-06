import { useState, useEffect, useRef } from 'react'
import { View, TouchableOpacity, ScrollView } from 'react-native'
import { MotiView, MotiTransitionProp } from 'moti'
import { Easing, ReduceMotion } from 'react-native-reanimated'
// Components
import { IconUI } from '@/src/components/ui'
// Styles
import { styles } from './styles.ModalPopup'
import {
  PanGestureHandler,
  GestureEvent,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler'
// Store
import { useStore } from './store.ModalPopup'

const ModelSlide = () => {
  const modalSlideStore = useStore()

  const duration = 300

  const [visibleLocal, setVisibleLocal] = useState(false)

  useEffect(() => {
    if (modalSlideStore.visible) {
      setVisibleLocal(true)
    } else {
      handleClose()
    }
  }, [modalSlideStore.visible])

  const handleClose = () => {
    setVisibleLocal(false)
    setTimeout(() => {
      modalSlideStore.close()
    }, duration + 200)
  }

  const transition: MotiTransitionProp = {
    type: 'timing',
    duration: duration,
    easing: Easing.bezier(0.38, 0.59, 0.35, 1.04),
    reduceMotion: ReduceMotion.Never,
  }

  if (!modalSlideStore.visible && !visibleLocal) {
    return null
  }

  return (
    <View style={styles.container}>
      <MotiView
        style={styles.backdrop}
        animate={{ opacity: visibleLocal ? 1 : 0 }}
        transition={transition}
      />
      <MotiView
        style={[
          styles.content,
          modalSlideStore.minimal && {
            paddingVertical: 0,
            paddingHorizontal: 0,
          },
        ]}
        animate={{
          transform: [{ scale: visibleLocal ? 1 : 0.8 }],
          opacity: visibleLocal ? 1 : 0,
        }}
        transition={transition}
      >
        {!modalSlideStore.minimal && (
          <TouchableOpacity style={styles.close} onPress={handleClose}>
            <IconUI name="close" color="black" size={27} />
          </TouchableOpacity>
        )}

        <View style={styles.children}>{modalSlideStore.children}</View>
      </MotiView>
    </View>
  )
}

export default ModelSlide
