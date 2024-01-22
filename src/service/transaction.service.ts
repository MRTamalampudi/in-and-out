import { Transaction } from "model";
import { BaseService } from "service/base.service";
import { URL_CONSTANTS } from "constants/url-constants";

export class TransactionService extends BaseService<Transaction> {
    private static instance: TransactionService;
    private constructor() {
        super(URL_CONSTANTS.TRANSACTIONS, (entity) =>
            Transaction.deserialize(entity),
        );
    }

    public static getInstance(): TransactionService {
        if (!TransactionService.instance) {
            TransactionService.instance = new TransactionService();
        }
        return TransactionService.instance;
    }
}
