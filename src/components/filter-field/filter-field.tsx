import styles from "./filter-field.module.scss";
import { Button } from "@mantine/core";
import { FieldValues, useController, UseControllerProps, useForm } from "react-hook-form";
import OperatorsEnum from "enum/operators.enum";
import useGetTransacteeQuery from "service/react-query-hooks/transactee-query";
import TransactionTypeEnum from "enum/transaction-type.enum";
import SelectInputForm from "forms/inputs/select-input-form";
import { data } from "autoprefixer";

type FilterFieldProps = {
    index?:number;
    update?:any;
} ;
const FilterField = (props: FilterFieldProps) => {

    const { control,watch, getValues, handleSubmit } = useForm({ mode: "onChange" });

    const keys = {
        TRANSACTEE: "transactee",
        AMOUNT: "amount",
        TRANSACTION_TYPE: "transactionType",
        DATE: "date",
    };

    const FilterKeys: {
        [key in keyof typeof keys]: {
            value: (typeof keys)[key];
            label: string;
        };
    } = {
        TRANSACTEE: { value: keys.TRANSACTEE, label: "Transactee" },
        AMOUNT: { value: keys.AMOUNT, label: "Amount" },
        TRANSACTION_TYPE: {
            value: keys.TRANSACTION_TYPE,
            label: "Transaction type",
        },
        DATE: { value: keys.DATE, label: "Date" },
    };

    const FilterOperators = {
        TRANSACTEE: [OperatorsEnum.EQUALS, OperatorsEnum.NOT_EQUALS],
        AMOUNT: [
            OperatorsEnum.EQUALS,
            OperatorsEnum.NOT_EQUALS,
            OperatorsEnum.GREATER_THAN_OR_EQUAL,
            OperatorsEnum.LESS_THAN_OR_EQUAL,
        ],
        TRANSACTION_TYPE: [OperatorsEnum.EQUALS, OperatorsEnum.NOT_EQUALS],
        DATE: [OperatorsEnum.EQUALS, OperatorsEnum.NOT_EQUALS],
    };

    const FilterValues = {
        TRANSACTEE: useGetTransacteeQuery()?.data?.content?.map(tr=> tr.name),
        TRANSACTION_TYPE: [
            TransactionTypeEnum.BALANCE,
            TransactionTypeEnum.CASH_IN,
            TransactionTypeEnum.CASH_OUT,
        ],
    };

    const map = new Map();
    map.set(keys.TRANSACTEE, {
        keys: FilterKeys.TRANSACTEE,
        operators: FilterOperators.TRANSACTEE,
        values: FilterValues.TRANSACTEE,
    });
    map.set(keys.TRANSACTION_TYPE, {
        keys: FilterKeys.TRANSACTION_TYPE,
        operators: FilterOperators.TRANSACTION_TYPE,
        values: FilterValues.TRANSACTION_TYPE,
    });
    map.set(keys.AMOUNT, {
        keys: FilterKeys.AMOUNT,
        operators: FilterOperators.AMOUNT,
        values: null,
    });
    map.set(keys.DATE, {
        keys: FilterKeys.DATE,
        operators: FilterOperators.DATE,
        values: null,
    });

    console.log(getValues("filterKey"));
    watch('filterKey')
    watch((data)=> props.update && props.update(props.index,data))

    return (
        <div className={styles.filterField}>
            <SelectInputForm
                data={Object.values(FilterKeys)}
                name={"filterKey"}
                control={control}
            />
            <SelectInputForm
                data={map.get(getValues("filterKey"))?.operators}
                name={"filterOperator"}
                control={control}
            />
            <SelectInputForm
                data={map.get(getValues("filterKey"))?.values}
                name={"filterValue"}
                control={control}
            />
            {/*<Button*/}
            {/*    onClick={handleSubmit((data) =>*/}
            {/*        console.log(*/}
            {/*            data,*/}
            {/*            getValues("filterKey"),*/}
            {/*            map.get(getValues("filterKey")),*/}
            {/*        ),*/}
            {/*    )}*/}
            {/*>*/}
            {/*    CLICK*/}
            {/*</Button>*/}
        </div>
    );
};

export default FilterField;
