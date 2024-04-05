import ModalWrapper from "components/modal";
import AddNew from "components/add-new";
import TransactionForm from "./transaction-form";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { transactionRoute } from "pages/transactions/routes";

const TransactionFormModal = () => {
    const {transaction,addNew,...searchParams} = useSearch({from:transactionRoute.fullPath});
    const navigate = useNavigate({from:transactionRoute.fullPath});

  return (
      <ModalWrapper
          target={<AddNew/>}
          title={"Transactions"}
          opened={!!transaction || addNew}
          onClose={()=>navigate({to:transactionRoute.fullPath,search:{...searchParams,transaction:undefined}})}
      >
          <TransactionForm/>
      </ModalWrapper>
  )
}

export default TransactionFormModal;