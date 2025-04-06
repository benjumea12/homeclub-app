import { useState } from 'react'
import { View, TextInput, TextInputProps, TouchableOpacity } from 'react-native'
import { capitalCase } from 'change-case'
import DateTimePicker from '@react-native-community/datetimepicker'
// Components
import ButtonUI from '../ButtonUI'
import IconUI from '../IconUI'
// Styles
import { styles } from './styles.DatePickerUI'
import { ModalPopup } from '@/src/components/wrappers'

interface IProps {}

const DatePickerUI = (props: IProps & TextInputProps) => {
  const { placeholder = '' } = props

  const modalStore = ModalPopup.useStore()

  const [date, setDate] = useState(new Date(1598051730000))

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate
    setDate(currentDate)
  }

  const closeModal = () => {
    modalStore.close()
  }

  const openModal = () => {
    modalStore.open(
      placeholder,
      <View style={styles.picker}>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          onChange={onChange}
          display="inline"
        />
        <View style={styles.actions}>
          <ButtonUI title="Ok" onPress={closeModal} />
        </View>
      </View>,
      true
    )
  }

  return (
    <TouchableOpacity style={styles.contain} onPress={openModal}>
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

export default DatePickerUI
