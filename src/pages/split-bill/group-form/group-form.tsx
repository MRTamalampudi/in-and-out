import React, { FC } from 'react';
import styles from './group-form.module.scss';
import {Modal, TextInput} from "@mantine/core";
import {ModalTemplate, Table} from "../../../components";
import {netflix} from "../../../assets";

interface GroupFormProps {
    title:string,
    opened:boolean,
    setOpened:(opened:boolean)=>void,
}

const GroupForm = ({
    title,
    opened,
    setOpened
}:GroupFormProps) => {



  return (
      <div className={styles.GroupForm}>
          <Modal
              opened={opened}
              onClose={()=>setOpened(false)}
              withCloseButton={false}
              centered={true}
              radius={"md"}
          >
              <ModalTemplate
                  onClose={()=>setOpened(false)}
                  title={title}
                  primaryAction={()=>{}}
                  secondaryAction={()=>{}}
              >
                  <div className={styles.body}>
                      <div className={styles.avatar}>
                          <img src={netflix}/>
                      </div>
                      <TextInput
                          label={"Name"}
                          size={"xs"}
                      />
                      <Table
                          title={"Members"}
                          usePagination={false}
                      >
                          <tbody>
                          <tr>
                              <td>Maria Anders</td>
                              <td>Germany</td>
                          </tr>
                          <tr>
                              <td>Francisco Chang</td>
                              <td>Mexico</td>
                          </tr>
                          <tr>
                              <td>Roland Mendel</td>
                              <td>Austria</td>
                          </tr>
                          <tr>
                              <td>Helen Bennett</td>
                              <td>UK</td>
                          </tr>
                          <tr>
                              <td>Yoshi Tannamuri</td>
                              <td>Canada</td>
                          </tr>
                          <tr>
                              <td>Helen Bennett</td>
                              <td>UK</td>
                          </tr>
                          <tr>
                              <td>Yoshi Tannamuri</td>
                              <td>Canada</td>
                          </tr>
                          </tbody>
                      </Table>
                  </div>
              </ModalTemplate>
          </Modal>
      </div>
  )
}

export default GroupForm;
