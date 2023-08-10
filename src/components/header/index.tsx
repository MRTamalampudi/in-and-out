import React, { FC } from 'react';
import styles from './header.module.scss';
import {backOutline, dClose, notificationOutline} from "../../assets/icons"
import {Button, Menu, Tooltip} from '@mantine/core';
import {useTranslation} from "react-i18next";

interface HeaderProps {
    title: string,
    back?:boolean,
    notification?:boolean,
    close?:boolean,
    onClose?:()=>void;
}

const Header = (
    {
        title,
        back,
        notification,
        close = false,
        onClose
    } :HeaderProps
) => {

    const {t} = useTranslation();
    
    const honorBackButton = () => {
     window.history.back();
    }

    const Close = () => {
      return (
          <>
              {close &&
                  <img
                      src={dClose}
                      className={`${styles.close} icon24`}
                      onClick={onClose}
                  />
              }
          </>
      )
    }

  return (
      <div className={styles.Header}>
          <div className={styles.right}>
              {back && <img
                  src={backOutline}
                  className={"icon24"}
                  onClick={honorBackButton}
              />}
              <span
                  className={"f-16-b"}>
                  {t("transactions")}
              </span>
          </div>
          <div>
              <Close/>
              {
                  notification &&
                  <Menu position={"bottom-end"}>
                      <Menu.Target>
                          <Tooltip label={"Notifications"} position={"left"}>
                              <img
                                  src={notificationOutline}
                                  className={"icon24"} />
                          </Tooltip>
                      </Menu.Target>
                      <Menu.Dropdown>
                          <Menu.Label>Application</Menu.Label>
                          <Menu.Item >Settings</Menu.Item>
                          <Menu.Item >Messages</Menu.Item>
                          <Menu.Item >Gallery</Menu.Item>

                          <Menu.Divider />

                          <Menu.Label>Danger zone</Menu.Label>
                          <Menu.Item >Transfer my data</Menu.Item>
                          <Menu.Item >Delete my account</Menu.Item>
                      </Menu.Dropdown>
                  </Menu>
              }
          </div>
      </div>
  )
}

export default Header;
