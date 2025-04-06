import { useState } from 'react'
import { View, TextInput, TextInputProps, TouchableOpacity } from 'react-native'
import { capitalCase } from 'change-case'
// Components
import IconUI from '../IconUI'
// Styles
import { styles } from './styles.InputUI'

interface IChip {
  secureTextEntry?: boolean
  error?: string
}

const InputUI = (props: IChip & TextInputProps) => {
  const { secureTextEntry, placeholder = '', value, onChangeText } = props

  const [activeSecureTextEntry, setActiveSecureTextEntry] =
    useState(secureTextEntry)

  const handleChangeText = (text: string) => {
    onChangeText && onChangeText(text)
  }

  return (
    <View>
      <View style={styles.contain}>
        <View style={styles.inputContain}>
          <TextInput
            {...props}
            value={value}
            placeholder={capitalCase(placeholder)}
            style={styles.input}
            onChangeText={handleChangeText}
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
    </View>
  )
}

export default InputUI
