import styles from './transaction-modal.module.scss';
import {DatePicker, TimeInput} from "@mantine/dates";
import {Button, Select, Textarea, TextInput} from "@mantine/core";
import {useForm,} from "@mantine/form";
import {Dispatch, SetStateAction, useState} from "react";
import {Regex} from "../../constants/regex";
import {Categories, Payment_Mode} from "../../enums/filters";
import {TransactionService} from "../../service/transaction.service";
import {Transacation} from "../../model/transacations.model";
import {PrimaryTerms} from "../../enums/primary-terms";


interface CashInFormProps {
    setOpen: Dispatch<SetStateAction<boolean>>
    transactionType?:PrimaryTerms.CASH_OUT | PrimaryTerms.CASH_IN,
    transaction?:Transacation
}


export const TransactionForm = ({transaction,setOpen,transactionType=PrimaryTerms.CASH_IN}:CashInFormProps) => {
    const [category,setCategory] = useState<string>(transaction?.category||Categories.MAINTAINENCE);
    const [paymentMode,setPaymentMode] = useState<string>(transaction?.paymentMode||Payment_Mode.CASH);

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
            amount: transaction?.amount || '',
            note: transaction?.note || '',
            party_name:transaction?.partyName ||''
        },
        validateInputOnChange:true,
        validate : (values) => ({
            amount: validateAmount(values.amount)
        }),
        transformValues : (values) => ({
            amount : `${values.amount} ${values.date.toDateString()}`,
        })
    })

    const CashInFooter = () => {
        return (
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
        )
    }

    const CashOutFooter = () => {
      return (
          <div className={styles.footer}>
              <Button variant={"subtle"}
                      color={"c-blue-gray"}
                      size={"xs"}
                      onClick={()=>setOpen(false)}>Cancel</Button>
              <Button color={"c-red"} size={"xs"}>Save</Button>
          </div>
      )
    }

    const footer = () => {
        switch (transactionType) {
            case PrimaryTerms.CASH_IN:
                return <CashInFooter/>
            case PrimaryTerms.CASH_OUT:
                return <CashOutFooter/>
        }
    }


  return(
      <div className={styles.cashIn} >
          <div className={styles.body}>
              <div className={styles.dateTimeContainer}>
                  <DatePicker placeholder={"Date"} label={"Date"} variant={'filled'} clearable={false} {...form.getInputProps('date')}></DatePicker>
                  <TimeInput placeholder={"Time"}  label={"Time"} clearable={false} {...form.getInputProps('time')} variant={"filled"}></TimeInput>
              </div>
              <TextInput withAsterisk={true} label={"Amount"} variant={"filled"} placeholder={"Amount"} {...form.getInputProps('amount')}></TextInput>
              <Textarea label={"Note"} variant={"filled"} placeholder={"Make a note"} maxRows={4} minRows={2} {...form.getInputProps('note')}></Textarea>
              <TextInput label={"Party Name"} variant={"filled"} placeholder={"Party name"} {...form.getInputProps('party_name')}></TextInput>
              <div className={styles.categoryAndPaymentMode}>
                  <SelectCategory/>
                  <SelectPayment/>
              </div>
          </div>
          {footer()}
      </div>
  )
}


const validateAmount = (value:string) => {
    if (!Regex.AMOUNT_REG_EX.test(value)){
        return 'Please enter proper amount value'
    }
}