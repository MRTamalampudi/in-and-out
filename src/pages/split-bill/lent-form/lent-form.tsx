import React from "react";
import styles from "./lent-form.module.scss";
import { Modal } from "@mantine/core";
import { ModalTemplate } from "components";

interface LentFormProps {
    opened: boolean;
    setOpened: (opened: boolean) => void;
}

const LentForm = ({
    opened,
    setOpened
}:LentFormProps) => {
  return (
      <div className={styles.LentForm}>
          <Modal
              opened={opened}
              onClose={()=>setOpened(false)}
              withCloseButton={false}
              centered={true}
          >
              <ModalTemplate
                  onClose={()=>setOpened(false)}
                  title={"Lent"}
                  padding={false}
              >
                  {/*<Table*/}
                  {/*    title={"Members"}*/}
                  {/*    usePagination={false}*/}
                  {/*    borders={false}*/}
                  {/*    metaRow={false}*/}
                  {/*>*/}
                  {/*    <tbody>*/}
                  {/*    <tr>*/}
                  {/*        <td>Maria Anders</td>*/}
                  {/*        <td>Germany</td>*/}
                  {/*    </tr>*/}
                  {/*    <tr>*/}
                  {/*        <td>Francisco Chang</td>*/}
                  {/*        <td>Mexico</td>*/}
                  {/*    </tr>*/}
                  {/*    <tr>*/}
                  {/*        <td>Roland Mendel</td>*/}
                  {/*        <td>Austria</td>*/}
                  {/*    </tr>*/}
                  {/*    <tr>*/}
                  {/*        <td>Helen Bennett</td>*/}
                  {/*        <td>UK</td>*/}
                  {/*    </tr>*/}
                  {/*    <tr>*/}
                  {/*        <td>Yoshi Tannamuri</td>*/}
                  {/*        <td>Canada</td>*/}
                  {/*    </tr>*/}
                  {/*    <tr>*/}
                  {/*        <td>Helen Bennett</td>*/}
                  {/*        <td>UK</td>*/}
                  {/*    </tr>*/}
                  {/*    <tr>*/}
                  {/*        <td>Yoshi Tannamuri</td>*/}
                  {/*        <td>Canada</td>*/}
                  {/*    </tr>*/}
                  {/*    </tbody>*/}
                  {/*</Table>*/}
              </ModalTemplate>
          </Modal>
      </div>
  )
}

export default LentForm;
