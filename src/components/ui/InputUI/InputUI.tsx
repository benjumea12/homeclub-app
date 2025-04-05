import { useState } from 'react'
import { View, TextInput, TextInputProps, TouchableOpacity } from 'react-native'
import { capitalCase } from 'change-case'
// Components
import TextUI from '../TextUI'
import IconUI from '../IconUI'
// Styles
import { styles } from './styles.InputUI'

interface IChip {
  secureTextEntry?: boolean
}

const InputUI = (props: IChip & TextInputProps) => {
  const { secureTextEntry, placeholder = '' } = props

  const [text, onChangeText] = useState('')
  const [activeSecureTextEntry, setActiveSecureTextEntry] =
    useState(secureTextEntry)

  return (
    <View style={styles.contain}>
      <View style={styles.inputContain}>
        <TextInput
          {...props}
          placeholder={capitalCase(placeholder)}
          style={styles.input}
          onChangeText={onChangeText}
          secureTextEntry={activeSecureTextEntry}
        />
      </View>
      {secureTextEntry && (
        <TouchableOpacity
          style={styles.secureTextButton}
          onPress={() => setActiveSecureTextEntry(!activeSecureTextEntry)}
        >
          {activeSecureTextEntry ? (
            <IconUI name="Eye" />
          ) : (
            <IconUI name="EyeOff" />
          )}
        </TouchableOpacity>
      )}
    </View>
  )
}

export default InputUI
