import {bitcoin, card, money, netbank, upi} from "../assets";

const enum PaymentModeEnum {
    UPI = "UPI",
    CASH = "Cash",
    NET_BANKING = "Net Banking",
    DEBIT_CARD = "Debit Card",
    CRYPTO_CURRENCY = "Crypto Currency",
    CREDIT_CARD = "Credit Card" ,
    OTHER = "Other"
}

const PaymentMode:Record<PaymentModeEnum, {imgUrl:string}> = {
    [PaymentModeEnum.CREDIT_CARD]: {
        imgUrl: ""
    },
    [PaymentModeEnum.OTHER]: {
        imgUrl: ""
    },
    [PaymentModeEnum.CASH]: {
        imgUrl: money
    },
    [PaymentModeEnum.UPI]: {
        imgUrl: upi
    },
    [PaymentModeEnum.DEBIT_CARD]: {
        imgUrl: card
    },
    [PaymentModeEnum.NET_BANKING]: {
        imgUrl: netbank
    },
    [PaymentModeEnum.CRYPTO_CURRENCY]: {
        imgUrl: bitcoin
    }

}
export default PaymentModeEnum;
export {
    PaymentMode
}