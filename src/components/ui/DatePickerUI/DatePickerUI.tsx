import { useState } from 'react'
import { View, TextInput, TextInputProps, TouchableOpacity } from 'react-native'
import { capitalCase } from 'change-case'
import DateTimePicker from '@react-native-community/datetimepicker'
// Components
import TextUI from '../TextUI'
import IconUI from '../IconUI'
// Styles
import { styles } from './styles.DatePickerUI'
import { ModalPopup } from '@/src/components/wrappers'

interface IChip {}

const InputUI = (props: IChip & TextInputProps) => {
  const { placeholder = '' } = props

  const modalStore = ModalPopup.useStore()

  const [date, setDate] = useState(new Date(1598051730000))

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate
    setDate(currentDate)
    modalStore.close()
  }

  const openModelSearch = () => {
    modalStore.open(
      placeholder,
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode="date"
        onChange={onChange}
        display="inline"
      />,
      true
    )
  }

  return (
    <TouchableOpacity style={styles.contain} onPress={openModelSearch}>
      {/* {show && ( */}

      {/* )} */}
      <View style={styles.inputContain}>
        <View style={styles.overlay}></View>
        <TextInput
          {...props}
          placeholder={capitalCase(placeholder)}
          style={styles.input}
        />
      </View>
      <View style={styles.secureTextButton}>
        <IconUI name="Calendar" />
      </View>
    </TouchableOpacity>
  )
}

export default InputUI
