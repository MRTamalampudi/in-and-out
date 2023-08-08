import React, { FC } from 'react';
import styles from './footer.module.scss';
import {Button} from "@mantine/core";

interface FooterProps {
    help?:boolean,
    secondary?:boolean,
    teritary?:boolean,
    primaryAction:()=>void,
    secondaryAction?:()=>void,
    teritaryAction?:()=>void,
}

const Footer = ({
    help = false,
    secondary = true,
    teritary = false,
    primaryAction,
    secondaryAction,
    teritaryAction,
}:FooterProps) => {

    const Help = () => {
      return (
          <>
              {help && <span>help</span>}
          </>
      )
    }

    const PrimaryButton = () => {
        return (
            <>
                <Button size={"xs"}>Button</Button>
            </>
        )
    }

    const SecondaryButton = () => {
        return (
            <>
                {secondaryAction &&
                    <Button
                        size={"xs"}
                        variant={"outline"}
                    >
                    Button
                    </Button>}
            </>
        )
    }

    const TeritaryButton = () => {
        return (
            <>
                {teritaryAction &&
                    <Button
                        size={"xs"}
                        variant={"subtle"}
                    >
                        Button
                    </Button>}
            </>
        )
    }

  return (
      <div className={styles.Footer}>
          <div className={styles.left}>
              <Help/>
          </div>
          <div className={styles.right}>
              <TeritaryButton/>
              <SecondaryButton/>
              <PrimaryButton/>
          </div>
      </div>
  )
}

export default Footer;
