import styles from './transaction-modal.module.scss';
import {DatePicker, TimeInput} from "@mantine/dates";
import {Autocomplete, Input, Select, Textarea, TextInput,Button} from "@mantine/core";
import {hasLength, useForm,} from "@mantine/form";
import formatters from "chart.js/dist/core/core.ticks";
import {Dispatch, SetStateAction, useState} from "react";
import {Regex} from "../../constants/regex";
import {Categories, Payment_Mode, Period} from "../../enums/filters";
import {TransactionService} from "../../service/transaction.service";
import {Transacation} from "../../model/transacations.model";



interface CashInFormProps {
    setOpen: Dispatch<SetStateAction<boolean>>
}


export const CashInForm = ({setOpen}:CashInFormProps) => {
    const [category,setCategory] = useState<string>(Categories.MAINTAINENCE);
    const [paymentMode,setPaymentMode] = useState<string>(Payment_Mode.CASH);

    const SelectCategory = () => {
      let data = Object.values(Categories)
          .filter((value) => value!=Categories.CATEGORIES)
          .map((data)=>({value:data,label:data}))

        return (
            <Select data={data} value={category} onChange={(value)=>setCategory(value!)} label={Categories.CATEGORIES} />
        )
    }

    const SelectPayment = () => {
        let data = Object.values(Payment_Mode)
            .filter((value) => value!=Payment_Mode.PAYMENT_MODE)
            .map((data)=>({value:data,label:data}))
        return (
            <Select data={data}
                    value={paymentMode}
                    onChange={(value)=>setPaymentMode(value!)}
                    label={Payment_Mode.PAYMENT_MODE} />
        )
    }

    const handleSave = () => {
        let tempData:Transacation = new Transacation();
        tempData.transactionDate = form.values.date.toLocaleDateString() + " " + form.values.date.toLocaleTimeString()
        tempData.note = form.values.note ? form.values.note : '-'
        tempData.amount = form.values.amount ? `$${form.values.amount}` : '$0'
        tempData.category = category;
        tempData.paymentMode = paymentMode;
        tempData.partyName = form.values.party_name ? form.values.party_name : '-'
        TransactionService.create(tempData)
    }

    const form = useForm({
        initialValues:{
            date:new Date(),
            time: new Date(),
            amount: '',
            note:'',
            party_name:''
        },
        validateInputOnChange:true,
        validate : (values) => ({
            amount: validateAmount(values.amount)
        }),
        transformValues : (values) => ({
            amount : `${values.amount} ${values.date.toDateString()}`,
        })
    })


  return(
      <div className={styles.cashIn} >
          <div className={styles.body}>
              <div className={styles.dateTimeContainer}>
                  <DatePicker placeholder={"Date"} label={"Date"} variant={'filled'} clearable={false} {...form.getInputProps('date')}></DatePicker>
                  <TimeInput placeholder={"Time"}  label={"Time"} clearable={false} {...form.getInputProps('time')} variant={"filled"}></TimeInput>
              </div>
              <TextInput withAsterisk={true} label={"Amount"} variant={"filled"} placeholder={"Amount"} {...form.getInputProps('amount')}></TextInput>
              <Textarea label={"Note"} variant={"filled"} placeholder={"Make a note"} maxRows={4} minRows={2}></Textarea>
              <TextInput label={"Party Name"} variant={"filled"} placeholder={"Amount"} {...form.getInputProps('party_name')}></TextInput>
              <div className={styles.categoryAndPaymentMode}>
                  <SelectCategory/>
                  <SelectPayment/>
              </div>
          </div>
          <div className={styles.footer}>
              <Button variant={"subtle"}
                      onClick={()=>setOpen(false)}
                      color={"c-blue-gray"}
                      size={"xs"}>Cancel</Button>
              <Button type={"submit"}
                      onClick={()=>{form.validate();console.log(form.values)}}
                      variant={"outline"}
                      size={"xs"}>Save</Button>
              <Button onClick={()=>handleSave()}
                  size={"xs"}>Save & Add new</Button>
          </div>
      </div>
  )
}


const validateAmount = (value:string) => {
    if (!Regex.AMOUNT_REG_EX.test(value)){
        return 'Please enter proper amount value'
    }
}