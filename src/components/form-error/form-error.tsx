import React, { FC } from 'react';
import styles from './form-error.module.scss';
import {ErrorIcon} from "../icons";

interface FormErrorProps {
    message:string
}

const FormError = ({message}:FormErrorProps) => {
  return (
      <div className={styles.FormError}>
          <ErrorIcon
              height={16}
              width={16}
              className={styles.icon}
          />
          <span
              className={styles.message}
          >
              {message}
          </span>
      </div>
  )
}

export default FormError;
