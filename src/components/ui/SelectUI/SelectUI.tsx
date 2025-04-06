import { useState } from 'react'
import { View, TextInput, TextInputProps, TouchableOpacity } from 'react-native'
import { capitalCase } from 'change-case'
import { Picker } from '@react-native-picker/picker'
// Components
import IconUI from '../IconUI'
import ButtonUI from '../ButtonUI'
// Styles
import { styles } from './styles.SelectUI'
import { ModalPopup } from '@/src/components/wrappers'

interface IProps {}

const SelectUI = (props: IProps & TextInputProps) => {
  const { placeholder = '' } = props

  const modalStore = ModalPopup.useStore()

  const [selectedLanguage, setSelectedLanguage] = useState()

  const onChange = (value: any) => {
    setSelectedLanguage(value)
    modalStore.close()
  }

  const openModelSearch = () => {
    modalStore.open(
      placeholder,
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => onChange(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>,
      true
    )
  }

  return (
    <TouchableOpacity style={styles.contain} onPress={openModelSearch}>
      <View style={styles.inputContain}>
        <View style={styles.overlay}></View>
        <TextInput
          {...props}
          value={selectedLanguage}
          placeholder={capitalCase(placeholder)}
          style={styles.input}
        />
      </View>
      <View style={styles.secureTextButton}>
        <IconUI name="ArrowDown" />
      </View>
    </TouchableOpacity>
  )
}

export default SelectUI
