import ModalWrapper from "../../../components/modal";
import AddNew from "../../../components/add-new";
import TransactionForm from "./transaction-form";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { transactionRoute } from "pages/transactions/routes";

const TransactionFormModal = () => {
    const {transaction} = useSearch({from:transactionRoute.fullPath});
    const navigate = useNavigate();

  return (
      <ModalWrapper
          target={<AddNew/>}
          title={"Transactions"}
          opened={!!transaction}
          onClose={()=>navigate({to:transactionRoute.fullPath})}
      >
          <TransactionForm/>
      </ModalWrapper>
  )
}

export default TransactionFormModal;