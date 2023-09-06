import {PaymentModeEnum} from "enums";
import {bitcoin, card, money, netbank, upi} from "../assets";

const PaymentModeAttributes:Record<PaymentModeEnum, {imgUrl:string}> = {
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

export default PaymentModeAttributes;