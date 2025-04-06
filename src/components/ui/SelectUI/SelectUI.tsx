import { View, TextInput, TextInputProps, TouchableOpacity } from 'react-native'
import { capitalCase } from 'change-case'
// Components
import IconUI from '../IconUI'
import TextUI from '../TextUI'
// Styles
import { styles } from './styles.SelectUI'
import { ModalPopup } from '@/src/components/wrappers'

interface IProps {
  options: {
    value: string
    label: string
  }[]
}

const SelectUI = (props: IProps & TextInputProps) => {
  const { placeholder = '', options, onChangeText, value } = props

  const modalStore = ModalPopup.useStore()

  const handleChange = (value: any) => {
    if (onChangeText) {
      onChangeText(value)
    }
    closeModal()
  }

  const closeModal = () => {
    modalStore.close()
  }

  const openModelSearch = () => {
    modalStore.open(
      placeholder,
      <View style={styles.options}>
        {options.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.option,
              index === options.length - 1 && { borderBottomWidth: 0 },
            ]}
            onPress={() => handleChange(item.value)}
          >
            <TextUI bold={value === item.value}>{item.label}</TextUI>
          </TouchableOpacity>
        ))}
      </View>,
      true
    )
  }

  const getDisplayValue = () => {
    const selectedOption = options.find((option) => option.value === value)
    return selectedOption ? selectedOption.label : ''
  }

  return (
    <TouchableOpacity style={styles.contain} onPress={openModelSearch}>
      <View style={styles.inputContain}>
        <View style={styles.overlay}></View>
        <TextInput
          {...props}
          value={getDisplayValue()}
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
