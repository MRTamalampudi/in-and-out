import styles from './transaction-modal.module.scss';
import {DatePicker, TimeInput} from "@mantine/dates";
import {Autocomplete, Input, Select, Textarea, TextInput} from "@mantine/core";

export const CashInForm = () => {
  return(
      <div className={styles.cashIn}>
          <div className={styles.body}>
              <div className={styles.dateTimeContainer}>
                  <DatePicker placeholder={"Date"} label={"Date"} variant={'filled'} clearable={false}></DatePicker>
                  <TimeInput placeholder={"Time"} label={"Time"} clearable={false} variant={"filled"}></TimeInput>
              </div>
              <TextInput label={"Amount"} variant={"filled"} placeholder={"Amount"}></TextInput>
              <Textarea label={"Note"} variant={"filled"} placeholder={"Make a note"} maxRows={4} minRows={2}></Textarea>
              <div className={styles.categoryAndPaymentMode}>
                  <Select label={"Category"} variant={"filled"} creatable={true} searchable={true}  data={['React', 'Angular', 'Svelte', 'Vue']}></Select>
                  <Select label={"Payment mode"}variant={"filled"} data={['React', 'Angular', 'Svelte', 'Vue']}></Select>
              </div>
          </div>
          <div>

          </div>
      </div>
  )
}