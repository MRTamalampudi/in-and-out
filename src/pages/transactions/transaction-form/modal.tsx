import ModalWrapper from "../../../components/modal";
import AddNew from "../../../components/add-new";
import TransactionForm from "./transaction-form";
import {useParams, useSearchParams} from "react-router-dom";
import {useNavigate} from "react-router";

const TransactionFormModal = () => {
    const [searchParams,setSearchParams] = useSearchParams();
    const navigate = useNavigate();

  return (
      <ModalWrapper
          target={<AddNew/>}
          title={"Transactions"}
          opened={!!searchParams.get("view")}
          onClose={()=>navigate("/transactions",{relative:"path"})}
      >
          <TransactionForm/>
      </ModalWrapper>
  )
}

export default TransactionFormModal;