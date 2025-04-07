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
import { styles } from './styles.DatePickerUI'
import { ModalPopup } from '@/src/components/wrappers'

interface IProps {}

const DatePickerUI = (props: IProps & TextInputProps) => {
  const { placeholder = '', value, onChangeText } = props

  const modalStore = ModalPopup.useStore()

  const getDisplayValue = () => {
    const selectedOption = value ? new Date(value).toLocaleDateString() : ''
    return selectedOption
  }

  const [date, setDate] = useState(value ? new Date(value) : new Date())
  const [openAndroid, setOpenAndroid] = useState(false)

  const onChange = (_: any, selectedDate: any) => {
    setDate(selectedDate)
    if (onChangeText && selectedDate) {
      const stringifiedDate = selectedDate.toString()
      onChangeText(stringifiedDate)
    }
    Platform.OS === 'android' && setOpenAndroid(false)
  }

  const closeModal = () => {
    setOpenAndroid(false)
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
    <TouchableOpacity
      style={styles.contain}
      onPress={() =>
        Platform.OS === 'android' ? setOpenAndroid(true) : openModal()
      }
    >
      {openAndroid && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          onChange={onChange}
          display="inline"
        />
      )}
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
        <IconUI name="Calendar" />
      </View>
    </TouchableOpacity>
  )
}

export default DatePickerUI
