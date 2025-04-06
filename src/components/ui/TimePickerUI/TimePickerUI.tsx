import { useState } from 'react'
import {
  View,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  Platform,
} from 'react-native'
import { capitalCase } from 'change-case'
import DateTimePicker from '@react-native-community/datetimepicker'
// Components
import ButtonUI from '../ButtonUI'
import IconUI from '../IconUI'
// Styles
import { styles } from './styles.TimePickerUI'
import { ModalPopup } from '@/src/components/wrappers'

interface IProps {}

const DatePickerUI = (props: IProps & TextInputProps) => {
  const { placeholder = '', value, onChangeText } = props

  const modalStore = ModalPopup.useStore()

  const getDisplayValue = () => {
    if (!value) return ''
    const dateValue = new Date(value)
    const hours = dateValue.getHours()
    const minutes = dateValue.getMinutes()
    const period = hours >= 12 ? 'PM' : 'AM'
    const formattedHours = hours % 12 || 12
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes

    const selectedOption = `${formattedHours}:${formattedMinutes} ${period}`

    return selectedOption
  }

  const [date, setDate] = useState(value ? new Date(value) : new Date())

  const onChange = (_: any, selectedDate: any) => {
    console.log('selectedDate', selectedDate)

    setDate(selectedDate)
    if (onChangeText && selectedDate) {
      const stringifiedDate = selectedDate.toString()
      onChangeText(stringifiedDate)
    }
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
          mode={'time'}
          onChange={onChange}
          display="spinner"
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
        <IconUI name="Clock" />
      </View>
    </TouchableOpacity>
  )
}

export default DatePickerUI
