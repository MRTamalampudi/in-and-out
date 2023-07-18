import React, { FC } from 'react';
import styles from './header.module.scss';
import {backOutline, notificationOutline} from "../../assets/icons"
import {Button, Menu, Tooltip} from '@mantine/core';

interface HeaderProps {
    title: string,
    back?:boolean,
    notification?:boolean,
}

const Header = (
    {
        title,
        back,
        notification
    } :HeaderProps
) => {
    
    const honorBackButton = () => {
     window.history.back();
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
                  {title}
              </span>
          </div>
          <div>
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
