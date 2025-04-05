import { useState, useEffect, useRef } from 'react'
import { View, TouchableOpacity, ScrollView } from 'react-native'
import { MotiView, MotiTransitionProp } from 'moti'
import { Easing, ReduceMotion } from 'react-native-reanimated'
// Components
import { TextUI, IconUI } from '@/src/components/ui'
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

  const scrollViewRef = useRef<ScrollView | null>(null)

  const duration = 200

  const [visibleLocal, setVisibleLocal] = useState(false)

  useEffect(() => {
    if (modalSlideStore.visible) {
      setVisibleLocal(true)
    }
  }, [modalSlideStore.visible])

  useEffect(() => {
    if (visibleLocal) {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollToEnd({ animated: false })
      }
    }
  }, [visibleLocal])

  const handleClose = () => {
    setVisibleLocal(false)
    setTimeout(() => {
      modalSlideStore.close()
    }, duration)
  }

  const transition: MotiTransitionProp = {
    type: 'timing',
    duration: duration,
    easing: Easing.bezier(0.38, 0.59, 0.35, 1.04),
    reduceMotion: ReduceMotion.Never,
  }

  const onGestureEvent = (
    event: GestureEvent<PanGestureHandlerEventPayload>
  ) => {
    if (event.nativeEvent.translationY > 200) {
      handleClose()
    }
  }

  if (!modalSlideStore.visible) {
    return null
  }

  return (
    <View style={styles.container}>
      <MotiView
        style={styles.backdrop}
        animate={{ opacity: visibleLocal ? 1 : 0 }}
        transition={transition}
      />
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <MotiView
          style={styles.content}
          animate={{
            transform: [{ scale: visibleLocal ? 1 : 0.8 }],
            opacity: visibleLocal ? 1 : 0,
          }}
          transition={transition}
        >
          <TouchableOpacity style={styles.close} onPress={handleClose}>
            <IconUI name="close" color="black" size={27} />
          </TouchableOpacity>

          <View style={styles.children}>{modalSlideStore.children}</View>
        </MotiView>
      </PanGestureHandler>
    </View>
  )
}

export default ModelSlide
