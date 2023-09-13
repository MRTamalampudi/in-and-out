import React, {FC, useEffect, useState} from 'react';
import styles from './bill-form.module.scss';
import {Button, Modal, TextInput} from "@mantine/core";
import {notificationOutline} from "assets/icons";
import {Icon, Table, ModalTemplate} from "components";

interface BillFormProps {
    title:string;
    opened:boolean;
    setOpened:(bool:boolean)=>void;
}

const BillForm = ({
    title,
    opened,
    setOpened
}:BillFormProps) => {


  return (
      <div className={styles.BillForm}>
          <Modal
              opened={opened}
              onClose={()=> {setOpened(false)}}
              withCloseButton={false}
              size={640}
              centered={true}
              closeOnEscape={true}
              radius={"md"}
          >
              <ModalTemplate
                  onClose={()=>{setOpened(false)}}
                  title={title}
                  primaryAction={()=>{}}
                  secondaryAction={()=>{}}
              >
                  <div className={styles.body}>
                      <div className={styles.rows}>
                          <TextInput
                              label={"Bill"}
                              size={"xs"}
                          />
                          <TextInput
                              label={"Amount"}
                              size={"xs"}
                          />
                          <Icon src={notificationOutline} size={"xl"}/>
                      </div>
                      <div className={styles.rows}>
                          <TextInput
                              label={"Paid by"}
                              size={"xs"}
                          />
                          <TextInput
                              label={"Paid on"}
                              size={"xs"}
                          />
                          <TextInput
                              label={"Paid to"}
                              size={"xs"}
                          />
                          <TextInput
                              label={"Split"}
                              size={"xs"}
                          />
                      </div>
                      <div className={styles.members}>
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
                  </div>
              </ModalTemplate>
          </Modal>
      </div>
  )
}

export default BillForm;
