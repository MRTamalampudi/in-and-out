import {PaymentModeEnum} from "enums";

const PaymentModeAttributes:Record<PaymentModeEnum, {imgUrl:string}> = {
    [PaymentModeEnum.CASH]: {
        imgUrl: ""
    },
    [PaymentModeEnum.UPI]: {
        imgUrl: ""
    },
    [PaymentModeEnum.DEBIT_CARD]: {
        imgUrl: ""
    },
    [PaymentModeEnum.CREDIT_CARD]: {
        imgUrl: ""
    },
    [PaymentModeEnum.NET_BANKING]: {
        imgUrl: ""
    },
    [PaymentModeEnum.CRYPTO_CURRENCY]: {
        imgUrl: ""
    }

}

export default PaymentModeAttributes;